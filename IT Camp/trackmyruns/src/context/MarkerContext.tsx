import React, { createContext, useState, useContext, ReactNode } from 'react'
import { MarkerContextProp } from '../utils/interface'
import { Marker } from 'react-leaflet'

const defaultValue = {
  markers: [],
  setMarkers: () => {},
}
const MarkerContext = createContext<MarkerContextProp>(defaultValue)

export const MarkerProvider = ({ children }: { children: ReactNode }) => {
  const [markers, setMarkers] = useState({})

  return (
    <MarkerContext.Provider value={{ markers: [], setMarkers }}>
      {children}
    </MarkerContext.Provider>
  )
}

export const useMarkerProvider = () => useContext(MarkerContext)
