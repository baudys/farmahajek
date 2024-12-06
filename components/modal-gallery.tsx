'use client'

import ModalImage from 'react-modal-image'

interface ModalGalleryProps {
  images: any[]
}

export const ModalGallery: React.FC<ModalGalleryProps> = ({ images }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {images.map((image) => (
        <div className='relative aspect-square overflow-hidden'>
          <ModalImage
            key={image}
            small={image}
            large={image}
            className='absolute inset-0 !h-full !w-full object-cover'
          />
        </div>
      ))}
    </div>
  )
}
