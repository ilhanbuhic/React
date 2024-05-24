import React, { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export const Map: React.FC = () => {
  const [coords, setCoords] = useState<[number, number] | null>(null)

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords
          // const { longitude } = position.coords
          // console.log(`https://www.google.com/maps/@${latitude},${longitude}`)

          setCoords([latitude, longitude])
          // const map = L.map('map').setView(coords, 15)

          // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          //   attribution:
          //     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          // }).addTo(map)

          // L.marker(coords)
          //   .addTo(map)
          //   .bindPopup('A pretty CSS popup.<br> Easily customizable.')
          //   .openPopup()
        },
        function () {
          alert('Could not get your position')
        }
      )
  }, [])
  return (
    <>
      {coords && (
        <MapContainer
          id='map'
          center={coords}
          zoom={14}
          style={{ height: '100vh', width: '100%' }}
        >
          <TileLayer
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          <Marker position={coords}>
            <Popup>
              A pretty CSS popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  )
}
