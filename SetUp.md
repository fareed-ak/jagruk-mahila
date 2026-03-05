# Jagruk Mahila — Dev Setup Guide

## Prerequisites
- USB Debugging enabled on phone (Settings → About Phone → tap Build Number 7x → Developer Options → USB Debugging ON)
- Phone connected via USB
- Same WiFi/hotspot (for --lan mode)

---

## Method 1: USB (Recommended)

Phone ko USB se connect karo, then:

```bash
cd jagruk-mahila
adb devices          # should show "device" not "unauthorized"
npx expo start --localhost --clear
```

Live reload automatic — file save karo, phone pe turant update.

---

## Method 2: Same Hotspot (No USB)

Phone ka hotspot banao → laptop connect karo → then:

```bash
npx expo start --lan --clear
```

QR scan karo Expo Go se (development build install hai toh wo open hoga).

---

## Method 3: Tunnel (Any Network)

```bash
npx expo start --tunnel --clear
```

Note: @expo/ngrok installed hona chahiye. Agar error aaye:
```bash
npm uninstall ngrok && npx expo install @expo/ngrok
```

---

## Building APK

### Preview APK (for sharing/presentation)
```bash
npx eas-cli build -p android --profile preview
```

### Development APK (for dev testing without Expo Go)
```bash
npx eas-cli build --profile development --platform android
```

Download link expo.dev → Projects → jagruk-mahila → Builds

---

## Common Errors & Fixes

| Error | Fix |
|---|---|
| `unauthorized` in adb devices | Phone pe "Allow USB Debugging" popup allow karo |
| `adb not found` | `sudo pacman -S android-tools` |
| `ngrok tunnel too long` | `npm uninstall ngrok && npx expo install @expo/ngrok` |
| `failed to download remote update` | USB use karo ya same hotspot pe aa jao |
| EAS build ERESOLVE error | `npm install react@19.2.4 --save-exact` |
| `expo-router/babel` error | babel.config.js se plugins array hata do |

---

## Ports

Metro default: `8081`  
Agar occupied: `8086` (auto-assigned)

Kill stuck processes:
```bash
pkill -f "expo start"
```