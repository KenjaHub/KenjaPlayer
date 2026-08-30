<div align="center">

<img src="assets/img/icon-512.png" width="96" alt="KenjaPlayer app icon" />

# KenjaPlayer

**Real-Time AI Bilingual Subtitles for Any Video — 100% on your device.**

Watch any movie, show or lecture in any language: KenjaPlayer listens, transcribes and translates live into bilingual subtitles, entirely offline. A first-class player even with the AI switched off.

[![Download on the App Store](assets/img/appstore-badge.svg)](https://apps.apple.com/app/id6792728329)

iPhone · iPad · Mac · Apple TV

</div>

---

## What it does

| | |
|---|---|
| 📝 **Real-time AI subtitles** | Live transcription + bilingual translation while you watch. 20+ recognition languages, 25+ translation targets. [→ Details](https://kenjaplayer.kofukuai.com/ai-subtitles.html) |
| ⚡ **AI video summaries** | Two-hour videos distilled into an overview + clickable chapter timeline. Export SRT / Markdown. Powered by Apple Intelligence. [→ Details](https://kenjaplayer.kofukuai.com/ai-summary.html) |
| 🎞 **100+ formats, 8K HDR** | MKV, RMVB, AVI, WMV, FLV, WebM and more — dual AVFoundation + libmpv engine, hardware accelerated. No converting. [→ Details](https://kenjaplayer.kofukuai.com/video-formats.html) |
| 🖥 **Your media, wherever it lives** | Jellyfin, Plex, Emby, SMB, WebDAV, FTP — direct connection, credentials never leave your device. [→ Details](https://kenjaplayer.kofukuai.com/media-servers.html) |
| 🔒 **Zero data collection** | No analytics, no ads, no accounts. Everything runs on-device. [Privacy policy](privacy.md) |

## Links

- **Website** — <https://kenjaplayer.kofukuai.com/>
- **Contact** — [kenjaplayer@kofukuai.com](mailto:kenjaplayer@kofukuai.com)

---

## About this repository

This repo hosts the **KenjaPlayer website** — a zero-dependency static site (plain HTML/CSS/JS) published via **GitHub Pages**.

### Publishing (first time)

1. Push this branch (`main`) to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source**: choose *Deploy from a branch*, branch `main`, folder `/(root)`.
3. Site goes live at `https://kenjaplayer.kofukuai.com/` (~1 minute).

### Maintenance notes

- **App Store link**: wired to `https://apps.apple.com/app/id6792728329` (App ID `6792728329`). To change it, edit the single `APP_STORE_URL` constant in [`assets/js/main.js`](assets/js/main.js) and grep for `apps.apple.com` to update the static `href` fallbacks.
- **Screenshots** live in `assets/img/` (web-compressed JPEGs generated from App Store assets).
- **SEO files**: `sitemap.xml` + `robots.txt` are at the repo root; canonical URLs assume `https://kenjaplayer.kofukuai.com/` (the `CNAME` file pins this domain — keep it). If the domain ever changes, do a global find-and-replace of `https://kenjaplayer.kofukuai.com` across all HTML + `sitemap.xml` + `robots.txt` and update `CNAME`.
- **DNS**: `kenjaplayer.kofukuai.com` is a CNAME to `KenjaHub.github.io` on Cloudflare — keep it **DNS only (grey cloud)** so GitHub can issue the Let's Encrypt certificate.
- `.nojekyll` disables GitHub's Jekyll processing — keep it.

### After launch (SEO checklist)

- [ ] Submit `https://kenjaplayer.kofukuai.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) (add the property first)
- [ ] Add the same property to [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Set the repo's **About** description, website URL and topics (video-player, ai-subtitles, jellyfin, plex, mkv-player…) — repo metadata is indexed by search engines
