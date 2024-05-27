import L from 'leaflet'

import logo from '../images/logo.png'

const marker = L.icon({
  iconUrl:
    'https://www.pikpng.com/pngl/m/509-5093828_map-marker-car-icon-free-icon-download-svg.png',
  //   iconSize: [38, 95],
  iconSize: [35, 55],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: '/',
  shadowSize: [35, 55],
  shadowAnchor: [22, 94],
})

export { logo, marker }
