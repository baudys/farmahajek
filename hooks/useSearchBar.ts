import { create } from 'zustand'

interface SearchBarStore {
  query: string
  setQuery: (value: string) => void
}

const useSearchBar = create<SearchBarStore>(set => ({
  query: '',
  setQuery: value => set({ query: value }),
}))

export default useSearchBar
