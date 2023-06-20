import Container from '@/components/Container'
import Link from 'next/link'

export const metadata = {
  title: 'Farma Hájek - Eshop 🛒',
}

const Eshop = () => {
  return (
    <div className='min-h-[200vh] bg-white pt-20'>
      <Container>
        <ul className='flex gap-4'>
          <li>
            <Link href='/eshop/slepicky'>Slepičky</Link>
          </li>
          <li>
            <Link href='/eshop/kurniky'>Kurníky</Link>
          </li>
          <li>
            <Link href='/eshop/smesi'>Směsi</Link>
          </li>
          <li>
            <Link href='/eshop/doplnky'>Doplňky</Link>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Eshop
