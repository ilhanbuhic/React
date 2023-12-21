import { createContext, useContext, useState } from 'react'

const LoaderContext = createContext()

export function LoaderContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)


  const displayLoader = async () => {
    setIsLoading(!isLoading)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(isLoading)
  }

  return (
    <LoaderContext.Provider value={{ isLoading, displayLoader, setIsLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

export function useLoader() {
  return useContext(LoaderContext)
}
