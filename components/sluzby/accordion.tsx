'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { TbHandClick } from 'react-icons/tb'

interface AccordionProps {
  children: React.ReactNode
  src: string
  isOpen: boolean
  handleToggle: () => void
  title: string
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  src,
  isOpen,
  handleToggle,
  title,
}) => {
  const { language } = useLanguage((state) => state)

  return (
    <div
      className={`${
        isOpen ? 'mb-10' : 'mb-0'
      } group transition-all duration-300`}
    >
      <div
        className={`relative flex h-[150px] w-full cursor-pointer items-center justify-center rounded-t-lg bg-cover bg-center ${
          isOpen ? 'rounded-b-none' : 'rounded-b-lg'
        } ${src}`}
        onClick={handleToggle}
      >
        <div
          className={`group absolute left-0 top-0 h-full w-full rounded-t-lg bg-black/70 backdrop-blur-sm transition ${
            isOpen ? 'rounded-b-none' : 'rounded-b-lg'
          }`}
        />
        <div className='z-[1]'>
          <h1 className='z-[1] text-center text-2xl font-bold uppercase text-white transition group-hover:text-zinc-200 xl:text-4xl 2xl:text-6xl'>
            {title}
          </h1>
          <p className='z-[1] flex items-center justify-center gap-2 text-zinc-300 transition group-hover:text-zinc-400'>
            {language === 'cs' && <>pro více informací klikněte</>}
            {language === 'en' && <>click for more information</>}
            {language === 'de' && <>Klicken Sie für weitere Informationen</>}
            <TbHandClick />
          </p>
        </div>
      </div>
      <div
        className={`rounded-b-lg bg-white p-3 text-black shadow-md transition-all duration-300 ${
          isOpen ? 'h-full opacity-100' : 'h-0 opacity-0'
        }`}
      >
        {children}
      </div>
    </div>
  )
}
