import Container from './Container'
import Video from './Video'

const Hero = () => {
  return (
    <header>
      <div className='sticky top-0 -z-10 flex min-h-screen'>
        <Video />

        <div className='absolute bg-black/80 top-0 left-0 w-full h-full flex pt-32 lg:pt-0 lg:items-center lg:justify-center'>
          <Container>
            <div className='grid xl:grid-cols-[2fr_1fr] gap-16 lg:gap-12 p-1'>
              <div className='flex flex-col justify-center'>
                <h1 className='text-white text-2xl xl:text-5xl 2xl:text-7xl font-black uppercase text-center xl:text-left'>
                  Ryze čeští chovatelé, farmáři a zahradníci
                </h1>
                <span className='text-3xl xl:text-5xl 2xl:text-7xl text-center animate-bounce'>
                  🙏🇨🇿🐣🐔🥚🥔🌷🌹
                </span>
                <h4 className='text-zinc-300 text-xl xl:text-3xl 2xl:text-4xl text-center xl:text-left font-light mt-20'>
                  Momentálně jsou naší hlavní činností slepičky, jejich chov,
                  prodej a produkce vajíček
                </h4>
              </div>
              <div>
                <h2 className='text-zinc-300 text-xl xl:text-4xl 2xl:text-6xl text-center xl:text-left font-light'>
                  Našemu oboru se věnujeme{' '}
                  <span className='font-semibold'>již od roku 2000</span>,
                  můžeme Vám zajistit kvalitu a poctivost
                </h2>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}

export default Hero
