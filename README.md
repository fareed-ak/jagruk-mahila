# जागरूक महिला — Jagruk Mahila

> *Because every woman deserves to know her rights — in her own language.*

Jagruk Mahila is a multilingual mobile app built to make legal awareness, emergency support, and guided help easier to access for women across India.

It brings together rights-based content, helplines, landmark cases, and an AI assistant in one simple mobile experience.

No sign-up. No paywalls. Just useful information when it matters.

---

## Why We Built This

Important legal information is often difficult to find, difficult to understand, and difficult to use in urgent situations.

Jagruk Mahila exists to make that information easier to reach, easier to read, and easier to act on.

The goal is simple: help more women understand their rights, find support faster, and feel less alone while doing it.

---

## What's Inside

🗂 **Legal Awareness** — rights and protections explained in plain language

📞 **Helplines** — emergency and support contacts in one place

⚖️ **Landmark Cases** — important judgements summarized in a readable format

🌐 **Multilingual Support** — English, Hindi, and Urdu with RTL support

🤖 **AI Assistant** — guided legal-awareness help through a backend-powered chat flow

🚩 **Response Reporting** — users can report AI responses for review

---

## Tech Stack

- **Expo + Expo Router** — app navigation and mobile runtime
- **React Native** — UI layer
- **i18next** — translations and multilingual support
- **Node.js + Express** — backend for chat and reporting
- **Google Gemini API** — AI response generation

---

## Project Structure

```text
jagruk-mahila/
├── app/          # Screens and routes
├── components/   # Reusable UI components
├── constants/    # App content and policy data
├── locales/      # Translation files
├── backend/      # Express backend for chat and reports
├── assets/       # Images and icons
├── app.config.js # Expo config with env-based backend URL
└── eas.json      # EAS build profiles
```

---

## Prerequisites

- Node.js and npm
- Expo account
- `eas-cli` installed globally
- Gemini API key
- report endpoint URL for backend submissions

Install and log in:

```bash
npm install -g eas-cli
eas login
```

If needed, confirm or initialize EAS for the project:

```bash
eas build:configure
```

---

## Install

Clone the repository and install the app:

```bash
git clone https://github.com/fareed-ak/jagruk-mahila.git
cd jagruk-mahila
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
cp .env.example .env
cd ..
```

---

## Configure the Backend

Set the required values in `backend/.env`:

```env
PORT=3000
ALLOWED_ORIGINS=*
GEMINI_API_KEY=your_gemini_api_key_here
REPORT_URL=https://your-report-endpoint-here
```

Start the backend:

```bash
cd backend
npm run dev
```

You can verify it here:

- `http://localhost:3000/`
- `http://localhost:3000/health`

---

## Run the App

The app reads the backend base URL from `EXPO_PUBLIC_API_BASE_URL`.

For local development:

```bash
EXPO_PUBLIC_API_BASE_URL=http://YOUR_LOCAL_IP:3000 npx expo start --lan --clear
```

For a hosted backend:

```bash
EXPO_PUBLIC_API_BASE_URL=https://your-backend-domain.com npx expo start --clear
```

This keeps the backend URL out of the code and lets you switch environments cleanly.

---

## Build the App

The build profiles are defined in `eas.json`:

- `development` — Android development client
- `preview` — internal testing build
- `production` — store-ready Android and iOS build

### Development Build

```bash
EXPO_PUBLIC_API_BASE_URL=https://your-backend-domain.com eas build --profile development --platform android
```

### Preview Build

```bash
EXPO_PUBLIC_API_BASE_URL=https://your-backend-domain.com eas build --profile preview --platform android
```

### Play Store Build

```bash
EXPO_PUBLIC_API_BASE_URL=https://your-backend-domain.com eas build --profile production --platform android
```

This generates an Android App Bundle (`.aab`) for Google Play.

### App Store Build

```bash
EXPO_PUBLIC_API_BASE_URL=https://your-backend-domain.com eas build --profile production --platform ios
```

This generates an iOS build (`.ipa`) for App Store submission.

Download completed builds from [expo.dev](https://expo.dev) → your project → **Builds**.

---

## Deploy the Backend

You can host the backend on platforms like Render or Railway.

Recommended backend service settings:

- **Root directory:** `backend`
- **Build command:** `npm install`
- **Start command:** `npm start`

Set these environment variables on your host:

- `GEMINI_API_KEY`
- `REPORT_URL`
- `PORT` if required by the platform

Once deployed, use the hosted backend URL through `EXPO_PUBLIC_API_BASE_URL` when running Expo or creating EAS builds.

---

## Cloudflare Tunnel (LAN Fallback)

If your phone cannot reach the local backend over LAN, use Cloudflare Tunnel while testing:

```bash
cloudflared tunnel --url http://localhost:3000
```

Then start Expo using the generated tunnel URL:

```bash
EXPO_PUBLIC_API_BASE_URL=https://YOUR-TRYCLOUDFLARE-URL npx expo start --lan --clear
```

Keep the backend process and the tunnel running while testing.

---

## Troubleshooting

**Chat shows network error** — confirm the backend is running and make sure `EXPO_PUBLIC_API_BASE_URL` points to the correct backend

**Chat works locally but not on phone** — confirm your phone can open `/health`, or use the Cloudflare fallback

**Reports are not submitting** — verify `REPORT_URL` in `backend/.env` and restart the backend after changes

**Hosted backend works but chat does not** — check backend environment values like `GEMINI_API_KEY`

---

## Security

The backend exists to keep secrets out of the mobile app. The client should only talk to your backend, never directly to Gemini or the report endpoint.

Keep `backend/.env` out of version control and use a proper hosted backend for production builds.

---

Made with love for awareness, safety, and support. ♥
