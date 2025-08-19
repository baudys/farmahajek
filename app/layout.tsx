import './globals.css'
import { Montserrat } from 'next/font/google'
import { NewsletterBanner } from '@/components/newsletter-banner'
import { Footer } from '@/components/footer/footer'
import { Navbar } from '@/components/nav/navbar'
import { AnalyticsProvider } from '@/providers/AnalyticsProvider'
import { CookiesBanner } from '@/components/cookies-banner'
import { SklikProvider } from '@/providers/SklikProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://farmahajek.cz'),
  title: 'Farma Hájek 🐔',
  description: 'Rodinná farma již od roku 2000.',
  icons: {
    icon: 'favicon.ico',
  },
  applicationName: 'Farma Hájek',
  languages: {
    'cz-CS': '/',
    'en-US': '/',
    'de-DE': '/',
  },
  authors: [
    { name: 'Daniel Anthony Baudyš', url: 'https://github.com/ton1czech' },
  ],
  creator: 'Daniel Anthony Baudyš',
  category: 'zemědělství',
  keywords: [
    'zemědělství',
    'zemědělec',
    'milouš',
    'polák',
    'milouš polák',
    'miloslav',
    'miloslav polák',
    'míla',
    'míla polák',
    'farma',
    'hájek',
    'farma hájek',
    'slepice',
    'slepičky',
    'kohout',
    'králíkárna',
    'drůbežárna',
    'kurník',
    'kuře',
    'kuřátko',
    'krmení',
    'krmné směsi',
    'brambory',
    'zrní',
    'směsi',
    'prodejna',
    'eshop',
    'e-shop',
    'obchod',
    'kuřice',
    'dominant',
    'výběh',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <AnalyticsProvider />
      <SklikProvider />

      <body className={montserrat.className}>
        {/* <NewsletterBanner /> */}
        <CookiesBanner />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
