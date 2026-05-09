# coin-boys
## Tell me more

### What is it?
Coin Boys - a coin flipping app to change your life. Coin is life.

### Why?
Inspired by [this reddit post](https://www.reddit.com/r/Teachers/comments/15c3yd4/every_year_these_kids_come_back_with_a_new/) the Coin Boys app provides undeniable coin flippage that you can use to steer your life.

### What does it do?
It flips coins, duh. So you can live your coiney life. You have a question: Which path do I take? Which job do I accept? Do I get the Bee's or Chili's? Let the coin guide you. It's like the [Magic Conch](https://spongebob.fandom.com/wiki/Magic_Conch_shell), but real.

Tap the **coin** or **Coin me**, watch it flip, and read **Heads**, **Tails**, or a rare **edge** outcome.

### Who can use it?
Coin boys is an app for anyone looking to live the coin boys *lifestyle*. This is not about your gender, it's about your LIFE.

### Okay I'm in, what's the mantra?
Simple, "I live by the coin and die by the coin."

__________________________

## Technical Stuff

### What tools went into making this amazing app?
TypeScript, React **19**, React Native **0.81**, **Expo SDK 54**, React Native Web (for browser builds), Jest with **jest-expo**, and **npm** (`package-lock.json`) for dependencies.

### It's not in the App or Play store... How do I try it?

Three ways, simplest first:

| Mode | When to use |
|------|-------------|
| **Phone + Expo Go** | Fastest real-device try: your PC runs Metro, phone scans the QR code in [Expo Go](https://expo.dev/client). Works great from **Windows** with `--lan` or `--tunnel` if needed. |
| **Browser (dev)** | `npm run web` — quick check in Chrome/Safari without a phone. |
| **Static files for your website** | `npm run build:web` produces **`dist/`**. Upload that folder (or its contents) to your host. See [docs/WEBSITE_INTEGRATION.md](docs/WEBSITE_INTEGRATION.md) (if present in this repo). |

**Setup**

1. Clone or download this repo.
2. From the project folder: `npm install`
3. Run one of:
   - `npx expo start` — then press `i` for iOS simulator (macOS + Xcode), `a` for Android emulator, or scan the QR for **Expo Go** on a physical device. Add `--lan` or `--tunnel` if the phone cannot reach your PC. Use `-c` to clear the Metro cache if something looks stuck.
   - `npm run web` — dev server for the web build in your browser.
4. **Tests:** `npm test`

**iOS Simulator (optional, Mac only):** [Expo iOS simulator docs](https://docs.expo.dev/workflow/ios-simulator/) if you use Xcode’s simulator instead of a phone.

**CI / deploy:** This repo does not ship your **website** deploy via GitHub Actions unless you add workflows here. Website CI usually lives in your **website** repository. See [docs/WEBSITE_CI_CHECKLIST.md](docs/WEBSITE_CI_CHECKLIST.md) if that file exists.

---

## Working in Cursor with your website repo
Open both this project and your site in one window: **File → Add Folder to Workspace**. See [docs/WEBSITE_INTEGRATION.md](docs/WEBSITE_INTEGRATION.md) for embed options (if that file exists).

## And how... praytell, did you come up with this amazing and complex UI?
I wire framed it of course! And got my ideas out on to paper. From there I braiinstormed what I'd like the app to do and turned those into features. For quick learning and efficiency I witled down those features to the MVP items, and have ticketed those out and been working through them.

## Show me that wire frame, please! I'm sure you are a great artist and really good at drawing quarters!!
Here's a little snapshot of one of my notebook pages:
<img src="https://github.com/citlaliac/coin-boys/assets/15990110/318b641a-6741-4fe-a834-6862f8358c88" width="650">

## Wow you really captured Washington's likeness, can you show me the UI now? So I don't have to setup your silly app?
Okay fine... here's a screen shot, just try to keep your socks from being knocked clean off. (The in-app look may be slightly newer than this image—run the app for the current animation and layout.)
<br/>
<img src="https://github.com/citlaliac/coin-boys/assets/15990110/1a4ce7d0-1491-4b1b-bde3-23bfc47d6f7b" width="250">
