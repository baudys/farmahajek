'use client'

import useSearchBar from '@/hooks/useSearchBar'
import GalleryItem from '@/components/eshop/GalleryItem'
import { getFilteredProducts } from '@/lib/getFilteredProducts'

interface GalleryProps {
  data: {}[]
  transparentBg?: boolean
}

const Gallery: React.FC<GalleryProps> = ({ data, transparentBg }) => {
  const query = useSearchBar(state => state.query)

  const filteredProducts = getFilteredProducts(query, data)

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-3 xl:gap-x-6 xl:gap-y-24'>
      {filteredProducts.map((value: any) => (
        <GalleryItem
          href={value.href}
          label={value.label}
          src={value.src}
          price={value.price}
          transparentBg={value.transparentBg || transparentBg}
        />
      ))}
    </div>
  )
}

export default Gallery
