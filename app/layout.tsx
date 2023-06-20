import Navbar from '@/components/nav/Navbar'
import './globals.css'
import { Montserrat } from 'next/font/google'
import Newsletter from '@/components/Newsletter'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Farma Hájek 🐔',
  description: '',
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
      </body>
    </html>
  )
}
