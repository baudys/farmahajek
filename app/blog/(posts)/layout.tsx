import Container from '@/components/container'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className='xl:max-w-screen-lg 2xl:max-w-screen-xl'>
      <Link href='/blog' className='flex items-center gap-1'>
        <ArrowLeft size={18} /> Blog
      </Link>
      {children}
    </Container>
  )
}
