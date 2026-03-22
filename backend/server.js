import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 3000);
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '*')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const REPORT_URL = process.env.REPORT_URL;
const GEMINI_URL = GEMINI_API_KEY
  ? `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_API_KEY}`
  : null;

const sendError = (res, status, errorCode, message) => {
  res.status(status).json({
    errorCode,
    error: message,
  });
};

const classifyGeminiError = (status, errorStatus, message) => {
  const normalizedMessage = String(message || '').toLowerCase();
  const normalizedStatus = String(errorStatus || '').toUpperCase();

  if (status === 429) {
    return { status: 429, errorCode: 'busy', message: 'The chat service is busy.' };
  }

  if (
    normalizedStatus === 'INVALID_ARGUMENT' &&
    (normalizedMessage.includes('api key') ||
      normalizedMessage.includes('permission') ||
      normalizedMessage.includes('not enabled') ||
      normalizedMessage.includes('unsupported') ||
      normalizedMessage.includes('model'))
  ) {
    return {
      status: 502,
      errorCode: 'service_unavailable',
      message: 'The chat service is not available right now.',
    };
  }

  if (status === 400) {
    return {
      status: 400,
      errorCode: 'bad_request',
      message: 'The request could not be processed.',
    };
  }

  return {
    status: 502,
    errorCode: 'service_unavailable',
    message: 'The AI service could not process the request.',
  };
};

const corsOptions = allowedOrigins.includes('*')
  ? { origin: true }
  : {
      origin(origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
          return;
        }

        callback(new Error('Origin not allowed by CORS'));
      },
    };

app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));

app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'jagruk-mahila-backend',
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/chat', async (req, res) => {
  if (!GEMINI_URL) {
    sendError(res, 500, 'service_unavailable', 'Chat service is not configured.');
    return;
  }

  const { contents, systemInstruction, generationConfig } = req.body ?? {};

  if (!Array.isArray(contents) || contents.length === 0) {
    sendError(res, 400, 'bad_request', 'Request must include a non-empty contents array.');
    return;
  }

  try {
    const upstream = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: systemInstruction,
        contents,
        generationConfig,
      }),
    });

    const text = await upstream.text();
    let json = null;

    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = null;
    }

    if (!upstream.ok) {
      const providerStatus = json?.error?.status || '';
      const providerMessage = json?.error?.message || text || 'Unknown Gemini error';

      console.error('Gemini upstream error', {
        status: upstream.status,
        providerStatus,
        providerMessage,
      });

      const classified = classifyGeminiError(
        upstream.status,
        providerStatus,
        providerMessage,
      );

      sendError(res, classified.status, classified.errorCode, classified.message);
      return;
    }

    res.json(json);
  } catch (error) {
    sendError(
      res,
      502,
      'service_unavailable',
      error instanceof Error ? error.message : 'Unable to reach the AI service.',
    );
  }
});

app.post('/report', async (req, res) => {
  if (!REPORT_URL) {
    sendError(res, 500, 'service_unavailable', 'Report service is not configured.');
    return;
  }

  const { message, query, reason, email } = req.body ?? {};

  if (!message || !reason) {
    sendError(res, 400, 'bad_request', 'Request must include message and reason.');
    return;
  }

  try {
    const upstream = await fetch(REPORT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        query: query ?? 'N/A',
        reason,
        email: email ?? null,
      }),
    });

    const text = await upstream.text();
    let json = null;

    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = null;
    }

    if (!upstream.ok || json?.status !== 'success') {
      if (upstream.status === 400) {
        sendError(res, 400, 'bad_request', 'The report request could not be processed.');
        return;
      }

      if (upstream.status === 429) {
        sendError(res, 429, 'busy', 'The report service is busy.');
        return;
      }

      sendError(res, 502, 'service_unavailable', json?.message || text || 'The report service could not process the request.');
      return;
    }

    res.json({ status: 'success' });
  } catch (error) {
    sendError(
      res,
      502,
      'service_unavailable',
      error instanceof Error ? error.message : 'Unable to reach the report service.',
    );
  }
});

app.listen(port, host, () => {
  console.log(`Jagruk Mahila backend listening on http://${host}:${port}`);
});
