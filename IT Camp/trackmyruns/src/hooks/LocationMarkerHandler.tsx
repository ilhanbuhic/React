import React, { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { useMapEvents } from 'react-leaflet'
import { CoordsProp } from '../utils/interface'

export const LocationMarkerHandler: React.FC<{
  setMarkers: React.Dispatch<React.SetStateAction<[number, number][]>>
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsInputFocus: React.Dispatch<React.SetStateAction<boolean>>
  setCurrentCoords: React.Dispatch<React.SetStateAction<CoordsProp>>
}> = ({ setMarkers, setIsFormVisible, setIsInputFocus, setCurrentCoords }) => {
  let map, mapEvent

  useMapEvents({
    click(mapE) {
      const { lat, lng } = mapE.latlng
      setIsFormVisible(true)
      setIsInputFocus(true)
      setCurrentCoords({ lat, lng })
      setMarkers((prevMarkers) => [...prevMarkers, [lat, lng]])
    },
  })

  return null
}
