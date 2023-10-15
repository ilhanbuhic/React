import { useEffect, useState } from "react"


export default function useEffec() {
  const [data, setData] = useState({})
  const [currentProd, setCurrrentProd] = useState(1)
  const [allProd, setAllProd] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${currentProd}`)
      .then((res) => res.json())
      .then((json) => setData(json))
  }, [currentProd])

  console.log(currentProd)
  console.log(data)
  return (
    <div className='container'>
      {data && (
        <div>
          <h1>{data.title}</h1>
          <h1>{data.descriptioj}</h1>
          {data.images && <img src={data.images[0]}></img>}
        </div>
      )}
      {allProd.map((el) => (
        <button onClick={() => setCurrrentProd(el)}>{el}</button>
      ))}
    </div>
  )
}
