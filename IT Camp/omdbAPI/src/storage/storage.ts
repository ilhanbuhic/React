import { getTopMovies } from '../axios/api'

export const fetchData = async () => {
  console.log(Date.now())
  const storedDataString = localStorage.getItem('api')
  if (storedDataString) {
    const storedData = JSON.parse(storedDataString) as {
      data: any
      timestamp: number
    } | null
    if (storedData) {
      const { data, timestamp } = storedData
      const shouldFetchData =
        !data || Date.now() - timestamp > 24 * 60 * 60 * 1000
      if (shouldFetchData) {
        // fetchData(setMovies)
        try {
          // if (localStorage.getItem('api')) return
          const data = await getTopMovies()
          if (!data) return
          const payload = { data, timestamp: Date.now() }
          localStorage.setItem('api', JSON.stringify(payload))
          console.log(data)
        } catch (error) {
          console.error('Error in fetchData', error)
        }
      } else {
        console.log(storedData)
        return data
        // setMovies(data)
      }
    }
  } else {
    const data = await getTopMovies()
    if (!data) return
    const payload = { data, timestamp: Date.now() }
    localStorage.setItem('api', JSON.stringify(payload))
  }
}
