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
- Regenerate with `sips --resampleWidth <w> -s format jpeg -s formatOptions <q> <src> --out <dst>`.

## SEO files

- `sitemap.xml` + `robots.txt` at repo root; canonical URLs assume `https://kenjaplayer.kofukuai.com/`.
- If the domain ever changes: global find-and-replace of `https://kenjaplayer.kofukuai.com` across all HTML + `sitemap.xml` + `robots.txt`, and update `CNAME`.
- New pages: add a `<url>` entry to `sitemap.xml` and link them from existing pages.

## SEO checklist (post-launch)

- [x] Google Search Console verified (`google*.html` at repo root) — property `https://kenjaplayer.kofukuai.com`
- [x] Sitemap submitted (`sitemap.xml`)
- [ ] Request indexing for the homepage once (URL Inspection)
- [ ] Add the property to [Bing Webmaster Tools](https://www.bing.com/webmasters) (import from Search Console)
- [ ] Set the repo's **About** description, website URL and topics (video-player, ai-subtitles, jellyfin, plex, mkv-player…)
- [ ] Add `https://kenjaplayer.kofukuai.com` as the app's website in App Store Connect
