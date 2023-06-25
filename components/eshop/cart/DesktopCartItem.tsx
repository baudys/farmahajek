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

interface DesktopCartItemProps {
  item: CartItem
}

const DesktopCartItem: React.FC<DesktopCartItemProps> = ({ item }) => {
  const { cartItems, totalPrice, remove, increaseQuantity, decreaseQuantity } =
    useCart(state => state)

  const getItemTotalPrice = (item: CartItem) => {
    return item.price * item.quantity
  }

  return (
    <div className='relative hidden lg:grid grid-cols-[170px_2fr_1fr_1fr_60px] gap-4 items-center bg-zinc-300 rounded-md mb-3 flex-1 pr-2'>
      <Link href={item.href} className='aspect-square overflow-hidden'>
        <Image
          src={item.src}
          width={170}
          height={170}
          alt={item.name}
          className='w-full h-full object-cover'
        />
      </Link>

      <Link href={item.href}>
        <h3 className='font-medium text-zinc-800 flex-grow'>{item.name}</h3>
      </Link>

      <p className='font-bold text-lg'>{getItemTotalPrice(item)} Kč</p>

      <div className='flex justify-between'>
        <div className='flex items-center gap-2 selection:hidden justify-center pl-4'>
          <AiOutlinePlus
            className='cursor-pointer hover:text-[#166534]'
            onClick={() => increaseQuantity(item.name)}
          />

          <p className='text-sm'>
            {item.quantity} {item.quantity === 1 ? 'Kus' : 'Kusů'}
          </p>

          <AiOutlineMinus
            className='cursor-pointer hover:text-red-800'
            onClick={() => decreaseQuantity(item.name)}
          />
        </div>
      </div>

      <AiFillDelete
        className='text-red-700 hover:text-red-800 cursor-pointer h-6 w-6'
        onClick={() => remove(item.name)}
      />
    </div>
  )
}

export default DesktopCartItem
