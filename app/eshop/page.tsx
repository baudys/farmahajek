import Container from '@/components/Container'
import SlepickyGallery from '@/components/eshop/slepicky/SlepickyGallery'
import Sidebar from '@/components/eshop/sidebar/Sidebar'

const Eshop = () => {
  return (
    <div className='bg-white pt-20'>
      <h2 className='uppercase text-brown text-5xl text-center bg-zinc-300 font-bold py-20 mb-8 border-y-2 border-brown'>
        Všechny produkty
      </h2>
      <Container>
        <div className='grid lg:grid-cols-[25%_75%] gap-20'>
          <Sidebar />
          <div>
            <div className='flex items-center gap-4 mb-2'>
              <h4 className='relative uppercase font-semibold text-2xl text-brown'>
                Slepičky
              </h4>
              <div className='bg-brown w-full h-[2px]' />
            </div>
            <SlepickyGallery />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Eshop
