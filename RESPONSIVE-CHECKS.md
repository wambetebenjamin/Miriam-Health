# Responsive verification notes

Browser-based visual QA was run against the production build with Chromium 153 and Playwright Core 1.64.1. The test matrix covered 375, 390, 430, 640, 768, 1024, 1280 and 1536 px viewport widths across the homepage, provider directory, a provider profile, resources, about, login and registration pages.

| Viewport(s) | Browser-observed behavior |
|---|---|
| 375, 390, 430 px | Single-column content, stacked homepage CTAs, compact mobile navigation; menu opens and closes at 375 px. No horizontal overflow. |
| 640 px | Provider cards switch from one to two columns; content remains within the viewport. |
| 768 px | Tablet layout uses two-column cards and footer; mobile menu remains active to avoid squeezing the full desktop navigation. No horizontal overflow. |
| 1024 px | Provider cards use three columns and footer uses four columns. No horizontal overflow. |
| 1280, 1536 px | Content stays within the centered max-width layout. No horizontal overflow. |

## Results

- All seven tested routes rendered without HTTP errors at all eight viewport widths; no page-level JavaScript exceptions were observed.
- The provider directory grid measured one column below 640 px, two from 640 to 1023 px and three from 1024 px onward.
- Registration text, date, select and textarea controls use at least 16 px text; the consent checkbox is not a text-entry control.
- Visible homepage and provider-directory links and controls met the 44 px minimum touch target in the browser checks. The mobile menu interaction passed.
- Scrolling through the homepage activated all three how-it-works cards and all three illustrative testimonial cards.
- Full-page screenshots were visually reviewed at 375 px; the page retained the supplied template’s colors and typography and had no clipped content or horizontal scrolling.
- Protected `/appointments`, `/tracker` and `/profile` routes redirect to `/login` without a session. Public routes returned 200. `/404` and unknown routes returned the expected 404; `/500` returns the custom error page with HTTP 500.

Checked in source as well: 640/768/1024 px media queries, 192/256/320 px chart heights, reduced-motion behavior and iOS safe-area rules. Repeat the browser checks after significant layout or dependency changes and before production launch.
