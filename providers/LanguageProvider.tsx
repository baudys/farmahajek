'use client'

import { useLanguage } from '@/hooks/useLanguage'
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
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [setLanguage])

  return children
}
