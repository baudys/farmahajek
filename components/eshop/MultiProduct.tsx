'use client'

import AddToCartButton from '@/components/buttons/AddToCartButton'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

interface MultiProductProps {
  label: string
  price: number
  depth?: number
  height?: number
  width?: number
  description?: string
  images: {
    url: string
  }[]
}

const MultiProduct: React.FC<MultiProductProps> = ({
  label,
  price,
  depth,
  height,
  width,
  description,
  images,
}) => {
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

  console.log(images)
  console.log(images.length)

  return (
    <div className='grid xl:grid-cols-2'>
      <div className='relative max-w-fit'>
        <Image
          className='relative selection:hidden max-h-96 object-cover'
          src={images[currentIndex].url}
          alt={label}
          width={500}
          height={500}
        />
        {images.length > 1 && (
          <>
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
          </>
        )}
        <div className='flex gap-3 mt-2 h-20 overflow-hidden'>
          {images.length > 1 && (
            <Image
              src={
                currentIndex < images.length - 1
                  ? images[currentIndex + 1].url
                  : images[currentIndex - (images.length - 1)].url
              }
              onClick={() =>
                setCurrentIndex(
                  currentIndex < images.length - 1
                    ? currentIndex + 1
                    : currentIndex - (images.length - 1)
                )
              }
              width={100}
              height={100}
              alt={label}
              className='selection:hidden cursor-pointer'
            />
          )}
          {images.length > 2 && (
            <Image
              src={
                currentIndex < images.length - 2
                  ? images[currentIndex + 2].url
                  : images[currentIndex - (images.length - 2)].url
              }
              onClick={() =>
                setCurrentIndex(
                  currentIndex < images.length - 2
                    ? currentIndex + 2
                    : currentIndex - (images.length - 2)
                )
              }
              width={100}
              height={100}
              alt={label}
              className='selection:hidden cursor-pointer'
            />
          )}
          {images.length > 3 && (
            <Image
              src={
                currentIndex < images.length - 3
                  ? images[currentIndex + 3].url
                  : images[currentIndex - (images.length - 3)].url
              }
              onClick={() =>
                setCurrentIndex(
                  currentIndex < images.length - 3
                    ? currentIndex + 3
                    : currentIndex - (images.length - 3)
                )
              }
              width={100}
              height={100}
              alt={label}
              className='selection:hidden cursor-pointer'
            />
          )}
          {images.length > 4 && (
            <Image
              src={
                currentIndex < images.length - 4
                  ? images[currentIndex + 4].url
                  : images[currentIndex - (images.length - 4)].url
              }
              onClick={() =>
                setCurrentIndex(
                  currentIndex < images.length - 4
                    ? currentIndex + 4
                    : currentIndex - (images.length - 4)
                )
              }
              width={100}
              height={100}
              alt={label}
              className='selection:hidden cursor-pointer'
            />
          )}
        </div>
      </div>
      <div className='flex items-center w-full'>
        <div>
          <div>
            <h2 className='font-bold text-3xl uppercase mb-2 selection:hidden'>
              {label}
            </h2>
            {description && <p>{description}</p>}
            {width && (
              <>
                <p>Délka: {depth}</p>
                <p>Výška: {height}</p>
                <p>Šířka: {width}</p>
              </>
            )}
            <AddToCartButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultiProduct
