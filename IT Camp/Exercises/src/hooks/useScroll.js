import { useEffect, useState } from 'react'

const useScroll = () => {
  const [showArrow, setShowArrow] = useState(true)

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth', // Postavite 'smooth' za glatko skrolanje
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (totalHeight - scrollPosition < 300) {
        setShowArrow(false)
      } else {
        setShowArrow(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { showArrow, setShowArrow, scrollToBottom }
}

export default useScroll
