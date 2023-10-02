import React, { useState } from 'react'

export default function Card() {
  const [defaultData, setDefaultData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const getData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.products)
        const filtered = data?.products?.slice(0, 8)
        setFilteredData(filtered)
      })
  }

  return (
    <div className='cardContainer'>
      <div className='cards'>
        {filteredData.length > 0 && (
          <div>
            {filteredData.map((product) => (
              <div key={product.id} className='card'>
                <img src={product.thumbnail} alt='' />
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <button style={{ display: 'flex' }} onClick={getData}>
        Get Data
      </button>
    </div>
  )
}
