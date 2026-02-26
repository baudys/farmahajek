'use client'

import { useLanguage } from '@/hooks/useLanguage'
import { isLocale } from '@/i18n/config'
import { useEffect } from 'react'

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const { setLanguage } = useLanguage(state => state)

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language-storage')
    if (isLocale(storedLanguage)) {
      setLanguage(storedLanguage)
    }
  }, [setLanguage])

  return children
}
