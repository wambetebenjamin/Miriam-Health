# Responsive verification notes

The site is authored mobile-first in `app/globals.css`. The requested viewport set is covered by the active media-query ranges and mobile-first rules below. These are source-level checks, not screenshot/browser measurements; this workspace has no installed browser automation, so pixel-level overflow cannot honestly be marked as visually verified.

| Viewport(s) | Source rules and expected behavior |
|---|---|
| 375, 390, 430 px | Base single-column cards and forms, stacked hero CTAs, compact navigation sizing, constrained container padding, responsive hero typography, safe-area bottom controls. |
| 768 px | Desktop navigation appears; directory sidebar and content become two columns; testimonial and how-it-works grids expand. |
| 1024 px | Feature/provider/resource grids become three columns; footer becomes four columns; chart height reaches 320 px. |
| 1280, 1536 px | Content remains centered within the 1240 px maximum container, with no fixed-width page panels. |

Checked in source: 640/768/1024 px media queries, one-to-two-to-three card layout, form inputs at 16 px, chart containers at 192/256/320 px, responsive footer, 44 px controls in navigation/footer, reduced-motion behavior, and safe-area rules. `body` clips horizontal overflow. All user-facing page routes were smoke-tested over HTTP; authenticated routes redirect to `/login` when no session is present. Re-run visual checks in a real browser at each target width before production release.
