'use client'

import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import NewsletterInput from './inputs/NewsletterInput'
import { useLanguage } from '@/hooks/useLanguage'

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(false)
  }

  const { language } = useLanguage(state => state)

  return (
    <div
      className={`transition-all border-t border-brown ${
        isOpen
          ? 'fixed bottom-0 left-0 min-w-full h-48 lg:h-20 bg-green z-10'
          : 'hidden'
      }`}
    >
      <div className='flex flex-col lg:flex-row items-center lg:justify-center lg:gap-4 h-full w-full relative'>
        <h4 className='uppercase mt-8 mb-3 lg:my-0 lg:mr-32'>
          {language === 'cs' && <>chcete odebírat novinky?</>}
          {language === 'en' && (
            <>Would you like to subscribe to the newsletter?</>
          )}
          {language === 'de' && (
            <>Möchten Sie sich für den Newsletter anmelden?</>
          )}
        </h4>
        <NewsletterInput />
        <button className='py-1 px-1 my-4 lg:m-0 rounded-md uppercase text-lg border-2 border-brown font-semibold  hover:bg-brown text-brown hover:text-white transition'>
          {language === 'cs' && <>potvrdit!</>}
          {language === 'en' && <>confirm!</>}
          {language === 'de' && <>bestätigen!</>}
        </button>
        <AiOutlineClose
          className='absolute top-3 right-3 lg:top-[50%] lg:-translate-y-[50%] cursor-pointer'
          onClick={handleClick}
          size={25}
        />
      </div>
    </div>
  )
}

export default Newsletter
