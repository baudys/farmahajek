import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '../buttons/AddToCartButton'

interface GalleryItemProps {
  href: string
  label: string
  src: string
  price: number
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  href,
  label,
  src,
  price,
}) => {
  return (
    <Link
      href={href}
      className='group rounded-md hover:ring-2 hover:ring-zinc-200 trasnition'
    >
      <div className='bg-zinc-200 group-hover:bg-zinc-300 transition grid place-content-center rounded-t-md'>
        <Image
          src={src}
          alt={label}
          width={250}
          height={250}
          className='group-hover:scale-95 transition'
        />
      </div>
      <div className='p-1 group-hover:bg-zinc-100 transition rounded-md'>
        <h3 className='font-semibold text-sm text-zinc-600'>{label}</h3>
        <p className='font-bold text-lg'>{price} Kč</p>
        <AddToCartButton />
      </div>
    </Link>
  )
}

export default GalleryItem
