'use client'

import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'

export const NewsletterBanner = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    setIsOpen(false)
  }

  const { language } = useLanguage((state) => state)

  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      className={`border-t border-brown transition-all ${
        isOpen
          ? 'fixed bottom-0 left-0 z-[1111] h-48 min-w-full bg-green lg:h-20'
          : 'hidden'
      }`}
    >
      <form
        action='https://gmail.us10.list-manage.com/subscribe/post?u=795e0d434ac0487dfca82ea10&amp;id=49d9d1e3f3&amp;f_id=000cbee5f0'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        target='_blank'
        className='relative flex h-full w-full flex-col items-center lg:flex-row lg:justify-center lg:gap-4'
      >
        <h4 className='mb-3 mt-8 uppercase lg:my-0 lg:mr-32'>
          {language === 'cs' && <>chcete odebírat novinky?</>}
          {language === 'en' && (
            <>Would you like to subscribe to the newsletter?</>
          )}
          {language === 'de' && (
            <>Möchten Sie sich für den Newsletter anmelden?</>
          )}
        </h4>
        <input
          type='email'
          placeholder='E-mail'
          className='h-10 w-64 rounded-md px-1 py-1.5 text-zinc-900 shadow-sm placeholder:text-zinc-500 focus:bg-zinc-100 focus:outline-none sm:text-sm sm:leading-6'
          name='EMAIL'
          id='mce-EMAIL'
          required
        />
        <div
          aria-hidden='true'
          style={{ position: 'absolute', left: '-5000px' }}
        >
          /* real people should not fill this in and expect good things - do not
          remove this or risk form bot signups */
          <input
            type='text'
            name='b_4f24db18e7450d7f4259c5da5_f24627c63d'
            tabIndex={-1}
          />
        </div>
        <button
          type='submit'
          name='subscribe'
          id='mc-embedded-subscribe'
          value='Subscribe'
          onClick={() => setIsOpen(false)}
          className='my-4 rounded-md border-2 border-brown px-1 py-1 text-lg font-semibold uppercase text-brown transition duration-300 hover:bg-brown hover:text-white lg:m-0'
        >
          {language === 'cs' && <>potvrdit!</>}
          {language === 'en' && <>confirm!</>}
          {language === 'de' && <>bestätigen!</>}
        </button>
        <AiOutlineClose
          className='absolute right-3 top-3 cursor-pointer lg:top-[50%] lg:-translate-y-[50%]'
          onClick={handleClick}
          size={25}
        />
      </form>
    </motion.div>
  )
}
