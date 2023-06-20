import Navbar from '@/components/nav/Navbar'
import Newsletter from '@/components/Newsletter'

export const metadata = {
  title: 'Farma Hájek - Eshop 🛒',
}

export default function EshopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Navbar isEshop={true} />
      <Newsletter />
      {children}
    </div>
  )
}
