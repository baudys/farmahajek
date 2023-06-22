import GalleryItem from '../GalleryItem'

const KurnikyGallery = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-24'>
      <GalleryItem
        href='/eshop/kurniky/kurnik-6-netepleny/'
        label='Kurník na 6 slepic neteplený'
        src='/kurniky/kurnik-6-netepleny/1.jpg'
        price={9500}
      />
    </div>
  )
}

export default KurnikyGallery
