import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useCart } from '@/hooks/useCart'

interface AddToCartButtonProps {
  name: string
  price: number
  src: string
  href: string
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  name,
  price,
  src,
  href,
}) => {
  const { add } = useCart(state => state)

  return (
    <button
      onClick={() =>
        add({
          name,
          price,
          quantity: 1,
          src,
          href,
        })
      }
      className='flex items-center justify-center border-2 border-green text-brown bg-green hover:bg-brown hover:border-brown hover:text-zinc-100 py-1.5 px-2 rounded-md w-full gap-2 uppercase font-medium transition mt-1'
    >
      <MdAddShoppingCart size={20} /> do košíku
    </button>
  )
}

export default AddToCartButton
