import { createContext } from 'react'

const CartContext = createContext()

export default function CartContextProvider({ children }) {
  const value = {}

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
