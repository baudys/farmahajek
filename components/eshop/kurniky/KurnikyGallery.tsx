'use client'

import useSearchBar from '@/hooks/useSearchBar'
import GalleryItem from '../GalleryItem'
import { kurniky } from '@/database/products'
import { getFilteredProducts } from '@/lib/getFilteredProducts'

const KurnikyGallery = () => {
  const query = useSearchBar(state => state.query)

  const filteredProducts = getFilteredProducts(query, kurniky)

  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-24'>
      {filteredProducts.map((value: any) => (
        <GalleryItem
          href={value.href}
          label={value.label}
          src={value.src}
          price={value.price}
        />
      ))}
    </div>
  )
}

export default KurnikyGallery
