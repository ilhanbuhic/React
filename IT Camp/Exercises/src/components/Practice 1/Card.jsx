import React, { useState } from 'react'
import { Select } from './Select'

import './Card.css'

export default function Card() {
  const [defaultData, setDefaultData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const getData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.products)
        const filtered = data?.products?.slice(0, -2)
        setFilteredData(filtered)
      })
  }

  return (
    <div className='firstPageContent'>
      <Select data={filteredData} />
      <div className='cardContainer'>
        <div className='cards'>
          {filteredData.length > 0 && (
            <>
              {filteredData.map((product) => (
                <div key={product.id} className='card'>
                  <img src={product.thumbnail} alt='' />
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <p>Price: {product.price}$</p>
                </div>
              ))}
            </>
          )}
        </div>
  ``    </div>
    </div>
  )
}
