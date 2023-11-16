import { React, useContext } from 'react'
import products from '../../data/products.json'
import Card from '../../productCard/Card'
import { CartContext } from '../../store/CartContext'

function HomePage() {
  const { addToCart, shoppingCart } = useContext(CartContext)

  return (
    <div>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
          addToCart={() => addToCart(product)}
        />
      ))}
    </div>
  )
}

export default HomePage
