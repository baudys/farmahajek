import { create } from 'zustand'

interface CartItem {
  name: string
  price: number
  quantity: number
  src: string
  href: string
}

interface CartStore {
  cartItems: CartItem[]
  totalPrice: number
  totalQuantity: number
  add: (item: CartItem) => void
  remove: (name: string) => void
  increaseQuantity: (name: string) => void
  decreaseQuantity: (name: string) => void
}

export const useCart = create<CartStore>(set => ({
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
  add: item =>
    set(state => {
      const existingItemIndex = state.cartItems.findIndex(
        cartItem => cartItem.name === item.name
      )
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.cartItems]
        updatedItems[existingItemIndex].quantity += item.quantity
        const updatedPrice = calculateTotalPrice(updatedItems)
        const updatedQuantity = calculateTotalQuantity(updatedItems)
        return {
          cartItems: updatedItems,
          totalPrice: updatedPrice,
          totalQuantity: updatedQuantity,
        }
      } else {
        const updatedItems = [...state.cartItems, item]
        const updatedPrice = calculateTotalPrice(updatedItems)
        const updatedQuantity = calculateTotalQuantity(updatedItems)
        return {
          cartItems: updatedItems,
          totalPrice: updatedPrice,
          totalQuantity: updatedQuantity,
        }
      }
    }),
  remove: name =>
    set(state => {
      const updatedItems = state.cartItems.filter(
        cartItem => cartItem.name !== name
      )
      const updatedPrice = calculateTotalPrice(updatedItems)
      const updatedQuantity = calculateTotalQuantity(updatedItems)
      return {
        cartItems: updatedItems,
        totalPrice: updatedPrice,
        totalQuantity: updatedQuantity,
      }
    }),
  increaseQuantity: name =>
    set(state => {
      const updatedItems = state.cartItems.map(cartItem => {
        if (cartItem.name === name) {
          return { ...cartItem, quantity: cartItem.quantity + 1 }
        }
        return cartItem
      })
      const updatedPrice = calculateTotalPrice(updatedItems)
      const updatedQuantity = calculateTotalQuantity(updatedItems)
      return {
        cartItems: updatedItems,
        totalPrice: updatedPrice,
        totalQuantity: updatedQuantity,
      }
    }),
  decreaseQuantity: name =>
    set(state => {
      const updatedItems = state.cartItems.map(cartItem => {
        if (cartItem.name === name && cartItem.quantity > 1) {
          return { ...cartItem, quantity: cartItem.quantity - 1 }
        }
        return cartItem
      })
      const updatedPrice = calculateTotalPrice(updatedItems)
      const updatedQuantity = calculateTotalQuantity(updatedItems)
      return {
        cartItems: updatedItems,
        totalPrice: updatedPrice,
        totalQuantity: updatedQuantity,
      }
    }),
}))

const calculateTotalPrice = (items: CartItem[]) =>
  items.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )

const calculateTotalQuantity = (items: CartItem[]) =>
  items.reduce((total, cartItem) => total + cartItem.quantity, 0)
