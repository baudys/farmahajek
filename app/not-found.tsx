import Container from '@/components/Container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='pb-28'>
      <div className='w-full h-[70.72px] xl:h-[84.81px] bg-black' />
      <section>
        <Container>
          <div className='grid w-full place-content-center min-h-[60vh]'>
            <h1 className='text-2xl font-bold text-black md:text-3xl lg:text-4xl'>
              STRÁNKA NENALEZENA
            </h1>
            <Link href='/' className='text-center underline text-zinc-700'>
              zpět na hlavní stránku
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
