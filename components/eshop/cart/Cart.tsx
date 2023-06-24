'use client'

import Container from '@/components/Container'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { IoClose } from 'react-icons/io5'

const Cart = () => {
  const cartItems = useCart(state => state.cartItems)
  const remove = useCart(state => state.remove)
  const qtyplus = useCart(state => state.increaseQuantity)
  const qtymin = useCart(state => state.decreaseQuantity)
  const totalPrice = useCart(state => state.totalPrice)

  return (
    <div className='min-h-screen'>
      <Container>
        <div className='py-20'>
          {cartItems.length < 1 && (
            <div className='min-h-screen flex flex-col gap-6 justify-center items-center'>
              <h1 className='text-2xl lg:text-5xl font-bold'>
                Nákupní košík je prázdný
              </h1>
              <Link href='/eshop' className='text-zinc-700 text-center'>
                Přesuň se do obchodu a vyber si <br className='lg:hidden' />
                <span className='font-bold underline text-black'>
                  položky k nákupu
                </span>
                !
              </Link>
            </div>
          )}
          {cartItems.length >= 1 &&
            cartItems.map(item => (
              <div className='flex justify-between items-center bg-zinc-300 rounded-md mb-2'>
                <Link href={item.href}>
                  <div className='flex justify-between items-center'>
                    <Image
                      src={item.src}
                      width={150}
                      height={150}
                      alt={item.name}
                    />
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.price} Kč</p>
                    </div>
                  </div>
                </Link>
                <div className='flex gap-24'>
                  <div className='flex items-center gap-2 selection:hidden'>
                    <AiOutlinePlus
                      className='cursor-pointer'
                      onClick={() => qtyplus(item.name)}
                    />

                    <p className='font-bold'>
                      {item.quantity} {item.quantity === 1 ? 'Kus' : 'Kusů'}
                    </p>

                    <AiOutlineMinus
                      className='cursor-pointer'
                      onClick={() => qtymin(item.name)}
                    />
                  </div>
                  <IoClose
                    size={35}
                    className='text-red-700 mr-5 cursor-pointer'
                    onClick={() => remove(item.name)}
                  />
                </div>
              </div>
            ))}
          {cartItems.length >= 1 && (
            <p className='text-right text-xl'>
              Celkem: <span className='font-bold'>{totalPrice} Kč</span>
            </p>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Cart
