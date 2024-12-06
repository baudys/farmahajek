'use client'

import { useLanguage } from '@/hooks/useLanguage'

interface TitleProps {
  textCs: string
  textEn: string
  textDe: string
}

export const Title: React.FC<TitleProps> = ({ textCs, textEn, textDe }) => {
  const { language } = useLanguage()

  return (
    <h2 className='mb-4 py-2 text-center text-3xl font-bold uppercase md:text-4xl lg:text-5xl'>
      {language === 'cs' && textCs}
      {language === 'en' && textEn}
      {language === 'de' && textDe}
    </h2>
  )
}
