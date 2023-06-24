'use client'

import Container from '@/components/Container'
import { useCart } from '@/hooks/useCart'
import Image from 'next/image'
import Link from 'next/link'
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'

const Cart = () => {
  const cartItems = useCart(state => state.cartItems)

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
              <Link href={item.href}>
                <div className='flex items-center bg-zinc-300 rounded-md'>
                  <Image
                    src={item.src}
                    width={150}
                    height={150}
                    alt={item.name}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.price} Kč</p>
                    <p>
                      {item.quantity} {item.quantity === 1 ? 'Kus' : 'Kusů'}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </Container>
    </div>
  )
}

export default Cart
