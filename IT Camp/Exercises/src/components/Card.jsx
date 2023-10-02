import { useState } from 'react'

export default function Card() {
  const [defaultData, setDefaultData] = useState([])
  const [filteredData, setFilteredData] = useState([])

  const getData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.products)
        console.log(data?.products)
      })
  }

  return (
    <div
      className='cardContainer'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <button
        onClick={() => {
          getData()
        }}
      >
        Get Data
      </button>
      <button
        onClick={() => {
          {
            setFilteredData(defaultData.filter((_data, index) => index < 8))
          }
          console.log(filteredData)
        }}
      >
        Filtered data
      </button>
    </div>
  )
  {
  }
}
