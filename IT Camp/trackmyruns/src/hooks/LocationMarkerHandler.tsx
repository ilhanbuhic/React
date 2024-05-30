import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useMapEvents } from 'react-leaflet'

export const LocationMarkerHandler: React.FC<{
  setMarkers: React.Dispatch<React.SetStateAction<[number, number][]>>
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setMarkers, setIsFormVisible }) => {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng
      setIsFormVisible(true)
      setMarkers((prevMarkers) => [...prevMarkers, [lat, lng]])
    },
  })

  return null
}
