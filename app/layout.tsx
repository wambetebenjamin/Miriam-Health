import type { Metadata, Viewport } from 'next'
import '@fontsource/josefin-sans/400.css'
import '@fontsource/josefin-sans/500.css'
import '@fontsource/josefin-sans/600.css'
import '@fontsource/josefin-sans/700.css'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'
import '@fontsource/montserrat/700.css'
import './globals.css'
import SiteShell from '@/components/SiteShell'

export const metadata: Metadata = {
  title: { default: 'Miriam Health | Every woman deserves safe care', template: '%s | Miriam Health' },
  description: "Find trusted maternal and women's health care, book a certified midwife and feel supported through every stage of your journey in Kenya.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://miriam.health'),
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 5, userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-KE"><body><SiteShell>{children}</SiteShell></body></html>
}
