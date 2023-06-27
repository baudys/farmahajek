import Container from './Container'

const images = [
  '/obchody/ecofeed.png',
  'TESPRA Kdyně',
  '/obchody/kvidera.png',
  'Jitka Šilhánková – přebytky Kdyně',
  '/obchody/vicenice.png',
  'Luboš Ouřada Domažlice',
  '/obchody/zod-mrakov.png',
  'Trhy ve Strakonicích',
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
          {images.map(content => (
            <div className='flex justify-center items-start min-w-[15rem]'>
              {!content.startsWith('/') ? (
                <h1 className='font-bold text-base xl:text-2xl'>{content}</h1>
              ) : (
                <img
                  src={content}
                  alt='company logo'
                  className='w-auto h-20 xl:h-32'
                />
              )}
            </div>
          ))}
          {images.map(content => (
            <div className='flex justify-center items-start min-w-[15rem]'>
              {!content.startsWith('/') ? (
                <h1 className='font-bold text-base xl:text-2xl'>{content}</h1>
              ) : (
                <img
                  src={content}
                  alt='company logo'
                  className='w-auto h-20 xl:h-32'
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
