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

  // const totalPrice = () => {
  //   shoppingCart.reduce((prev, curr) => {
  //     curr.discount ? curr.price * (curr.discount / 100) : curr.price +=
  //   });
  // };

  const totalPrice = () => {
    let total = 0

    shoppingCart.map((prod) => {
      if (prod.discount) {
        total += prod.price * (prod.discount / 10)
        console.log(total, 'if')
      } else {
        total += prod.price
        console.log(total, 'else')
      }
    })
    return total
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
