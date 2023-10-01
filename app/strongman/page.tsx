import Container from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'

const StrongmanPage = () => {
  return (
    <div className='pb-28'>
      <div className='w-full h-[70.72px] xl:h-[84.81px] bg-black' />
      <Container styles='mt-10'>
        <h1 className='mb-6 text-2xl font-semibold md:text-3xl lg:text-4xl'>
          Jedinečná strogman akce konající se na naší farmě
        </h1>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
          <Link
            href='/strongman/1-rocnik'
            className='transition rounded-md bg-zinc-100 hover:bg-zinc-200'
          >
            <div className='relative overflow-hidden h-80 rounded-t-md'>
              <Image
                src='/strongman/28.webp'
                alt='1. ročník'
                fill
                className='object-cover object-center rounded-t-md'
              />
            </div>
            <p className='text-center text-black'>1. ročník</p>
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default StrongmanPage
