'use client'

import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [value, setValue] = useState('')

  const handleClick = () => {
    setIsOpen(false)
  }

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  const { language } = useLanguage(state => state)

  return (
    <motion.div
      initial={{ y: 200 }}
      animate={{ y: 0 }}
      className={`transition-all border-t border-brown ${
        isOpen
          ? 'fixed bottom-0 left-0 min-w-full h-48 lg:h-20 bg-green z-[1111]'
          : 'hidden'
      }`}
    >
      <form
        action='https://gmail.us21.list-manage.com/subscribe/post?u=4f24db18e7450d7f4259c5da5&amp;id=f24627c63d&amp;f_id=00915fe1f0'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        target='_blank'
        className='flex flex-col lg:flex-row items-center lg:justify-center lg:gap-4 h-full w-full relative'
      >
        <h4 className='uppercase mt-8 mb-3 lg:my-0 lg:mr-32'>
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
          className='rounded-md py-1.5 px-1 h-10 w-64 text-zinc-900 placeholder:text-zinc-500 shadow-sm sm:text-sm sm:leading-6 focus:outline-none focus:bg-zinc-100'
          name='EMAIL'
          id='mce-EMAIL'
          required
          value={value}
          onChange={onChange}
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
            value=''
          />
        </div>
        <button
          type='submit'
          name='subscribe'
          id='mc-embedded-subscribe'
          value='Subscribe'
          onClick={() => setIsOpen(false)}
          className='py-1 px-1 my-4 lg:m-0 rounded-md uppercase text-lg border-2 border-brown font-semibold  hover:bg-brown text-brown hover:text-white transition duration-300'
        >
          {language === 'cs' && <>potvrdit!</>}
          {language === 'en' && <>confirm!</>}
          {language === 'de' && <>bestätigen!</>}
        </button>
        <AiOutlineClose
          className='absolute top-3 right-3 lg:top-[50%] lg:-translate-y-[50%] cursor-pointer'
          onClick={handleClick}
          size={25}
        />
      </form>
    </motion.div>
  )
}

export default Newsletter
