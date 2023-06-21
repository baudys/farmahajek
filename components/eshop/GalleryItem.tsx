import Image from 'next/image'
import Link from 'next/link'
import { MdAddShoppingCart } from 'react-icons/md'

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
      className='group rounded-md hover:ring-2 hover:ring-brown/80 trasnition'
    >
      <div className='bg-zinc-200 group-hover:bg-zinc-300 transition grid place-content-center rounded-md'>
        <Image src={src} alt={label} width={250} height={250} />
      </div>
      <div className='p-1 group-hover:bg-zinc-100 transition rounded-md'>
        <h3 className='font-semibold text-sm text-zinc-600'>{label}</h3>
        <p className='font-bold text-lg'>{price} Kč</p>
        <button className='flex items-center justify-center bg-zinc-100 border-2 border-brown/80 text-brown hover:bg-brown hover:text-white py-1.5 px-2 rounded-md w-full gap-2 uppercase font-medium mt-5 transition'>
          <MdAddShoppingCart size={20} /> do košíku
        </button>
      </div>
    </Link>
  )
}

export default GalleryItem
