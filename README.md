# Jagruk Mahila

Jagruk Mahila is an Expo-based mobile app focused on women's rights awareness, legal guidance, helpline access, and simple AI-assisted support.

The app includes:

- rights and law explainers in simple language
- emergency and support helplines
- landmark cases and legal reference sections
- a multilingual interface
- an AI chat assistant with a separate backend for secret handling

## Project Structure

`app/` contains the Expo Router screens.

`constants/` contains the app content and structured data.

`locales/` contains translation files.

`backend/` contains the Node.js server used for AI chat and report submission.

## Running the Project

Read [SetUp.md](/home/raf/projects/jagruk-mahila/SetUp.md) for the full setup and run instructions.

That guide covers:

- Expo and EAS setup
- backend environment configuration
- local development
- Android and iOS builds
- Cloudflare tunnel fallback if local backend networking does not work

## Notes

- Do not store production API keys in the mobile app.
- Keep `backend/.env` private.
- Use a stable hosted backend for production builds.
