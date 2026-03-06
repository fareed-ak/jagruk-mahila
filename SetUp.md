# Jagruk Mahila — Dev Guide

## Setup (One Time)

### 1. Clone & Install
```bash
git clone https://github.com/fareed-ak/jagruk-mahila.git
cd jagruk-mahila
npm install
```

### 2. Install CLIs
```bash
npm install -g expo-cli eas-cli
```

### 3. Expo Account
- Create account at **expo.dev** (free)
- Login in terminal:
```bash
eas login
```

---

## Live Development (Do This Every Time)

This is how you make changes and see them instantly on your phone.

### Step 1 — Enable USB Debugging (one time on phone)
- Settings → About Phone → tap **Build Number 7 times**
- Developer Options → **USB Debugging ON**

### Step 2 — Connect Phone
```bash
adb devices
# Must show "device", not "unauthorized"
# If unauthorized → allow popup on phone
```

### Step 3 — Start Server
```bash
npx expo start --localhost --clear
```

### Step 4 — Open App on Phone
- Open the **Jagruk Mahila** dev app (not Expo Go)
- It auto-connects to your laptop

### Step 5 — Make Changes
- Edit any `.jsx` or `.json` file → **Save**
- Phone updates instantly ✅
- No rebuild needed

### Kill Stuck Server
```bash
pkill -f "expo start"
```

---

## No USB? Use Hotspot

- Turn on **phone hotspot**
- Connect **laptop to that hotspot**
- Run:
```bash
npx expo start --lan --clear
```
Scan QR from the dev app.

---

## Install Development APK (One Time)

```bash
npx eas-cli build --profile development --platform android
```
- Takes ~15-20 min (cloud build)
- Download from **expo.dev → Projects → jagruk-mahila → Builds**
- Install on phone → allow unknown sources

> After this, you never need to rebuild unless you add new native packages.

---

## Share a Prototype APK

```bash
npx eas-cli build --profile preview --platform android
```
Download and send the APK to anyone — they can install directly.

---

## Final Builds

| Command | Output | Use For |
|---|---|---|
| `eas build --profile development --platform android` | APK | Live dev testing |
| `eas build --profile preview --platform android` | APK | Sharing/demo |
| `eas build --profile production --platform android` | AAB | Play Store |
| `eas build --profile preview --platform ios` | IPA | iOS (needs Apple account $99/yr) |

---

## Common Errors

| Error | Fix |
|---|---|
| `adb not found` | `sudo pacman -S android-tools` |
| `unauthorized` in adb | Allow USB Debugging popup on phone |
| `failed to download remote update` | Use USB method or same hotspot |
| `ngrok tunnel too long` | `npm uninstall ngrok && npx expo install @expo/ngrok` |
| EAS build ERESOLVE | `npm install react@19.2.4 --save-exact` |
| Port in use | `pkill -f "expo start"` |

---

## Store Costs

| Platform | Cost |
|---|---|
| Google Play | $25 one-time |
| Apple App Store | $99/year |
| EAS Build | Free (30 builds/month) |