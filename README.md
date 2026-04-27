# HabitForge — Production-Grade Habit Tracking App

**Build habits. Stay accountable. Together.**

## Quick Start

### Prerequisites

- Node.js 22.11.0+
- Android SDK / iOS SDK
- Xcode (for iOS) or Android Studio (for Android)

### Installation

```bash
npm install --legacy-peer-deps
```

### Running on Android

```bash
npx react-native run-android
```

### Running on iOS

```bash
npx react-native run-ios
```

## Project Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed folder structure and design decisions.

## Tech Stack

- **Mobile**: React Native 0.74+ (Bare workflow)
- **Language**: TypeScript (strict mode)
- **Navigation**: React Navigation v6
- **State Management**: Zustand
- **Server State**: TanStack Query
- **Backend**: Supabase
- **AI**: Anthropic Claude API
- **Notifications**: Notifee
- **Payments**: RevenueCat
- **Analytics**: PostHog

## Environment Setup

1. Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

2. Required environment variables:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `ANTHROPIC_API_KEY`
   - `REVENUECAT_ANDROID_KEY`
   - `REVENUECAT_IOS_KEY`
   - `POSTHOG_API_KEY`
   - `POSTHOG_HOST`

## Supabase Setup

Run the SQL migrations from `supabase-schema.sql` in your Supabase SQL Editor:

1. Go to Supabase Dashboard → SQL Editor
2. Create new query
3. Paste contents of `supabase-schema.sql`
4. Run query

## Development

### Linting

```bash
npm run lint
```

### Testing

```bash
npm test
```

## Contribution Guidelines

See [CONTRIBUTING.md](./CONTRIBUTING.md) for code standards, git workflow, and PR process.

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) — Project structure, design decisions
- [CONTRIBUTING.md](./CONTRIBUTING.md) — Code standards, git rules
- [SCHEMA.md](./SCHEMA.md) — Database schema, RLS explanation
- [FEATURES.md](./FEATURES.md) — Feature list, freemium gates, roadmap
- [AI_NUDGES.md](./AI_NUDGES.md) — Claude API integration, trigger logic

## Monetization

**Freemium Model:**

- Free tier: Up to 5 habits, 7-day history
- Pro tier: Unlimited habits, full history, AI nudges, social features, streak recovery

**Pricing:**

- ₹199/month | $2.99/month
- ₹1999 lifetime | $24.99 lifetime

## License

Proprietary — HabitForge

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
