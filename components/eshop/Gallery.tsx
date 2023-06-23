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
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-24'>
      {filteredProducts.map((value: any) => (
        <GalleryItem
          href={value.href}
          label={value.label}
          src={value.src}
          price={value.price}
          transparentBg={transparentBg}
        />
      ))}
    </div>
  )
}

export default Gallery
