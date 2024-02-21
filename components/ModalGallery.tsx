'use client'

import ModalImage from 'react-modal-image'

interface ModalGalleryProps {
  images: any[]
  tall?: boolean
  square?: boolean
}

const ModalGallery = ({ images, tall, square }: ModalGalleryProps) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {images.map(image => (
        <div
          className={`h-56 overflow-hidden md:h-52 lg:h-44 xl:h-52 ${
            tall && '!h-full !w-full overflow-hidden aspect-[3/4]'
          } ${
            square && '!h-full !w-full overflow-hidden aspect-square relative'
          }`}
        >
          <ModalImage
            key={image.original}
            small={image.original}
            large={image.original}
            className='absolute inset-0 !w-full !h-full object-cover'
          />
        </div>
      ))}
    </div>
  )
}

export default ModalGallery
