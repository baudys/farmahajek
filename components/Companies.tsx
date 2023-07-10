import Link from 'next/link'
import Container from './Container'

const companies = [
  {
    content: '/obchody/ecofeed.png',
    href: 'https://krmiva-ecofeed.cz/',
  },
  {
    content: 'TESPRA Kdyně',
    href: 'https://www.tespra.cz/',
  },
  {
    content: '/obchody/kvidera.png',
    href: 'https://www.krmnesmesikvidera.cz/',
  },
  {
    content: 'Jitka Šilhánková – přebytky Kdyně',
    href: 'https://rejstrik-firem.kurzy.cz/zivnostnik/a3GTo5mdk6U=',
  },
  {
    content: '/obchody/vicenice.png',
    href: 'https://www.farmavicenice.cz/',
  },
  {
    content: 'Luboš Ouřada Domažlice',
    href: 'https://www.firmy.cz/detail/2031327-lubos-ourada-domazlice-mesto.html',
  },
  {
    content: '/obchody/zod-mrakov.png',
    href: 'https://zodmrakov.cz/',
  },
  {
    content: 'Trhy ve Strakonicích',
    href: 'http://farmarsketrhy.strakonice.eu/',
  },
]

const Companies = () => {
  return (
    <div className='overflow-hidden pt-8'>
      <Container>
        <h1 className='font-semibold text-zinc-500/70 text-center text-lg xl:text-4xl uppercase tracking-wider'>
          Naše produkty můžete najít také v těchto prodejnách
        </h1>
      </Container>
      <div className='w-[200%] h-40 lg:h-56 overflow-hidden relative'>
        <div className='w-[200%] flex items-center h-40 lg:h-56 justify-around absolute left-0 animate-scroll-fast xl:animate-scroll-slow'>
          {companies.map(company => (
            <Link
              href={company.href}
              target='_blank'
              className='flex justify-center items-start min-w-[15rem]'
            >
              {!company.content.startsWith('/') ? (
                <h1 className='font-bold text-base xl:text-2xl'>
                  {company.content}
                </h1>
              ) : (
                <img
                  src={company.content}
                  alt='company logo'
                  className='w-auto h-20 xl:h-32'
                />
              )}
            </Link>
          ))}
          {companies.map(company => (
            <Link
              href={company.href}
              target='_blank'
              className='flex justify-center items-start min-w-[15rem]'
            >
              {!company.content.startsWith('/') ? (
                <h1 className='font-bold text-base xl:text-2xl'>
                  {company.content}
                </h1>
              ) : (
                <img
                  src={company.content}
                  alt='company logo'
                  className='w-auto h-20 xl:h-32'
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
