import { create } from 'zustand'

interface LanguageStore {
  language: 'cs' | 'de' | 'en'
  setLanguage: (value: 'cs' | 'de' | 'en') => void
}

export const useLanguage = create<LanguageStore>(set => ({
  language: 'cs',
  setLanguage: value => set({ language: value }),
}))
