import { createContext, useContext, useState } from 'react'

const LoaderContext = createContext()

export function LoaderContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  const displayLoader = (loader) => {
    setIsLoading(loader)
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