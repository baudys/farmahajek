'use client'

import { images } from '@/database/gallery'
import ModalImage from 'react-modal-image'

const ModalGallery = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4'>
      {images.map(image => (
        <div className='h-56 md:h-52 lg:h-44 xl:h-52 overflow-hidden'>
          <ModalImage
            key={image.original}
            small={image.thumbnail}
            large={image.original}
            className='object-cover'
          />
        </div>
      ))}
    </div>
  )
}

export default ModalGallery
