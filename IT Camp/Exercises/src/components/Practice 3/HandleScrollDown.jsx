// import { useEffect } from 'react'

// export const handleScrollDown = () => {
//   const [showArrow, setShowArrow] = useState(true)

//   const scrollDownArrow = () => {
//     window.scrollBy({
//       top: window.innerHeight,
//       behavior: 'smooth',
//     })
//   }

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY
//       const totalHeight =
//         document.documentElement.scrollHeight - window.innerHeight
//       if (totalHeight - scrollPosition < 300) {
//         setShowArrow(false)
//       } else {
//         setShowArrow(true)
//       }
//     }

//     window.addEventListener('scroll', handleScroll)

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])
// }
