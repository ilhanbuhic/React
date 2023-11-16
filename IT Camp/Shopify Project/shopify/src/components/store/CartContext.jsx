import { createContext, useState } from 'react'
import toast from 'react-hot-toast'

export const CartContext = createContext()

export default function CartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([])

  const notify = () =>
    toast.success('Successfully added product to cart', {
      position: 'top-right',
    })

  const inCart = (product) =>
    shoppingCart.find((cartProduct) => cartProduct.id === product.id)

  const addToCart = (product) => {
    if (inCart(product)) {
      toast.error('already in Cart')
    } else {
      setShoppingCart((prev) => [...prev, product])
      notify()
    }
  }

  const value = {
    shoppingCart,
    addToCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
