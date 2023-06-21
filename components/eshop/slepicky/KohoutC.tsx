'use client'

import AddToCartButton from '@/components/buttons/AddToCartButton'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const KohoutC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevImage = () => {
    const isFirst = currentIndex === 0
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextImage = () => {
    const isLast = currentIndex === images.length - 1
    const newIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const images = [
    { url: '/slepicky/kohout/1.png' },
    { url: '/slepicky/kohout/2.png' },
    { url: '/slepicky/kohout/3.png' },
    { url: '/slepicky/kohout/4.png' },
    { url: '/slepicky/kohout/5.png' },
    { url: '/slepicky/kohout/6.png' },
    { url: '/slepicky/kohout/7.png' },
    { url: '/slepicky/kohout/8.png' },
    { url: '/slepicky/kohout/9.png' },
    { url: '/slepicky/kohout/10.png' },
    { url: '/slepicky/kohout/11.png' },
    { url: '/slepicky/kohout/12.png' },
    { url: '/slepicky/kohout/13.png' },
    { url: '/slepicky/kohout/14.png' },
    { url: '/slepicky/kohout/15.png' },
    { url: '/slepicky/kohout/16.png' },
  ]

  return (
    <div className='grid xl:grid-cols-2'>
      <div className='relative max-w-fit'>
        <Image
          className='relative selection:hidden'
          src={images[currentIndex].url}
          alt='Kohout'
          width={500}
          height={500}
        />
        <AiOutlineLeft
          onClick={prevImage}
          size={40}
          className='absolute left-0 top-[50%] -translate-y-[50%] cursor-pointer'
        />
        <AiOutlineRight
          onClick={nextImage}
          size={40}
          className='absolute right-0 top-[50%] -translate-y-[50%] cursor-pointer'
        />
        <div className='flex gap-3'>
          <Image
            src={
              currentIndex < 15
                ? images[currentIndex + 1].url
                : images[currentIndex - 15].url
            }
            width={100}
            height={100}
            alt='Kohout'
            className='selection:hidden'
          />
          <Image
            src={
              currentIndex < 14
                ? images[currentIndex + 2].url
                : images[currentIndex - 14].url
            }
            width={100}
            height={100}
            alt='Kohout'
            className='selection:hidden'
          />
          <Image
            src={
              currentIndex < 13
                ? images[currentIndex + 3].url
                : images[currentIndex - 13].url
            }
            width={100}
            height={100}
            alt='Kohout'
            className='selection:hidden'
          />
          <Image
            src={
              currentIndex < 12
                ? images[currentIndex + 4].url
                : images[currentIndex - 12].url
            }
            width={100}
            height={100}
            alt='Kohout'
            className='selection:hidden'
          />
        </div>
      </div>
      <div className='flex items-center w-full'>
        <div>
          <div>
            <h2 className='font-bold text-3xl uppercase mb-2 selection:hidden'>
              Kohout
            </h2>
            <p>Druh kohouta bude dodán dle druhu kuřic.</p>
            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default KohoutC
