import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useMapEvents } from 'react-leaflet'

export const LocationMarkerHandler: React.FC<{
  setMarkers: React.Dispatch<React.SetStateAction<[number, number][]>>
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsInputFocus: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setMarkers, setIsFormVisible, setIsInputFocus }) => {
  let map, mapEvent

  useMapEvents({
    click(mapE) {
      const { lat, lng } = mapE.latlng
      setIsFormVisible(true)
      setIsInputFocus(true)
      setMarkers((prevMarkers) => [...prevMarkers, [lat, lng]])
    },
  })

  

  return null
}
