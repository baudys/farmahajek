import { create } from 'zustand'

interface LanguageStore {
  language: string
  setLanguage: (value: string) => void
}

export const useLanguage = create<LanguageStore>(set => ({
  language: 'cs',
  setLanguage: value => set({ language: value }),
}))
