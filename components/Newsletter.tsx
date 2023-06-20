'use client'

import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import NewsletterInput from './inputs/NewsletterInput'

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(false)
  }

  return (
    <div
      className={`transition-all ${
        isOpen ? 'fixed bottom-0 left-0 min-w-full h-20 bg-green' : 'hidden'
      }`}
    >
      <div className='flex items-center h-full w-full relative'>
        <div className='absolute left-64 grid grid-cols-2 lg:grid-cols-3 items-center'>
          <h4 className='flex-shrink-0 uppercase mr-24'>
            chcete odebírat novinky?
          </h4>
          <NewsletterInput />
          <button className='py-1.5 px-1 rounded-md uppercase text-lg border-2 border-brown font-semibold ml-6 hover:bg-brown hover:text-white transition'>
            potvrdit!
          </button>
        </div>

        <AiOutlineClose
          className='absolute right-5 cursor-pointer'
          onClick={handleClick}
          size={30}
        />
      </div>
    </div>
  )
}

export default Newsletter
