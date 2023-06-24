import { create } from 'zustand'

interface CartStore {
  cartItems: {
    name: string
    price: number
    quantity: number
    src: string
    href: string
  }[]
  totalPrice: number
  add: (item: {
    name: string
    price: number
    quantity: number
    src: string
    href: string
  }) => void
  remove: (name: string) => void
  qtyplus: (name: string) => void
  qtymin: (name: string) => void
}

export const useCart = create<CartStore>(set => ({
  cartItems: [],
  totalPrice: 0,
  add: item =>
    set(state => ({
      cartItems: [...state.cartItems, item],
      totalPrice: state.totalPrice + item.price,
    })),
  remove: name =>
    set(state => {
      const itemToRemove = state.cartItems.find(item => item.name === name)
      if (itemToRemove) {
        const updatedPrice =
          state.totalPrice - itemToRemove.price * itemToRemove.quantity
        return {
          cartItems: state.cartItems.filter(item => item.name !== name),
          totalPrice: updatedPrice < 0 ? 0 : updatedPrice,
        }
      }
      return state
    }),
  qtyplus: name =>
    set(state => {
      const updatedItems = state.cartItems.map(item => {
        if (item.name === name) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      const updatedPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
      return {
        cartItems: updatedItems,
        totalPrice: updatedPrice,
      }
    }),
  qtymin: name =>
    set(state => {
      const updatedItems = state.cartItems.map(item => {
        if (item.name === name && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
      const updatedPrice = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      )
      return {
        cartItems: updatedItems,
        totalPrice: updatedPrice,
      }
    }),
}))
