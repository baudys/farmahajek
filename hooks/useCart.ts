import { create } from 'zustand'

interface CartStore {
  cartItems: {
    name: string
    price: number
    quantity: number
    src: string
    href: string
  }[]
  add: (item: {
    name: string
    price: number
    quantity: number
    src: string
    href: string
  }) => void
  remove: (name: string) => void
}

export const useCart = create<CartStore>(set => ({
  cartItems: [],
  add: item => set(state => ({ cartItems: [...state.cartItems, item] })),
  remove: name =>
    set(state => ({
      cartItems: state.cartItems.filter(item => item.name !== name),
    })),
}))
