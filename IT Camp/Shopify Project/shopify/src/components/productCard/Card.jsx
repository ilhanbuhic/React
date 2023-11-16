import React, { useState } from 'react'
import '../productCard/card.css'

function Card({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0)

  const maxQuantity = 10

  const increase = () => {
    if (quantity !== maxQuantity) setQuantity(quantity++)
  }

  const decrease = () => {
    if (quantity > 0) setQuantity(quantity--)
  }

  return (
    <div className='main-content'>
      <div className='first-content'>
        <img src={product.imageURL} alt={product.title} />
      </div>
      <div className='second-content'>
        <h4>{product.title}</h4>
        <h5 id='green-underline'>Remove</h5>
      </div>
      <div className='third-content'>
        <h4>{Number(product.price)}$</h4>
        <div className='quantity'>
          <p style={{ cursor: 'pointer' }} onClick={decrease}>
            -
          </p>
          <p>{quantity}</p>
          <p style={{ cursor: 'pointer' }} onClick={increase}>
            +
          </p>
        </div>
        <div style={{ width: '40px' }}>
          {product.discount && <h4>{product.discount}%</h4>}
        </div>
        <div
          className='quantity'
          onClick={addToCart}
          style={{ width: '100px', cursor: 'pointer', fontWeight: 'bolder' }}
        >
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  )
}

export default Card
