import { create } from 'zustand'

interface SelectCategoryStore {
  selected: string
  set: (value: string) => void
}

const useSelectCategory = create<SelectCategoryStore>(set => ({
  selected: 'vse',
  set: value => set({ selected: value }),
}))

export default useSelectCategory
