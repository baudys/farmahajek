import Container from './Container'

const Hero = () => {
  return (
    <header>
      <div className='sticky top-0 -z-10 flex min-h-screen'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='absolute h-full w-full object-cover'
        >
          <source src='/hero.webm' type='video/webm' />
        </video>
        <div className='absolute bg-black/75 top-0 left-0 w-full h-full'></div>
        <Container styles='z-10 h-full w-full'>
          <div className='pt-20'>
            <h1></h1>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Hero
