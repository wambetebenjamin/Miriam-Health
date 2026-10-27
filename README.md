# Miriam Health

A responsive maternal and women’s health booking and pregnancy-support platform for Kenyan women. The original `medicalcenter-master.zip` template is preserved unchanged as an extracted reference at `template-reference/medicalcenter-master/`. See [ZIP-STRUCTURE.md](./ZIP-STRUCTURE.md) for its complete archive tree and [TEMPLATE-AUDIT.md](./TEMPLATE-AUDIT.md) for the CSS/font audit.

## Run locally

```bash
nvm use
cp .env.example .env.local
npm ci
npm run dev
```

Set the Google reCAPTCHA v3 and v2 key pairs, `NEXTAUTH_SECRET`, Google OAuth credentials (if enabled), Vercel KV credentials and SMTP credentials before enabling account, booking, review or email flows. Protected user actions require a valid NextAuth session. No secret values are committed.

## Application routes

- Pages: `/`, `/providers`, `/provider/[slug]`, `/appointments`, `/tracker`, `/resources`, `/profile`, `/login`, `/register`, `/about`, `/legal/privacy-policy`, `/legal/terms`, `/legal/cookie-policy`, `/404`, `/500`
- APIs: `/api/auth/register`, `/api/auth/[...nextauth]`, `/api/auth/verify-captcha`, `/api/appointments/book`, `/api/appointments/cancel`, `/api/reviews/add`, `/api/tracker/add-entry`, `/api/tracker/update-due-date`, `/api/profile/update`, `/api/profile/delete`, `/api/send-enquiry`
- Pexels image credits: [image-credits.md](./image-credits.md)

Health and pregnancy data is treated as sensitive personal data and is never used for advertising. The chosen Montserrat and Josefin Sans typefaces are bundled and served locally; the public pages do not need a Google Fonts request. Demo provider profiles, ratings, reviews, team identities and testimonials are marked as illustrative and must be replaced with verified, consented information before launch.

## Version notes

The supplied dependency list included several versions that are unavailable or carry known security advisories in the current npm registry. To keep `npm ci` reproducible and `npm audit --audit-level=high` clear, `@vercel/blob` is pinned to published version `2.8.2` (the requested `0.29.4` does not exist); NextAuth is upgraded to `5.0.0-beta.32`, Nodemailer to `10.2.1` and jsPDF to `4.2.1`. Zod is pinned to `4.6.7` to resolve high-severity advisories affecting earlier releases. Next.js 16 no longer provides `next lint`, so `npm run lint` runs the TypeScript check (`tsc --noEmit`). Framer Motion 12.18.0 depends on broad ranges for its split `motion-dom` packages, so compatible `12.18.2` versions are pinned in `overrides` to prevent a build-time module mismatch. Verification was run on Node 24.22.1, satisfying the declared Node `>=24.0.0` requirement in `package.json` and `.nvmrc`.

The requested `@vercel/kv@3.0.0` package is retained, but it is deprecated by its publisher. Existing Vercel KV projects should plan to migrate to the supported Redis integration for new deployments.
