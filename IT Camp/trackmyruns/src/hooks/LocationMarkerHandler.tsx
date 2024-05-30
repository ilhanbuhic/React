import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useMapEvents } from 'react-leaflet'
import { CoordsProp } from '../App'

export const LocationMarkerHandler: React.FC<{
  setMarkers: React.Dispatch<React.SetStateAction<[number, number][]>>
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  setCoords: React.Dispatch<React.SetStateAction<CoordsProp | undefined>>
}> = ({ setMarkers, setIsFormVisible, setCoords }) => {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng
      setIsFormVisible(true)
      lat && lng && setCoords({ lat, lng })
      setMarkers((prevMarkers) => [...prevMarkers, [lat, lng]])
    },
  })

  return null
}
