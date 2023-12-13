import { createContext, useContext, useState } from 'react'

const LoaderContext = createContext()

export function LoaderContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  const displayLoader = (loader) => {
    setIsLoading(loader)
  }

  return (
    <LoaderContext.Provider value={{ isLoading, displayLoader }}>
      {children}
    </LoaderContext.Provider>
  )
}

export function Loader() {
    return useContext(LoaderContext)
}
