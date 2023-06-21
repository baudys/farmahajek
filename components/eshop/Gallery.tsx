import Image from 'next/image'
import Link from 'next/link'

const Gallery = () => {
  return (
    <div className='grid grid-cols-2 xl:grid-cols-4'>
      <Link href='/eshop/slepicky/D853' className='bg-zinc-100'>
        <Image src='/slepicky/D853.png' alt='D853' width={300} height={300} />
        <h1>Kuřice Dominant Červený D853</h1>
      </Link>
    </div>
  )
}

export default Gallery
