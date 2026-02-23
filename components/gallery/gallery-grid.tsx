import { Photo } from '@/components/gallery/photo'

interface GalleryGridProps {
  photos: string[]
}

export const GalleryGrid = ({ photos }: GalleryGridProps) => {
  return (
    <div className='columns-2 gap-2 md:columns-3 md:gap-6'>
      {photos.map((photo) => (
        <div key={photo} className='mb-2 break-inside-avoid md:mb-6'>
          <Photo photo={photo} />
        </div>
      ))}
    </div>
  )
}
