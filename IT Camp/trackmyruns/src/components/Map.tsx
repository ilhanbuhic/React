import React, { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { latLng } from 'leaflet'
import { marker } from '../assets/images'

export const Map: React.FC = () => {
  const [coords, setCoords] = useState<[number, number] | null>(null)

  useEffect(() => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const { latitude, longitude } = position.coords
          console.log(latitude, longitude)

          // console.log(`https://www.google.com/maps/@${latitude},${longitude}`)

          const coords = latLng(latitude, longitude)

          const map = L.map('map').setView(coords, 15)
          console.log(map)

          L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          }).addTo(map)

          map.on('click', function (mapEvent) {
            const { lat, lng } = mapEvent.latlng

            L.marker([lat, lng], { icon: marker })
              .addTo(map)
              .bindPopup(
                L.popup({
                  maxWidth: 250,
                  minWidth: 100,
                  autoClose: false,
                  closeOnClick: false,
                  className: 'running-popup',
                })
              )
              .setPopupContent('Workout')
              .openPopup()
          })
        },
        function () {
          alert('Could not get your position')
        }
      )
  }, [])

  return (
    <>
      <div id='map'></div>
    </>
  )
}
