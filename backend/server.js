import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
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

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.post('/chat', async (req, res) => {
  if (!GEMINI_URL) {
    res.status(500).json({ error: 'Gemini API key is not configured on the server.' });
    return;
  }

  const { contents, systemInstruction, generationConfig } = req.body ?? {};

  if (!Array.isArray(contents) || contents.length === 0) {
    res.status(400).json({ error: 'Request must include a non-empty contents array.' });
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
      res.status(upstream.status).json({
        error: json?.error?.message || 'The AI service could not process the request.',
      });
      return;
    }

    res.json(json);
  } catch (error) {
    res.status(502).json({
      error: error instanceof Error ? error.message : 'Unable to reach the AI service.',
    });
  }
});

app.post('/report', async (req, res) => {
  if (!REPORT_URL) {
    res.status(500).json({ error: 'Report URL is not configured on the server.' });
    return;
  }

  const { message, query, reason, email } = req.body ?? {};

  if (!message || !reason) {
    res.status(400).json({ error: 'Request must include message and reason.' });
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
      res.status(502).json({
        error: json?.message || text || 'The report service could not process the request.',
      });
      return;
    }

    res.json({ status: 'success' });
  } catch (error) {
    res.status(502).json({
      error: error instanceof Error ? error.message : 'Unable to reach the report service.',
    });
  }
});

app.listen(port, () => {
  console.log(`Jagruk Mahila backend listening on http://localhost:${port}`);
});
