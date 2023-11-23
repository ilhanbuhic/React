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

  const removeFromCart = (id) => {
    setShoppingCart((prev) => prev.filter((prod) => prod.id !== id))
  }

  const calcDiscountedPrice = (prod) => {
    return prod.price - prod.price * (prod.discount / 100)
  }

  const totalPrice = () => {
    return shoppingCart
      .reduce(
        (acc, curr) =>
          acc + (curr.discount ? calcDiscountedPrice(curr) : curr.price),
        0
      )
      .toFixed(2)
  }

  const cartSize = () => shoppingCart.length

  const value = {
    shoppingCart,
    addToCart,
    inCart,
    cartSize,
    removeFromCart,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
