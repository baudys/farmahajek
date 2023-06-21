import Container from '@/components/Container'
import SlepickyGallery from '@/components/eshop/slepicky/SlepickyGallery'
import Sidebar from '@/components/eshop/sidebar/Sidebar'

const Slepicky = () => {
  return (
    <div className='bg-white pt-20'>
      <h2 className='uppercase text-white text-5xl text-center bg-brown font-bold py-20 mb-8'>
        Slepičky
      </h2>
      <Container>
        <div className='grid lg:grid-cols-[1fr_5fr] gap-20'>
          <Sidebar />
          <SlepickyGallery />
        </div>
      </Container>
    </div>
  )
}

export default Slepicky
