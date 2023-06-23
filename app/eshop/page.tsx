import Container from '@/components/Container'
import Sidebar from '@/components/eshop/sidebar/Sidebar'
import Gallery from '@/components/eshop/Gallery'
import { kurniky, slepicky } from '@/database/products'

const Eshop = () => {
  return (
    <div className='bg-white py-20'>
      <h2 className='uppercase text-white text-5xl text-center bg-brown font-bold py-20 mb-8'>
        Všechny produkty
      </h2>
      <Container>
        <div className='grid lg:grid-cols-[1fr_5fr] gap-20'>
          <Sidebar />

          <div>
            <div>
              <div className='flex items-center gap-4 mb-2'>
                <h4 className='relative uppercase font-semibold text-2xl text-brown'>
                  Slepičky
                </h4>
                <div className='bg-brown w-full h-[2px]' />
              </div>
              <Gallery data={slepicky} isSlepice />
            </div>

            <div>
              <div className='flex items-center gap-4 mt-48 mb-2'>
                <h4 className='relative uppercase font-semibold text-2xl text-brown'>
                  Kurníky
                </h4>
                <div className='bg-brown w-full h-[2px]' />
              </div>
              <Gallery data={kurniky} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Eshop
