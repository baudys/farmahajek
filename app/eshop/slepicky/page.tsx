import Container from '@/components/Container'
import Sidebar from '@/components/eshop/sidebar/Sidebar'
import Gallery from '@/components/eshop/Gallery'
import { slepicky } from '@/database/products'

const Slepicky = () => {
  return (
    <div className='bg-white py-20'>
      <h2 className='uppercase text-white text-5xl text-center bg-brown font-bold py-20 mb-8'>
        Slepičky
      </h2>
      <Container>
        <div className='grid lg:grid-cols-[1fr_5fr] gap-20'>
          <Sidebar />
          <Gallery data={slepicky} isSlepice />
        </div>
      </Container>
    </div>
  )
}

export default Slepicky
