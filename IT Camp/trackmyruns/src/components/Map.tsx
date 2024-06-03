import React, { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { markerIcon } from '../assets/images'
import { LocationMarkerHandler } from '../hooks/LocationMarkerHandler'
import { spinnerIcon } from '../assets/images/index'

export const Map: React.FC<{
  setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>
  setIsInputFocus: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ setIsFormVisible, setIsInputFocus }) => {
  const [coords, setCoords] = useState<[number, number] | null>(null)
  const [markers, setMarkers] = useState<[number, number][]>([])

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords
        setCoords([coords.latitude, coords.longitude])
        // setMarkers([[latitude, longitude]])
      })
      console.log(spinnerIcon)
    }
  }, [])

  return (
    <>
      {coords && (
        <MapContainer
          center={coords}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarkerHandler
            setIsFormVisible={setIsFormVisible}
            setMarkers={setMarkers}
            setIsInputFocus={setIsInputFocus}
          />
          {markers.map((markerCoords, index) => (
            <Marker key={index} position={markerCoords} icon={markerIcon}>
              <Popup
                maxWidth={250}
                minWidth={100}
                autoClose={false}
                closeOnClick={false}
                className='running-popup'
                content={'Workout'}
              />
            </Marker>
          ))}
        </MapContainer>
      )}
    </>
  )
}
