'use client'

import AddToCartButton from '@/components/buttons/AddToCartButton'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { HiArrowLeft } from 'react-icons/hi'

interface ProductProps {
  label: string
  description: string
  src: string
  price: number
  children?: React.ReactNode
  href: string
}

const Product: React.FC<ProductProps> = ({
  label,
  description,
  src,
  children,
  price,
  href,
}) => {
  const router = useRouter()

  return (
    <div className='grid xl:grid-cols-2'>
      <div>
        <p
          className='flex items-center font-bold text-2xl gap-2 cursor-pointer mb-6 w-fit'
          onClick={() => router.back()}
        >
          <HiArrowLeft />
          Zpět do obchodu
        </p>
        <Image
          src={src}
          alt={label}
          width={500}
          height={500}
          className='max-h-[500px] object-cover'
        />
      </div>
      <div className='flex items-center w-full'>
        <div>
          <div>
            <h2 className='font-bold text-3xl uppercase mb-2'>{label}</h2>
            <p>{description}</p>
            <AddToCartButton name={label} price={price} src={src} href={href} />
          </div>
        </div>
      </div>

      <div />

      <div className='mt-20 space-y-4'>
        {children && (
          <>
            <h3 className='uppercase font-semibold text-2xl mb-8'>
              Více informací
            </h3>
            {children}
          </>
        )}
      </div>
    </div>
  )
}

export default Product
