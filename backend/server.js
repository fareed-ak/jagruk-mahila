import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { rateLimit, ipKeyGenerator } from 'express-rate-limit';

const app = express();
const host = process.env.HOST || '0.0.0.0';
const port = Number(process.env.PORT || 3000);
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '*')
  .split(',')
  .map((value) => value.trim())
  .filter(Boolean);

const REPORT_URL = process.env.REPORT_URL;
const CHAT_URL = process.env.CHAT_URL;
const CHAT_API_KEY = process.env.CHAT_API_KEY;
const isProduction = process.env.NODE_ENV === 'production';

const sendError = (res, status, errorCode, message, debugMessage = null) => {
  const payload = {
    errorCode,
    error: message,
  };

  if (!isProduction && debugMessage) {
    payload.debugMessage = debugMessage;
  }

  res.status(status).json(payload);
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
app.set('trust proxy', 1);

const rateLimitMessage = {
  error: 'Too many requests, please try again shortly.',
};

const rateLimitKeyGenerator = (req) => req.headers['x-client-id'] || ipKeyGenerator(req);

const reportLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: rateLimitKeyGenerator,
  message: rateLimitMessage,
});

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: rateLimitKeyGenerator,
  message: rateLimitMessage,
});

app.get('/', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'jagruk-mahila-backend',
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/chat', chatLimiter, async (req, res) => {
  if (!CHAT_URL) {
    sendError(res, 500, 'service_unavailable', 'Chat service is not configured.');
    return;
  }

  const { question } = req.body ?? {};

  if (!question || typeof question !== 'string') {
    sendError(res, 400, 'bad_request', 'Request must include a question.');
    return;
  }

  try {
    const upstream = await fetch(CHAT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(CHAT_API_KEY ? { 'X-API-Key': CHAT_API_KEY } : {}),
      },
      body: JSON.stringify({ question }),
    });

    const text = await upstream.text();
    let json = null;

    try {
      json = text ? JSON.parse(text) : null;
    } catch {
      json = null;
    }

    if (!upstream.ok) {
      if (upstream.status === 400) {
        sendError(res, 400, 'bad_request', 'The chat request could not be processed.');
        return;
      }

      if (upstream.status === 429) {
        sendError(res, 429, 'busy', 'The chat service is busy.');
        return;
      }

      sendError(
        res,
        502,
        'service_unavailable',
        'The chat service is not available right now.',
        json?.message || text || 'The chat service could not process the request.',
      );
      return;
    }

    res.json({
      answer: json?.answer ?? json?.response ?? json?.message ?? text,
    });
  } catch (error) {
    sendError(
      res,
      502,
      'service_unavailable',
      'The chat service is not available right now.',
      error instanceof Error ? error.message : 'Unable to reach the chat service.',
    );
  }
});

app.post('/report', reportLimiter, async (req, res) => {
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

    if (!upstream.ok) {
      if (upstream.status === 400) {
        sendError(res, 400, 'bad_request', 'The report request could not be processed.');
        return;
      }

      if (upstream.status === 429) {
        sendError(res, 429, 'busy', 'The report service is busy.');
        return;
      }

      sendError(
        res,
        502,
        'service_unavailable',
        'The report service is not available right now.',
        json?.message || text || 'The report service could not process the request.',
      );
      return;
    }

    if (json?.status && json.status !== 'success') {
      sendError(
        res,
        502,
        'service_unavailable',
        'The report service is not available right now.',
        json?.message || text || 'The report service could not process the request.',
      );
      return;
    }

    res.json({ status: 'success' });
  } catch (error) {
    sendError(
      res,
      502,
      'service_unavailable',
      'The report service is not available right now.',
      error instanceof Error ? error.message : 'Unable to reach the report service.',
    );
  }
});

app.listen(port, host, () => {
  console.log(`Jagruk Mahila backend listening on http://${host}:${port}`);
});
