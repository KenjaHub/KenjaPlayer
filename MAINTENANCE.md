# Site Maintenance Notes

Operational reference for the KenjaPlayer website (`KenjaHub/KenjaPlayer`). For the product-facing README, see [README.md](README.md).

## Publishing

The site is a zero-build static site served by **GitHub Pages** from the `main` branch root. Push to `main` = deployed (~1 min).

- Live URL: <https://kenjaplayer.kofukuai.com>
- `.nojekyll` disables GitHub's Jekyll processing — keep it.
- `CNAME` pins the custom domain — keep it.

## DNS (Cloudflare)

`kenjaplayer.kofukuai.com` is a CNAME to `KenjaHub.github.io`, **DNS only (grey cloud)** — required so GitHub can issue/renew the Let's Encrypt certificate. If you ever enable the orange-cloud proxy, set Cloudflare SSL/TLS mode to **Full (strict)** to avoid redirect loops.

## App Store link

Wired to `https://apps.apple.com/app/id6792728329` (App ID `6792728329`). To change it, edit the `APP_STORE_URL` constant in [`assets/js/main.js`](assets/js/main.js) and grep for `apps.apple.com` to update the static `href` fallbacks.

## Assets

- `assets/img/` — web-compressed JPEGs generated from the App Store Keynote screenshots (`mac-*.jpg` / `ios-*.jpg` / `ipad-*.jpg`) plus `app-icon.png` (from the asset catalog) and `appstore-badge.svg` (official Apple asset — use as provided).
- Regenerate with `sips --resampleWidth <w> -s format jpeg -s formatOptions <q> <src> --out <dst>` (widths: iOS 660, iPad 1440, Mac 1440).
- `mac-hero.jpg` is generated from the hero slide of whatever deck is current. Since the Oct 2026 deck swap it comes from `kenjaplayer-mac-en.001.png` and is **no longer identical** to `mac-001.jpg` (which is still the Sep 2026 deck's hero).

### Homepage images — Oct 2026 deck (`~/Desktop/kenjaplayer-keynote/kenjaplayer-mac-en`, 6 slides)

The homepage uses semantically named files generated from this newer deck; subpages still use the Sep 2026 slide-numbered set below.

| New slide | Theme | Site file(s) |
|---|---|---|
| 001 | Realtime AI Translation (hero, dual subtitles) | `mac-hero.jpg`, `mac-ai-subtitles.jpg` |
| 002 | Manage & Play Local Videos (formats) | — |
| 003 | All Your Media, One Player (SMB/WebDAV/FTP/Plex/Emby/Jellyfin) | `mac-media-servers.jpg` |
| 004 | Fully Offline (privacy) | `mac-privacy.jpg` |
| 005 | Beautiful HD Playback, 4K & 8K | `mac-band.jpg`, `mac-playback.jpg` |
| 006 | AI Video Summaries in Seconds | `mac-ai-summary.jpg` |

### Slide numbering → theme (Sep 2026 deck — still used by subpages; keep HTML `src` aligned with this)

| # | iOS / iPad | Mac |
|---|---|---|
| 1 | hero — Real-Time AI Bilingual Subtitles | hero (same) |
| 2 | live translate while playing | live translate (same) |
| 3 | 25+ languages | languages globe |
| 4 | 100% on-device AI | Your Videos Stay on Your Mac (privacy) |
| 5 | local files, 4K/8K, 100+ formats | All Your Media. One Place. (sources grid) |
| 6 | Jellyfin/Plex/Emby/SMB/WebDAV/FTP | Cinema-Quality Playback |
| 7 | AI Transcripts & Summaries | AI Transcripts & Summaries |
| 8 | — | Smart Controls |
| 9 | — | solid black (unused) |

Site usage: `index.html` → mac-hero + mac-band, mac-ai-subtitles, mac-ai-summary, mac-playback, mac-media-servers, mac-privacy (all from the Oct 2026 deck) · `ai-subtitles.html` → mac-002, mac-003, ios-002 · `ai-summary.html` → mac-007, ipad-007, ios-007 · `video-formats.html` → mac-006, ios-005 · `media-servers.html` → mac-005, ipad-002 (all from the Sep 2026 deck).

## SEO files

- `sitemap.xml` + `robots.txt` at repo root; canonical URLs assume `https://kenjaplayer.kofukuai.com/`.
- If the domain ever changes: global find-and-replace of `https://kenjaplayer.kofukuai.com` across all HTML + `sitemap.xml` + `robots.txt`, and update `CNAME`.
- New pages: add a `<url>` entry to `sitemap.xml` and link them from existing pages.

## Localized homepages (SEO)

The homepage exists in 9 languages — `index.html` (EN, also `hreflang` x-default) plus `zh-Hans/`, `zh-Hant/`, `ja/`, `ko/`, `es/`, `pt/`, `id/`, `vi/` directories, each with its own `index.html`, canonical URL, translated title/description/OG/JSON-LD, and a header language dropdown (`.lang-select` in `style.css`, handler in `main.js`). Every version carries the same 10-link `hreflang` cluster in `<head>`.

- Only the homepage is localized; subpages (`ai-subtitles.html` etc.) are EN-only — localized pages link to them with root-absolute paths (`/ai-subtitles.html`).
- When editing the EN homepage copy, mirror the change into all 8 localized files (or at least re-check them); keep the hreflang cluster and `.foot-langs` row identical across versions.
- `privacy.html` is a separate single noindex page with a client-side 9-language switcher — unrelated to these SEO pages.
- `style.css` / `main.js` are referenced with a `?v=YYYYMMDD` cache-buster (GitHub Pages caches assets for 10 min). **Whenever you change either file, bump the version in every HTML file** (root pages + language dirs), or visitors may get stale JS against fresh HTML.

## SEO checklist (post-launch)

- [x] Google Search Console verified (`google*.html` at repo root) — property `https://kenjaplayer.kofukuai.com`
- [x] Sitemap submitted (`sitemap.xml`)
- [ ] Request indexing for the homepage once (URL Inspection)
- [ ] Add the property to [Bing Webmaster Tools](https://www.bing.com/webmasters) (import from Search Console)
- [ ] Set the repo's **About** description, website URL and topics (video-player, ai-subtitles, jellyfin, plex, mkv-player…)
- [ ] Add `https://kenjaplayer.kofukuai.com` as the app's website in App Store Connect
