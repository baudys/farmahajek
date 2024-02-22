interface Props {
  images: any[]
}

export const Gallery = ({ images }: Props) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
      {images.map(image => (
        <div className='!h-full !w-full overflow-hidden aspect-square relative'>
          <img
            src={image.original}
            className='absolute inset-0 !w-full !h-full object-cover'
          />
        </div>
      ))}
    </div>
  )
}
