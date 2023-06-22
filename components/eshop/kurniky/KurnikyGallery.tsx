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
      <GalleryItem
        href='/eshop/kurniky/kurnik-20-tepleny/'
        label='Kurník na 20 slepic teplený'
        src='/kurniky/kurnik-20-tepleny/1.jpg'
        price={45980}
      />
      <GalleryItem
        href='/eshop/kurniky/kurnik-10-tepleny'
        label='Kurník na 10 slepic teplený'
        src='/kurniky/kurnik-10-tepleny/1.jpg'
        price={39930}
      />
      <GalleryItem
        href='/eshop/kurniky/kurnik-20-netepleny'
        label='Kurník na 20 slepic neteplený'
        src='/kurniky/kurnik-20-netepleny/1.jpg'
        price={27830}
      />
      <GalleryItem
        href='/eshop/kurniky/kurnik-10-netepleny'
        label='Kurník na 10 slepic neteplený'
        src='/kurniky/kurnik-10-netepleny/1.jpg'
        price={24200}
      />
      <GalleryItem
        href='/eshop/kurniky/kurnik-terasovy'
        label='Kurník terasový / balkonový s trusníkem'
        src='/kurniky/kurnik-terasovy/1.jpg'
        price={15125}
      />
      <GalleryItem
        href='/eshop/kurniky/vybeh-bez-vstupu'
        label='Uzavřený výběh bez vstupu 1/2 krytý'
        src='/kurniky/vybeh-bez-vstupu/1.jpg'
        price={7865}
      />
      <GalleryItem
        href='/eshop/kurniky/vybeh-se-vstupem'
        label='Uzavřený výběh se vstupem'
        src='/kurniky/vybeh-se-vstupem/1.jpg'
        price={15125}
      />
      <GalleryItem
        href='/eshop/kurniky/kralikarna-6'
        label='Králíkárna 6 kotcová'
        src='/kurniky/kralikarna-6/1.jpg'
        price={30250}
      />
      <GalleryItem
        href='/eshop/kurniky/kralikarna-4'
        label='Králíkárna 4 kotcová'
        src='/kurniky/kralikarna-4/1.jpg'
        price={22990}
      />
      <GalleryItem
        href='/eshop/kurniky/bedna-preprava'
        label='Bedna na přepravu slepic'
        src='/kurniky/bedna-preprava/1.jpg'
        price={800}
      />
      <GalleryItem
        href='/eshop/kurniky/vybeh'
        label='Výběh'
        src='/kurniky/vybeh/1.jpg'
        price={10890}
      />
    </div>
  )
}

export default KurnikyGallery
