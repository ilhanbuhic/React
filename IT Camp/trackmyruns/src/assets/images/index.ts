import L from 'leaflet'

import logo from '../images/logo.png'
import marker from '../images/marker.png'

const markerIcon = L.icon({
  iconUrl: marker,
  iconSize: [26, 40],
  iconAnchor: [17, 50],
  popupAnchor: [-3, -76],
  shadowUrl: '/',
})

export { logo, markerIcon }
