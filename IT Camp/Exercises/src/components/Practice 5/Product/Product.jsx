import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../.env/STATIC_LINK'
import { STATIC_LINK } from '../.env/STATIC_LINK'

export const Product = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`${STATIC_LINK}/products`)
      .then((response) => {
        console.log(`Response data`, console.log(response.data.products))
        setData(response.data.products)
      })
      .catch((error) => {
        throw new Error('An error occured while fetching data', +error.message)
      })
      .catch(() => {
        console.error('Something went wrong')
      })
  }, [])

  return (
    <div className='productContainer'>
      {data?.map((product) => (
        <div key={product.id}>
          <h5>{product.title}</h5>
          <img
            style={{ width: '50px', height: '50px' }}
            src={product.images[0]}
            alt=''
          />
        </div>
      ))}
    </div>
  )
}

export default Product
