// import { getTopMovies } from '../axios/api'

// export const fetchData = async () => {
//   const storedDataString = localStorage.getItem('api')
//   if (storedDataString) {
//     const storedData = JSON.parse(storedDataString) as {
//       data: any
//       timestamp: number
//     } | null
//     if (
//       storedData &&
//       (!storedData.data ||
//         // Date.now() - storedData.timestamp > 24 * 60 * 60 * 1000)
//         Date.now() - storedData.timestamp > 10 * 24 * 60 * 60 * 1000)
//     ) {
//       try {
//         const data = await getTopMovies()
//         localStorage.removeItem('api')
//         if (data) {
//           const payload = { data, timestamp: Date.now() }
//           localStorage.setItem('api', JSON.stringify(payload))
//           console.log(data)
//         }
//       } catch (error) {
//         console.error('Error in fetchData', error)
//       }
//     } else {
//       console.log(storedData?.data)
//       return storedData?.data
//     }
//   } else {
//     const data = await getTopMovies()
//     if (data) {
//       const payload = { data, timestamp: Date.now() }
//       localStorage.setItem('api', JSON.stringify(payload))
//     }
//   }
// }
export const test = () => {}

