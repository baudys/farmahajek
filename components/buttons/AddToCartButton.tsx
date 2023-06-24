import React from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { useCart } from '@/hooks/useCart'

interface AddToCartButtonProps {
  name: string
  price: number
  src: string
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  name,
  price,
  src,
}) => {
  const addItem = useCart(state => state.add)

  return (
    <button
      onClick={() =>
        addItem({
          name,
          price,
          quantity: 1,
          src,
        })
      }
      className='flex items-center justify-center border-2 border-green text-brown bg-green hover:bg-brown hover:border-brown hover:text-zinc-100 py-1.5 px-2 rounded-md w-full gap-2 uppercase font-medium mt-5 transition max-w-[420px]'
    >
      <MdAddShoppingCart size={20} /> do košíku
    </button>
  )
}

export default AddToCartButton
