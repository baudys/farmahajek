import './globals.css'
import { Montserrat } from 'next/font/google'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/nav/Navbar'
import ToasterProvider from '@/providers/ToasterProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Farma Hájek 🐔',
  description: '',
  icons: {
    icon: 'favicon.ico',
  },
  applicationName: 'Farma Hájek',
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
      </body>
    </html>
  )
}
