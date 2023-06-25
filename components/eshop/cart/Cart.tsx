'use client'

import Container from '@/components/Container'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import MobileCartItem from './MobileCartItem'
import DesktopCartItem from './DesktopCartItem'

const Cart = () => {
  const { cartItems, totalPrice } = useCart(state => state)

  return (
    <div className='min-h-[50vh]'>
      <Container>
        <div className='py-20'>
          {cartItems.length < 1 && (
            <div className='min-h-[50vh] flex flex-col gap-6 justify-center items-center'>
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
              <>
                <MobileCartItem item={item} />
                <DesktopCartItem item={item} />
              </>
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
