import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '../buttons/AddToCartButton'

interface GalleryItemProps {
  href: string
  label: string
  src: string
  price: number
  transparentBg?: boolean
}

const GalleryItem: React.FC<GalleryItemProps> = ({
  href,
  label,
  src,
  price,
  transparentBg,
}) => {
  return (
    <div className='rounded-md ring-2 ring-zinc-200 lg:ring-0 hover:ring-2 hover:ring-zinc-200 transition hover:bg-zinc-100'>
      <Link href={href} className='group'>
        <div
          className={`bg-zinc-200 group-hover:bg-zinc-300 transition rounded-t-md h-56 overflow-hidden ${
            transparentBg && 'grid place-content-center'
          }`}
        >
          <Image
            src={src}
            alt={label}
            width={300}
            height={300}
            className={`${
              transparentBg ? 'group-hover:scale-95' : 'group-hover:scale-105'
            } transition object-cover overflow-hidden w-full h-full`}
          />
        </div>
        <div className='p-1 group-hover:bg-zinc-100 transition rounded-md'>
          <h3 className='font-semibold text-sm text-zinc-600'>{label}</h3>
          <p className='font-bold text-lg'>{price} Kč</p>
        </div>
      </Link>
      <div className='p-1'>
        <AddToCartButton name={label} price={price} src={src} href={href} />
      </div>
    </div>
  )
}

export default GalleryItem
