# Recurrely

A subscription tracker mobile app built with **React Native**, **Expo SDK 54**, and **NativeWind v5**. Track recurring payments, view upcoming billing dates, and manage all your subscriptions in one place.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation & Setup (From Scratch)](#installation--setup-from-scratch)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [Available Scripts](#available-scripts)
- [Configuration Files](#configuration-files)
- [Running on Devices](#running-on-devices)
- [Learn More](#learn-more)

---

## Features

- 🏠 **Home Dashboard** — Overview of total subscription spend with balance card
- 📅 **Upcoming Payments** — Horizontally scrollable cards for upcoming billing dates
- 📋 **Subscription List** — Expandable cards showing subscription details (billing cycle, category, next renewal)
- 🔐 **Authentication Screens** — Sign-in / Sign-up flows with form validation
- ➕ **Add Subscription Modal** — Bottom sheet modal with category picker and billing cycle selector
- 🎨 **Custom Design System** — Warm color palette with component-level CSS classes via NativeWind
- 🌙 **Dark Mode Support** — Automatic user interface style switching (`app.json`)

---

## Tech Stack

| Layer            | Technology                                                                 |
| ---------------- | -------------------------------------------------------------------------- |
| Framework        | [Expo SDK 54](https://docs.expo.dev/) (New Architecture enabled)           |
| Language         | TypeScript 5.9                                                             |
| Navigation       | [Expo Router v6](https://docs.expo.dev/router/introduction/) (file-based)  |
| Styling          | [NativeWind v5](https://www.nativewind.dev/) + Tailwind CSS v4             |
| Animations       | React Native Reanimated v4                                                 |
| Gestures         | React Native Gesture Handler                                               |
| Linting          | ESLint with `eslint-config-expo`                                           |
| React            | React 19.1 + React Native 0.81                                            |

---

## Prerequisites

Make sure you have the following installed before proceeding:

| Tool       | Version    | Install Guide                                                      |
| ---------- | ---------- | ------------------------------------------------------------------ |
| **Node.js** | ≥ 18.x    | [nodejs.org](https://nodejs.org/)                                  |
| **npm**     | ≥ 9.x     | Comes with Node.js                                                 |
| **Git**     | Latest     | [git-scm.com](https://git-scm.com/)                               |
| **Expo Go** | Latest     | Install on your phone from [App Store](https://apps.apple.com/app/expo-go/id982107779) / [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent) |

Optional (for native builds):

| Tool                | Platform  | Install Guide                                                                 |
| ------------------- | --------- | ----------------------------------------------------------------------------- |
| **Android Studio**  | Android   | [docs.expo.dev/workflow/android-studio-emulator](https://docs.expo.dev/workflow/android-studio-emulator/) |
| **Xcode**           | iOS/macOS | [docs.expo.dev/workflow/ios-simulator](https://docs.expo.dev/workflow/ios-simulator/) |

---

## Installation & Setup (From Scratch)

### 1. Create the Expo Project

If you're starting a brand-new project from scratch (this has already been done for Recurrely):

```bash
# Install create-expo-app globally (optional)
npm install -g create-expo-app

# Create a new Expo project with the blank TypeScript template
npx create-expo-app@latest Recurrely
cd Recurrely
```

### 2. Clone & Install Dependencies

If you're setting up this existing repo:

```bash
# Clone the repository
git clone <your-repo-url>
cd Recurrely

# Install all dependencies
npm install
```

### 3. Install NativeWind v5 (Tailwind CSS for React Native)

NativeWind is already configured in this project. If you need to set it up from scratch:

```bash
# Install NativeWind and its peer dependencies
npm install nativewind react-native-css

# Install Tailwind CSS v4 and PostCSS as dev dependencies
npm install -D tailwindcss @tailwindcss/postcss postcss
```

#### 3a. Create `postcss.config.mjs`

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

#### 3b. Create `global.css`

```css
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";

@import "nativewind/theme";
```

#### 3c. Configure Metro Bundler — `metro.config.js`

```js
const { getDefaultConfig } = require("expo/metro-config");
const { withNativewind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = withNativewind(config);
```

#### 3d. Import `global.css` in Root Layout — `app/_layout.tsx`

```tsx
import { Stack } from "expo-router";
import "@/global.css";

export default function RootLayout() {
  return <Stack />;
}
```

#### 3e. Add NativeWind TypeScript Declaration — `nativewind-env.d.ts`

This file is auto-generated and ensures TypeScript recognizes NativeWind's `className` prop on React Native components.

### 4. Install Additional Packages

These are already included in this project:

```bash
# Navigation & routing
npx expo install expo-router @react-navigation/native @react-navigation/bottom-tabs @react-navigation/elements

# Animations & gestures
npx expo install react-native-reanimated react-native-gesture-handler react-native-worklets

# Safe area & screens
npx expo install react-native-safe-area-context react-native-screens

# Expo utilities
npx expo install expo-constants expo-font expo-haptics expo-image expo-linking
npx expo install expo-splash-screen expo-status-bar expo-symbols expo-system-ui expo-web-browser

# Icons
npx expo install @expo/vector-icons
```

> **Note:** Always use `npx expo install` instead of `npm install` for Expo-compatible packages. This ensures version compatibility with your SDK.

### 5. Start the Development Server

```bash
npx expo start
```

This will open the Expo Dev Tools. From here you can:

- 📱 Scan the QR code with **Expo Go** on your phone
- `a` — Open on **Android emulator**
- `i` — Open on **iOS simulator** (macOS only)
- `w` — Open on **Web browser**

---

## Project Structure

```
Recurrely/
├── app/                        # App screens (file-based routing)
│   ├── _layout.tsx             # Root layout — Stack navigator + global CSS import
│   └── index.tsx               # Home screen (entry point)
│
├── app-example/                # Expo starter example code (moved by reset-project)
│   ├── app/                    # Example app screens
│   ├── components/             # Example reusable components
│   ├── constants/              # Example theme constants
│   ├── hooks/                  # Example custom hooks
│   └── scripts/                # Utility scripts (reset-project.js)
│
├── assets/
│   └── images/                 # App icons, splash screen, favicon
│       ├── icon.png            # App icon
│       ├── splash-icon.png     # Splash screen icon
│       ├── favicon.png         # Web favicon
│       ├── android-icon-*.png  # Android adaptive icon layers
│       └── react-logo*.png     # React logo assets
│
├── global.css                  # 🎨 Design system — theme tokens + component classes
├── app.json                    # Expo app configuration
├── metro.config.js             # Metro bundler config (NativeWind integration)
├── postcss.config.mjs          # PostCSS config (Tailwind CSS plugin)
├── tsconfig.json               # TypeScript configuration
├── eslint.config.js            # ESLint flat config
├── expo-env.d.ts               # Expo TypeScript declarations
├── nativewind-env.d.ts         # NativeWind TypeScript declarations
└── package.json                # Dependencies & scripts
```

---

## Design System

The entire design system is defined in [`global.css`](./global.css) using Tailwind CSS v4's `@theme` directive and NativeWind component classes.

### Theme Tokens

| Token                  | Value              | Usage                    |
| ---------------------- | ------------------ | ------------------------ |
| `--color-background`   | `#fff9e3`          | Warm cream page bg       |
| `--color-foreground`   | `#081126`          | Dark navy text           |
| `--color-primary`      | `#081126`          | Primary text & buttons   |
| `--color-accent`       | `#ea7a53`          | Coral accent / CTA       |
| `--color-subscription` | `#8fd1bd`          | Mint green for active subs |
| `--color-card`         | `#fff8e7`          | Card backgrounds         |
| `--color-muted`        | `#f6eecf`          | Muted / disabled bg      |
| `--color-success`      | `#16a34a`          | Success states           |
| `--color-destructive`  | `#dc2626`          | Errors / cancel actions  |
| `--color-border`       | `rgba(0,0,0,0.1)`  | Subtle borders           |

### Typography

Custom font families registered via `--font-*` tokens:

- `sans-light`, `sans-regular`, `sans-medium`, `sans-semibold`, `sans-bold`, `sans-extrabold`

### Component Classes

The CSS defines reusable component classes organized by feature:

| Prefix       | Component Area                   | Examples                                    |
| ------------ | -------------------------------- | ------------------------------------------- |
| `.tabs-*`    | Bottom tab bar                   | `tabs-icon`, `tabs-pill`, `tabs-active`     |
| `.home-*`    | Home dashboard                   | `home-header`, `home-balance-card`, `home-avatar` |
| `.list-*`    | Section list headers             | `list-head`, `list-title`, `list-action`    |
| `.upcoming-*`| Upcoming payment cards           | `upcoming-card`, `upcoming-icon`, `upcoming-price` |
| `.sub-*`     | Subscription detail cards        | `sub-card`, `sub-head`, `sub-cancel`        |
| `.auth-*`    | Authentication screens           | `auth-card`, `auth-input`, `auth-button`    |
| `.modal-*`   | Bottom sheet modals              | `modal-overlay`, `modal-header`, `modal-body` |
| `.picker-*`  | Option pickers (billing cycle)   | `picker-row`, `picker-option`               |
| `.category-*`| Category selection chips         | `category-chip`, `category-chip-active`     |

---

## Available Scripts

| Command                  | Description                                              |
| ------------------------ | -------------------------------------------------------- |
| `npm start`              | Start the Expo development server                        |
| `npm run android`        | Start and open on Android emulator                       |
| `npm run ios`            | Start and open on iOS simulator                          |
| `npm run web`            | Start and open in web browser                            |
| `npm run lint`           | Run ESLint checks                                        |
| `npm run reset-project`  | Move starter code to `app-example/` and create blank `app/` |

---

## Configuration Files

### `app.json` — Expo Configuration

- **Name:** Recurrely
- **Scheme:** `recurrely` (deep linking)
- **Orientation:** Portrait
- **New Architecture:** Enabled
- **Typed Routes:** Enabled (experimental)
- **React Compiler:** Enabled (experimental)
- **Splash Screen:** Centered icon on white/black (dark mode) background
- **Android:** Edge-to-edge display, adaptive icon with foreground/background/monochrome layers
- **Web:** Static output with favicon

### `tsconfig.json` — TypeScript

- Extends Expo's base TypeScript config
- Strict mode enabled
- Path alias: `@/*` → project root (`./`)

### `metro.config.js` — Metro Bundler

- Wraps the default Expo Metro config with `withNativewind()` for CSS-in-JS processing

### `postcss.config.mjs` — PostCSS

- Uses `@tailwindcss/postcss` plugin for Tailwind CSS v4 processing

---

## Running on Devices

### Expo Go (Quickest)

1. Install [Expo Go](https://expo.dev/go) on your phone
2. Run `npx expo start`
3. Scan the QR code from the terminal

### Android Emulator

1. Install [Android Studio](https://developer.android.com/studio)
2. Set up an AVD (Android Virtual Device)
3. Run `npm run android`

### iOS Simulator (macOS only)

1. Install [Xcode](https://developer.apple.com/xcode/)
2. Run `npm run ios`

### Development Build (Full native modules)

```bash
# Install expo-dev-client
npx expo install expo-dev-client

# Create a development build
npx expo run:android
# or
npx expo run:ios
```

---

## Learn More

- [Expo Documentation](https://docs.expo.dev/) — Fundamentals and advanced guides
- [Expo Router Docs](https://docs.expo.dev/router/introduction/) — File-based routing
- [NativeWind v5 Docs](https://www.nativewind.dev/) — Tailwind CSS for React Native
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/) — Animations
- [Tailwind CSS v4](https://tailwindcss.com/docs) — Utility-first CSS framework

---

## Community

- [Expo on GitHub](https://github.com/expo/expo) — Open source platform
- [Expo Discord](https://chat.expo.dev) — Community chat & support
- [NativeWind GitHub](https://github.com/marklawlor/nativewind) — NativeWind source & issues
