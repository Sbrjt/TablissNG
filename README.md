# TablissNG

<img src="screenshots/screenshot_1.png" width="49%"/> <img src="screenshots/screenshot_2.png" width="50%"/>
<img src="screenshots/screenshot_3.png" width="49%"/> <img src="screenshots/screenshot_4.png" width="50%"/>
<img src="screenshots/screenshot_5.png" width="24%"/>
<img src="screenshots/screenshot_6.png" width="24%"/>
<img src="screenshots/screenshot_7.png" width="24%"/>
<img src="screenshots/screenshot_8.png" width="24%"/>


## Maintained Fork of Tabliss

This repository is a maintained fork of Tabliss, originally a customizable new tab page for Firefox and Chrome. The original project has been abandoned, with no updates for over a year and numerous unmerged pull requests.

### Why This Fork?

I cloned the repository and merged most pending pull requests to bring in improvements and bug fixes. Moving forward, I will actively maintain and update this fork to keep Tabliss functional and up to date.

### What's Next?

- Continued updates and bug fixes
- Adding new features from community contributions
- Keeping dependencies up to date

If you were a contributor to the original repo or have ideas for improvements, feel free to open an issue or submit a pull request. Let’s keep Tabliss alive!

---

## Installation

The extension is available in the [Firefox Add-ons Store](https://addons.mozilla.org/en-US/firefox/addon/tablissng/), in the [Chrome Web Store](https://chromewebstore.google.com/detail/tabliss-a-beautiful-new-t/dlaogejjiafeobgofajdlkkhjlignalk), and in the [Edge Add-ons Store](https://microsoftedge.microsoft.com/addons/detail/tabliss-a-beautiful-new/mkaphhbkcccpgkfaifhhdfckagnkcmhm) (edge addon might be outdated, contact me if you are actually using it.).
If you want to install the extension manually, or want nightly builds, see [INSTALL.md](INSTALL.md).

## Running Locally

For local development, you'll need Node.js and NPM installed. Latest versions should work.

First, clone the repo:

```sh
git clone https://github.com/BookCatKid/TablissNG.git
cd TablissNG
```

Then install the dependencies:

```sh
npm install
```

### Available Commands

- `npm run dev` — Start a local development server
- `npm run build` — Build the project
- `npm run test` — Run tests
- `npm run translations` — Manage translation files (see TRANSLATING.md)
- `npm run lint:fix` — Run ESLint with --fix (or just `npm run lint` for checking)
- `npm run prettier` — Run Prettier with --write (or npm run `prettier:check` for checking)
- `npm run deps:update` — Run interactive dependency update tool (or `npm run deps:check` to just check for updates and unused dependencies)

By default, build and dev will target the web version. To specify a platform (Chromium or Firefox), append `:chromium` or `:firefox` to the command. For example:

```sh
npm run dev:chromium
npm run build:firefox
```

### Environment variables

To develop with external services, you'll need to sign up for API keys and enter them into your `.env` file. Start by copying the example:

```sh
cp .env.example .env
```

Then, fill in your API keys:

```ini
GIPHY_API_KEY=your_key_here
UNSPLASH_API_KEY=your_key_here
NASA_API_KEY=your_key_here
```

## Credits

Special thanks to **joelshepherd** for originally creating and maintaining this project.
Also, huge appreciation to everyone who contributed, especially those whose pull requests I merged!

## Contributing

Take a look at the guide to [contributing](CONTRIBUTING.md) before starting.

## Translations

Check out the guide to [adding translations](TRANSLATING.md).
