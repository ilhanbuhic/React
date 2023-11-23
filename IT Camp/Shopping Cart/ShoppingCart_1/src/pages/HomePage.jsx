import React, { useContext } from 'react'
import products from '../components/data/products.json'
import { CartContext } from '../store/CartContext'
import Card from '../components/productCard/Card'

function HomePage() {
  const { addToCart } = useContext(CartContext)

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 40,
      }}
    >
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
