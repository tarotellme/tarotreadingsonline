TAROTELL.ME — STATIC CLOUD WEBSITE

6 pages: Homepage, About Us, Contact Us, Love Tarot, Career Tarot, Yes or No Tarot.

Upload all files/folders without changing their hierarchy. Service pages are nested folders; their index.html files preserve the requested /love-tarot-reading/, /career-tarot-reading/, and /yes-no-tarot-reading/ slugs on hosts that serve directory indexes. Check the host supports directory indexes; for raw object-storage hosting, direct folder/index.html URLs may be needed.

All homepage content and each Word document are rendered as source text. Main Tarotell calls to action open the official platform rather than pretending this static website can generate a reading.

Logo: provided by client, local in assets/images/tarotell-logo.png. Some editorial images are embedded custom SVGs; homepage hero references the image hosted by Tarotell.me and requires that host to remain available. If you need all assets offline, supply the original branded imagery.

No iframe embeds. Contact: support@tarotell.me. No fake contact form.

SEO: Per-page meta titles/descriptions from DOCX. Homepage Organization JSON-LD. Canonical and sitemap intentionally omitted until final hosting URL is selected. robots.txt is only authoritative when uploaded to the domain root.

Safety: Tarot is presented as entertainment/self-reflection, not professional advice.


URL NORMALIZATION FIX (GitHub Pages)
- Canonical homepage: https://tarotellme.github.io/tarotreadingsonline/
- Homepage and service index.html pages redirect in the browser to trailing-slash directory URLs.
- GitHub Pages serves directory and index.html URLs as HTTP 200: browser JavaScript is not a 301/308 redirect.
- Replace repository contents, including assets and three service folders. Do not upload the ZIP itself as a file.
- Hard refresh after deployment, and check the address bar and link targets.
- Sitemap: https://tarotellme.github.io/tarotreadingsonline/sitemap.xml
- GitHub project site robots.txt inside /tarotreadingsonline/ is NOT the robots control file for the hostname: that is /robots.txt at the domain root.
- All original content and 3 homepage iframe embeds are retained.
