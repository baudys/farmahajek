import Container from '@/components/container'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='pb-28'>
      <div className='h-[70.72px] w-full bg-black xl:h-[84.81px]' />
      <section>
        <Container>
          <div className='grid min-h-[60vh] w-full place-content-center'>
            <h1 className='text-2xl font-bold text-black md:text-3xl lg:text-4xl'>
              STRÁNKA NENALEZENA
            </h1>
            <Link href='/' className='text-center text-zinc-700 underline'>
              zpět na hlavní stránku
            </Link>
          </div>
        </Container>
      </section>
    </main>
  )
}
