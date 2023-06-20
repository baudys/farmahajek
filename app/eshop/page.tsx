import Container from '@/components/Container'
import D853 from '@/components/slepicky/D853'
import Image from 'next/image'
import Link from 'next/link'

const Eshop = () => {
  return (
    <div className='min-h-[200vh] bg-white pt-40'>
      <Container>
        <div className='flex gap-28 items-center'>
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

          <input
            type='text'
            placeholder='hledej'
            className='bg-zinc-200 p-1 border-2 border-zinc-400'
          />
        </div>
        <div className='grid grid-cols-2 xl:grid-cols-4'>
          <Link href='/eshop/slepicky/D853'>
            <Image
              src='/slepicky/D853.jpg'
              alt='D853'
              width={300}
              height={300}
            />
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default Eshop
