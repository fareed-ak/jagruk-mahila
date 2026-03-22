# जागरूक महिला — Jagruk Mahila

> *Because every woman deserves to know her rights — in her own language.*

Jagruk Mahila is a free, open-source mobile app that puts legal awareness, emergency helplines, and an AI assistant in the hands of women across India — in English, Hindi, and Urdu.

No sign-up. No paywalls. Just information that matters.

---

## Why We Built This

Most legal information in India is buried in government PDFs, written in complex language, and accessible only to those who can afford a lawyer. For women in rural and semi-urban areas, this gap is even wider.

Jagruk Mahila exists to close that gap — one screen at a time.

---

## What's Inside

🗂 **Legal Awareness** — Rights and protections explained in plain, everyday language

📞 **Helplines** — Emergency and support contacts, one tap away

⚖️ **Landmark Cases** — Real court judgements, made human-readable

🌐 **Multilingual** — English, Hindi, and full Urdu with RTL support

🤖 **AI Assistant** — Ask anything, get guided answers powered by Google Gemini

🚩 **AI Reporting** — Flag responses that feel wrong — we review every one

---

## Tech Stack

- **Expo + Expo Router** — cross-platform mobile
- **React Native** — UI
- **i18next** — multilingual support
- **Node.js + Express** — backend
- **Google Gemini API** — AI assistant

---

## Project Structure

```
jagruk-mahila/
├── app/          # Screens and routes
├── components/   # Reusable UI components
├── constants/    # Content and policy data
├── locales/      # EN, HI, UR translation files
├── backend/      # Express server — chat and report endpoints
└── assets/       # Icons and images
```

---

## Getting Started

### Prerequisites

- Node.js + npm
- Expo account
- `eas-cli` installed globally
- Gemini API key + report endpoint (for backend)

```bash
npm install -g eas-cli
eas login
```

### Install

```bash
git clone https://github.com/fareed-ak/jagruk-mahila.git
cd jagruk-mahila
npm install
```

```bash
cd backend
npm install
cp .env.example .env
cd ..
```

### Configure Backend — `backend/.env`

```env
PORT=3000
ALLOWED_ORIGINS=*
GEMINI_API_KEY=your_gemini_api_key_here
REPORT_URL=https://your-report-endpoint-here
```

---

## Running Locally

**Start the backend**
```bash
cd backend
npm run dev
```

Verify at `http://localhost:3000/health`

**Start the app**
```bash
EXPO_PUBLIC_API_BASE_URL=http://YOUR_LOCAL_IP:3000 npx expo start --lan --clear
```

---

## Builds

```bash
# Development
eas build --profile development --platform android

# Preview / Internal Testing
eas build --profile preview --platform android

# Production — Play Store (.aab)
eas build --profile production --platform android

# Production — App Store (.ipa)
eas build --profile production --platform ios
```

Download completed builds from [expo.dev](https://expo.dev) → your project → **Builds**.

---

## Cloudflare Tunnel (LAN Fallback)

If your phone can't reach the backend over LAN:

```bash
cloudflared tunnel --url http://localhost:3000
```

Use the generated `https://...trycloudflare.com` URL as `EXPO_PUBLIC_API_BASE_URL`.

---

## Troubleshooting

**Chat shows network error** — confirm backend is running, check `EXPO_PUBLIC_API_BASE_URL`, open `/health` on your phone browser

**Reports not submitting** — verify `REPORT_URL` in `.env`, restart backend after changes

**Backend unreachable on phone** — switch to tunnel or deploy backend to a hosted server

---

## Security

The backend exists for one reason — to keep secrets out of the app. Never talk to Gemini or the report endpoint directly from the client. Keep `backend/.env` out of version control.

---

## License

Open source. Built for social good. License details coming soon.