TAROTELL GITHUB PAGES — SEO-READY PACKAGE
=================================================
Deploy all files and directories at the ROOT of the tarotreadingsonline repository.
Published project base: https://tarotellme.github.io/tarotreadingsonline/

Canonical homepage: https://tarotellme.github.io/tarotreadingsonline/
Canonical service pages use the EXISTING verified /index.html filenames.
The root/index.html browser redirect is client-side, not a server-side 301.
All six pages now contain consistent canonical metadata and WebPage schema.
Homepage additionally contains Organization and WebSite schema.
Sitemap: https://tarotellme.github.io/tarotreadingsonline/sitemap.xml

IMPORTANT ROBOTS.TXT LIMITATION
The robots.txt in this ZIP is deployed under /tarotreadingsonline/robots.txt.
Google's robots.txt protocol checks the HOST ROOT, which is
https://tarotellme.github.io/robots.txt — not the project folder.
The project subfolder robots.txt is not used for crawl control.
If you control the user/org Pages root site, place the matching host-level
robots.txt there instead; otherwise this is fine, as crawling is allowed by default.
The sitemap can still be submitted in Google Search Console.

Keep the newest approved version of the Tarotell design and assets; this
package changes only hosting/SEO metadata, navigation Home URLs, and adds
sitemap & instructions. It does not alter site content or iframe embeds.

TEST AFTER DEPLOYMENT
1. Homepage root + /index.html (browser navigates to root)
2. All 3 service pages via their /index.html links
3. sitemap.xml and canonical tags
4. Schema Markup Validator and Google Search Console URL inspection
5. Google Docs/Slides/Spreadsheet embed loadability
