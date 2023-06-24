import './globals.css'
import { Montserrat } from 'next/font/google'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/nav/Navbar'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Farma Hájek 🐔',
  description: '',
  icons: {
    icon: 'favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Navbar />
        <Newsletter />
        {children}
        <Footer />
      </body>
    </html>
  )
}
