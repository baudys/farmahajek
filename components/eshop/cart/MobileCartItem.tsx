import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { AiFillDelete } from 'react-icons/ai'

interface CartItem {
  name: string
  price: number
  quantity: number
  src: string
  href: string
}

interface MobileCartItemProps {
  item: CartItem
}

const MobileCartItem: React.FC<MobileCartItemProps> = ({ item }) => {
  const { cartItems, totalPrice, remove, increaseQuantity, decreaseQuantity } =
    useCart(state => state)

  const getItemTotalPrice = (item: CartItem) => {
    return item.price * item.quantity
  }

  return (
    <div className='lg: hidden relative bg-zinc-300 rounded-md mb-3 flex-1 pr-2'>
      <div className='grid grid-cols-[1.1fr_3fr] gap-1 items-center'>
        <Link href={item.href} className='aspect-square overflow-hidden'>
          <Image
            src={item.src}
            width={300}
            height={300}
            alt={item.name}
            className='w-full h-full object-cover'
          />
        </Link>

        <div className='flex flex-col h-full truncate'>
          <Link href={item.href}>
            <h3 className='font-medium text-zinc-800 flex-grow'>{item.name}</h3>
          </Link>

          <div className='flex mt-auto justify-between'>
            <div className='flex items-center gap-2 selection:hidden justify-center pl-4'>
              <AiOutlinePlus
                className='cursor-pointer'
                onClick={() => increaseQuantity(item.name)}
              />

              <p className='text-sm'>
                {item.quantity} {item.quantity === 1 ? 'Kus' : 'Kusů'}
              </p>

              <AiOutlineMinus
                className='cursor-pointer'
                onClick={() => decreaseQuantity(item.name)}
              />
            </div>
            <p className='font-medium'>{getItemTotalPrice(item)} Kč</p>
          </div>
        </div>

        <AiFillDelete
          className='absolute right-2 text-red-700 hover:text-red-800 cursor-pointer h-6 w-6 lg:w-8 lg:h-8'
          onClick={() => remove(item.name)}
        />
      </div>
    </div>
  )
}

export default MobileCartItem
