import React, { useContext } from 'react'
import Card from '../components/shoppingProductCart/Card'
import { CartContext } from '../store/CartContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { shoppingCart, removeFromCart, totalPrice } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <div>
      {shoppingCart.length > 0 ? (
        <>
          {shoppingCart.map((product) => (
            <Card
              key={product.id}
              product={product}
              removeFromCart={() => removeFromCart(product.id)}
            />
          ))}
          <h1>{totalPrice()}$</h1>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <h1>No products in shopping cart</h1>
          <p>Go to Home Page</p>
          <button
            style={{
              padding: 10,
              borderRadius: 8,
              border: 'none',
              backgroundColor: '#7ed957',
              color: 'white',
              cursor: 'pointer',
              marginTop: 20,
              fontSize: 16,
            }}
            onClick={() => navigate('/')}
          >
            Home Page
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
