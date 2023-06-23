'use client'

import Container from '@/components/Container'
import Sidebar from '@/components/eshop/sidebar/Sidebar'
import Gallery from '@/components/eshop/Gallery'
import { kurniky, slepicky, smesi } from '@/database/products'
import useSearchBar from '@/hooks/useSearchBar'
import { getFilteredProducts } from '@/lib/getFilteredProducts'

const Eshop = () => {
  const query = useSearchBar(state => state.query)

  const filteredSlepicky = getFilteredProducts(query, slepicky)
  const filteredKurniky = getFilteredProducts(query, kurniky)
  const filteredSmesi = getFilteredProducts(query, smesi)

  return (
    <div className='bg-white py-20'>
      <h2 className='uppercase text-white text-5xl text-center bg-brown font-bold py-20 mb-8'>
        Všechny produkty
      </h2>
      <Container>
        <div className='grid lg:grid-cols-[1fr_5fr] gap-20 transition'>
          <Sidebar />

          <div>
            {filteredSlepicky.length !== 0 && (
              <div className='mb-48'>
                <div className='flex items-center gap-4 pb-2'>
                  <h4 className='relative uppercase font-semibold text-2xl text-brown'>
                    Slepičky
                  </h4>
                  <div className='bg-brown w-full h-[2px]' />
                </div>
                <Gallery data={slepicky} isSlepice />
              </div>
            )}

            {filteredKurniky.length !== 0 && (
              <div className='mb-48'>
                <div className='flex items-center gap-4 pb-2'>
                  <h4 className='relative uppercase font-semibold text-2xl text-brown'>
                    Kurníky
                  </h4>
                  <div className='bg-brown w-full h-[2px]' />
                </div>
                <Gallery data={kurniky} />
              </div>
            )}

            {filteredSmesi.length !== 0 && (
              <div className='mb-48'>
                <div className='flex items-center gap-4 pb-2'>
                  <h4 className='relative uppercase font-semibold text-2xl text-brown'>
                    Směsi
                  </h4>
                  <div className='bg-brown w-full h-[2px]' />
                </div>
                <Gallery data={smesi} />
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Eshop
