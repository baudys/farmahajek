import Container from '@/components/Container'
import { Gallery } from '@/components/strongman/Gallery'
import { strongman1 } from '@/database/strongman-1'

const Rocnik1Page = () => {
  return (
    <div className='pb-28'>
      <div className='w-full h-[70.72px] xl:h-[84.81px] bg-black' />
      <Container styles='mt-10'>
        <Gallery images={strongman1} />
      </Container>
    </div>
  )
}

export default Rocnik1Page
