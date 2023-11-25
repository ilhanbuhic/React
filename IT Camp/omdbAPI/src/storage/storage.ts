import { getTopMovies } from "../axios/api"

// ***** JSX ***** //
// useEffect(() => {
//     const storedDataString = localStorage.getItem('api')
//     if (storedDataString) {
//       const storedData = JSON.parse(storedDataString) as {
//         data: any
//         timestamp: number
//       } | null
//       if (storedData) {
//         const { data, timestamp } = storedData
//         const shouldFetchData =
//           !data || Date.now() - timestamp > 24 * 60 * 60 * 1000
//         if (shouldFetchData) {
//           fetchData(setMovies)
//           console.log(storedData)
//         } else {
//           setMovies(data)
//           console.log(storedData)
//         }
//       }
//     }
//     // const fetchData = async () => {
//     //   const data = await getTopMovies()
//     //   setMovies(data)
//     // }
//     // fetchData()
//   }, [fetchData])
//   console.log(movies)
// ***** JSX ***** //

// const options = {
//   method: 'GET',
//   url: 'https://imdb-top-100-movies.p.rapidapi.com',
//   headers: {
//     'X-RapidAPI-Key': '7df19c1283mshf3ab1f54ed25ca4p12301bjsn5d973c253b3a',
//     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
//   },
// }

// export const getTopMovies = async () => {
//   try {
//     const response = await axios.request(options)
//     console.log(response)
//     return response.data
//   } catch (error) {
//     console.error(error)
//   }
// }

// Test -->
export const fetchData = async () => {
  try {
    const data = await getTopMovies()
    localStorage.setItem('api', JSON.stringify(data))
  } catch (error) {
    console.error('Error in fetchData', error)
  }
}
