import { useEffect, useState } from 'react'

const useScroll = () => {
  const [showArrow, setShowArrow] = useState(true)

  const scrollToBottom = () => {
    window.scrollTo(0, document.documentElement.scrollHeight, 'smooth')
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
