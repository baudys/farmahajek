import Container from '@/components/Container'
import SlepickyGallery from '@/components/eshop/slepicky/SlepickyGallery'
import Sidebar from '@/components/eshop/sidebar/Sidebar'

const Slepicky = () => {
  return (
    <div className='bg-white pt-20'>
      <h2 className='uppercase text-brown text-5xl text-center bg-zinc-300 font-bold py-20 mb-8 border-y-2 border-brown'>
        Všechny produkty
      </h2>
      <Container>
        <div className='grid lg:grid-cols-[25%_75%] gap-20'>
          <Sidebar />
          <SlepickyGallery />
        </div>
      </Container>
    </div>
  )
}

export default Slepicky
