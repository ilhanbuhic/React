import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../components/Request'
// import { fetchData } from '../storage/storage'
// useEffect(() => {
//   const data = fetchData()
//   setMovies(data)
// }, [])

function Movies() {
  const [movies, setMovies] = useState<any>([])

  const movie = movies[Math.floor(Math.random() * movies.length)]

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results)
      console.log(response.data.results)
    })
  }, [])

  const truncateString = (str: string, num: number) => {
    if (str?.length > num) {
      return str.slice(0, num) + '...'
    } else {
      return str
    }
  }

  return (

  )
}

export default Movies
