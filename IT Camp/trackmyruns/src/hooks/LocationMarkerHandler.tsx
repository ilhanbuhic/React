import React from 'react'
import 'leaflet/dist/leaflet.css'
import { useMapEvents } from 'react-leaflet'

export const LocationMarkerHandler: React.FC<{
  setMarkers: React.Dispatch<React.SetStateAction<[number, number][]>>
}> = ({ setMarkers }) => {
  useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng
      setMarkers((prevMarkers) => [...prevMarkers, [lat, lng]])
    },
  })

  return null
}
