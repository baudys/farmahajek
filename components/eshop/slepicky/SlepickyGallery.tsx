import GalleryItem from '../GalleryItem'

const SlepickyGallery = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 gap-x-6 gap-y-24'>
      <GalleryItem
        href='/eshop/slepicky/D853'
        label='Kuřice Dominant Červený D853'
        src='/slepicky/D853.png'
        price={280}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/D159'
        label='Kuřice Dominant Červeně Žíhaný D159'
        src='/slepicky/D159.png'
        price={280}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/D109'
        label='Kuřice Dominant Černý D109'
        src='/slepicky/D109.png'
        price={280}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/D959'
        label='Kuřice Dominant Žíhaný D959'
        src='/slepicky/D959.png'
        price={280}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/D104'
        label='Kuřice Dominant Sussex D104'
        src='/slepicky/D104.png'
        price={280}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/D107'
        label='Kuřice Dominant Modrý D107'
        src='/slepicky/D107.png'
        price={280}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/D229'
        label='Kuřice Dominant Leghorn D229'
        src='/slepicky/D229.png'
        price={280}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/D300'
        label='Kuřice Dominant Vlaška koroptví D300'
        src='/slepicky/D300.png'
        price={280}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/GS'
        label='Kuřice Dominant Greenshell'
        src='/slepicky/GS.png'
        price={300}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/DS'
        label='Kuřice Dominant Darkshell'
        src='/slepicky/DS.png'
        price={300}
        isSlepice
      />
      <GalleryItem
        href='/eshop/slepicky/kohout'
        label='Kohout'
        src='/slepicky/kohout/1.png'
        price={300}
        isSlepice
      />
    </div>
  )
}

export default SlepickyGallery
