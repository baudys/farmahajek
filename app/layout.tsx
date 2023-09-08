import './globals.css'
import { Montserrat } from 'next/font/google'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/nav/Navbar'
import ToasterProvider from '@/providers/ToasterProvider'
import Script from 'next/script'

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
      <body className={montserrat.className}>
        <ToasterProvider />
        <Navbar />
        <Newsletter />
        {children}
        <Footer />
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-GD4D34EF5P'
        ></Script>
        <Script>
          {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());

             gtag('config', 'G-GD4D34EF5P');
          `}
        </Script>
      </body>
    </html>
  )
}
