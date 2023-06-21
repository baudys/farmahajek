import Navbar from '@/components/nav/Navbar'

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
      <Navbar isEshop />
      {children}
    </div>
  )
}
