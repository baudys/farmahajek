import AddToCartButton from '@/components/buttons/AddToCartButton'
import Image from 'next/image'

interface ProductProps {
  label: string
  description: string
  src: string
  children: React.ReactNode
}

const Product: React.FC<ProductProps> = ({
  label,
  description,
  src,
  children,
}) => {
  return (
    <div className='grid xl:grid-cols-2'>
      <Image src={src} alt={label} width={500} height={500} />
      <div className='flex items-center w-full'>
        <div>
          <div>
            <h2 className='font-bold text-3xl uppercase mb-2'>{label}</h2>
            <p>{description}</p>
            <AddToCartButton />
          </div>
        </div>
      </div>

      <div />

      <div className='mt-20 space-y-4'>
        <h3 className='uppercase font-semibold text-2xl mb-8'>
          Více informací
        </h3>
        {children}
      </div>
    </div>
  )
}

export default Product
