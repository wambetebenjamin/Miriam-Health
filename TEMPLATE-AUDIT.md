# Uploaded template audit

Source archive: `medicalcenter-master.zip`. The archive itself is unchanged; its complete extracted contents are preserved in `template-reference/medicalcenter-master/`.

## CSS custom properties found

- `--blue`
- `--breakpoint-lg`
- `--breakpoint-md`
- `--breakpoint-sm`
- `--breakpoint-xl`
- `--breakpoint-xs`
- `--cyan`
- `--danger`
- `--dark`
- `--font-family-monospace`
- `--font-family-sans-serif`
- `--gray`
- `--gray-dark`
- `--green`
- `--indigo`
- `--info`
- `--light`
- `--orange`
- `--pink`
- `--primary`
- `--purple`
- `--red`
- `--secondary`
- `--success`
- `--teal`
- `--warning`
- `--white`
- `--yellow`

## `@font-face` rules found

| File | Family | Source URL path(s) | Weight | Style |
|---|---|---|---|---|
| `Doc/css/font-awesome.min.css` | `'FontAwesome'` | `'../fonts/fontawesome-webfont.eot?v=4.1.0'; '../fonts/fontawesome-webfont.eot?#iefix&v=4.1.0'; '../fonts/fontawesome-webfont.woff?v=4.1.0'; '../fonts/fontawesome-webfont.ttf?v=4.1.0'; '../fonts/fontawesome-webfont.svg?v=4.1.0#fontawesomeregular'` | `normal` | `normal` |
| `assets/css/flaticon.css` | `"Flaticon"` | `"../fonts/Flaticon.eot"; "../fonts/Flaticon.eot?#iefix"; "../fonts/Flaticon.woff2"; "../fonts/Flaticon.woff"; "../fonts/Flaticon.ttf"; "../fonts/Flaticon.svg#Flaticon"` | `normal` | `normal` |
| `assets/css/flaticon.css` | `"Flaticon"` | `"../fonts/Flaticon.svg#Flaticon"` | `(not specified)` | `(not specified)` |
| `assets/css/fontawesome-all.min.css` | `Font Awesome\ 5 Brands` | `../fonts/fa-brands-400.eot; ../fonts/fa-brands-400.eot?#iefix; ../fonts/fa-brands-400.woff2; ../fonts/fa-brands-400.woff; ../fonts/fa-brands-400.ttf; ../fonts/fa-brands-400.svg#fontawesome` | `400` | `normal` |
| `assets/css/fontawesome-all.min.css` | `Font Awesome\ 5 Free` | `../fonts/fa-regular-400.eot; ../fonts/fa-regular-400.eot?#iefix; ../fonts/fa-regular-400.woff2; ../fonts/fa-regular-400.woff; ../fonts/fa-regular-400.ttf; ../fonts/fa-regular-400.svg#fontawesome` | `400` | `normal` |
| `assets/css/fontawesome-all.min.css` | `Font Awesome\ 5 Free` | `../fonts/fa-solid-900.eot; ../fonts/fa-solid-900.eot?#iefix; ../fonts/fa-solid-900.woff2; ../fonts/fa-solid-900.woff; ../fonts/fa-solid-900.ttf; ../fonts/fa-solid-900.svg#fontawesome` | `900` | `normal` |
| `assets/css/gijgo.css` | `'gijgo-material'` | `'../fonts/gijgo-material.eot?235541'; '../fonts/gijgo-material.eot?235541#iefix'; '../fonts/gijgo-material.ttf?235541'; '../fonts/gijgo-material.woff?235541'; '../fonts/gijgo-material.svg?235541#gijgo-material'` | `normal` | `normal` |
| `assets/css/themify-icons.css` | `'themify'` | `'../fonts/themify.eot?-fvbane'; '../fonts/themify.eot?#iefix-fvbane'; '../fonts/themify.woff?-fvbane'; '../fonts/themify.ttf?-fvbane'; '../fonts/themify.svg?-fvbane#themify'` | `normal` | `normal` |
| `assets/fonts/_flaticon.scss` | `"Flaticon"` | `"./Flaticon.eot"; "./Flaticon.eot?#iefix"; "./Flaticon.woff2"; "./Flaticon.woff"; "./Flaticon.ttf"; "./Flaticon.svg#Flaticon"` | `normal` | `normal` |
| `assets/fonts/_flaticon.scss` | `"Flaticon"` | `"./Flaticon.svg#Flaticon"` | `(not specified)` | `(not specified)` |
| `assets/fonts/flaticon.css` | `"Flaticon"` | `"./Flaticon.eot"; "./Flaticon.eot?#iefix"; "./Flaticon.woff2"; "./Flaticon.woff"; "./Flaticon.ttf"; "./Flaticon.svg#Flaticon"` | `normal` | `normal` |
| `assets/fonts/flaticon.css` | `"Flaticon"` | `"./Flaticon.svg#Flaticon"` | `(not specified)` | `(not specified)` |

## Feature checklist from the ZIP

| Item | Present in ZIP? | Location / result |
|---|---:|---|
| CSS custom properties | Yes | `medicalcenter-master/assets/css/bootstrap.min.css` and related CSS; list above. |
| `@font-face` rules | Yes | Font Awesome, Flaticon, Font Awesome 5, gijgo-material and themify rules in files listed above. |
| Loading screen | Yes | `medicalcenter-master/index.html` contains `#preloader-active`, `.preloader-circle` and `.preloader-img`; matching loader asset is `medicalcenter-master/assets/img/logo/loder.png`. Miriam Health supplies a branded, accessible implementation. |
| Cookie consent banner | No | Added in `components/cookie-consent.tsx`. |
| CAPTCHA integration | No | Added to public POST form endpoints; requires configured reCAPTCHA keys. |
| `/legal/privacy-policy` | No | Added at `app/legal/privacy-policy/page.tsx`. |
| `/legal/terms` | No | Added at `app/legal/terms/page.tsx`. |
| `/legal/cookie-policy` | No | Added at `app/legal/cookie-policy/page.tsx`. |
| 404 page | No | Added at `app/404/page.tsx` and `app/not-found.tsx`. |
| 500 page | No | Added at `app/500/page.tsx` and `app/error.tsx`. |
| Existing API route file names | None | The supplied template is a static HTML/CSS/JS theme and contains no API routes. Miriam Health routes are under `app/api/`. |
| Existing `.env` variable names | None | The ZIP contains no `.env` file. Miriam Health variables are listed in `.env.example`. |

## Environment variables added for Miriam Health

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- `NEXT_PUBLIC_RECAPTCHA_V2_SITE_KEY`
- `RECAPTCHA_SECRET_KEY`
- `RECAPTCHA_V2_SECRET_KEY`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `PEXELS_API_KEY`
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `BLOB_READ_WRITE_TOKEN`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
