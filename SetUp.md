# Jagruk Mahila Setup Guide

## 1. Install Dependencies

```bash
git clone https://github.com/fareed-ak/jagruk-mahila.git
cd jagruk-mahila
npm install

cd backend
npm install
cp .env.example .env
cd ..
```

Set the backend secrets in `backend/.env`:

- `GEMINI_API_KEY`
- `REPORT_URL`

## 2. Install and Configure EAS

```bash
npm install -g eas-cli
eas login
eas build:configure
```

If this project is already connected to Expo, `eas build:configure` will just confirm the setup.

## 3. Start the Backend

```bash
cd backend
npm run dev
```

Check:

```text
http://localhost:3000/
http://localhost:3000/health
```

## 4. Start the App

In a second terminal, start Expo with your backend URL.

For local LAN testing:

```bash
cd /home/raf/projects/jagruk-mahila
EXPO_PUBLIC_API_BASE_URL=http://YOUR_LOCAL_IP:3000 npx expo start --lan --clear
```

For a hosted backend:

```bash
cd /home/raf/projects/jagruk-mahila
EXPO_PUBLIC_API_BASE_URL=https://your-backend-domain.com npx expo start --clear
```

## 5. Build the App with EAS

### Android Development Build

```bash
eas build --profile development --platform android
```

### Android Preview Build

```bash
eas build --profile preview --platform android
```

### Android Play Store Build

```bash
eas build --profile production --platform android
```

This produces an `.aab` for the Play Store.

### iOS App Store Build

```bash
eas build --profile production --platform ios
```

This produces an `.ipa` for App Store submission.

## 6. Download EAS Builds

After a build finishes, download it from the Expo dashboard:

- open `expo.dev`
- open the `jagruk-mahila` project
- open `Builds`
- download the generated artifact

## 7. Notes for Production

- Do not use a temporary tunnel URL in production builds.
- Set `EXPO_PUBLIC_API_BASE_URL` to your permanent backend domain before creating store builds.
- Keep `backend/.env` private.

## 8. Cloudflare Tunnel Backup

If the app cannot reach your local backend over LAN, use Cloudflare Tunnel as a fallback.

Start the backend:

```bash
cd backend
npm run dev
```

In another terminal:

```bash
cloudflared tunnel --url http://localhost:3000
```

Copy the generated `https://...trycloudflare.com` URL, then run Expo with it:

```bash
cd /home/raf/projects/jagruk-mahila
EXPO_PUBLIC_API_BASE_URL=https://YOUR-TRYCLOUDFLARE-URL npx expo start --lan --clear
```
