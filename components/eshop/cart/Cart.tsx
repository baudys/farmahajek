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
            <div className='flex flex-col items-end'>
              <p className='text-right text-xl'>
                Celkem: <span className='font-bold'>{totalPrice} Kč</span>
              </p>
              <div className='mt-6 flex'>
                <Link
                  href='/eshop'
                  className='ring-2 ring-zinc-600 py-2 px-4 text-zinc-700 rounded-md mr-8'
                >
                  Pokračovat v nákupu
                </Link>

                <Link
                  href='/eshop/kosik/objednavka'
                  className='bg-brown ring-2 ring-brown text-green font-bold uppercase py-2 px-4 rounded-md w-max'
                >
                  Objednat
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Cart
