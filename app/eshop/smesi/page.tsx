import Container from '@/components/Container'
import Sidebar from '@/components/eshop/sidebar/Sidebar'
import Gallery from '@/components/eshop/Gallery'
import { smesi } from '@/database/products'

const SmesiPage = () => {
  return (
    <div className='bg-white py-20'>
      <h2 className='uppercase text-white text-5xl text-center bg-brown font-bold py-20 mb-8'>
        Směsi
      </h2>
      <Container>
        <div className='grid lg:grid-cols-[1fr_5fr] gap-20'>
          <Sidebar />
          <Gallery data={smesi} />
        </div>
      </Container>
    </div>
  )
}

export default SmesiPage
