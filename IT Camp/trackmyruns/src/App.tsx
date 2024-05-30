import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Map } from './components/Map'
import { Coords } from 'leaflet'

export interface CoordsProp {
  lat: number
  lng: number
}
function App() {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const [coords, setCoords] = useState<CoordsProp | undefined>()

  console.log(isFormVisible)

  return (
    <div className='App body'>
      <Sidebar isFormVisible={isFormVisible} coords={coords} />
      <Map setIsFormVisible={setIsFormVisible} setMarkerCoords={setCoords} />
    </div>
  )
}

export default App
