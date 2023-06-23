import Container from '@/components/Container'
import Gallery from '@/components/eshop/Gallery'
import Sidebar from '@/components/eshop/sidebar/Sidebar'
import { doplnky } from '@/database/products'

const Slepicky = () => {
  return (
    <div className='bg-white py-20'>
      <h2 className='uppercase text-white text-5xl text-center bg-brown font-bold py-20 mb-8'>
        Doplňky
      </h2>
      <Container>
        <div className='grid lg:grid-cols-[1fr_5fr] gap-20'>
          <Sidebar />
          <div>
            <Gallery data={[doplnky[0], doplnky[1]]} />
            <Gallery data={[doplnky[2], doplnky[3]]} transparentBg />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Slepicky
