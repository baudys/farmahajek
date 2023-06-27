import Container from './Container'
import Video from './Video'

const Hero = () => {
  return (
    <header>
      <div className='sticky top-0 -z-10 flex min-h-screen'>
        <Video />

        <div className='absolute bg-black/75 top-0 left-0 w-full h-full'></div>
        <Container styles='z-10 h-full w-full'>
          <div className=''>
            <h1></h1>
          </div>
        </Container>
      </div>
    </header>
  )
}

export default Hero
