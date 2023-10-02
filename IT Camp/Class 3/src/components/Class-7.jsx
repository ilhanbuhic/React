import { useState } from 'react'

export default function Class7() {
  const getData = () => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then(console.log)
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}
