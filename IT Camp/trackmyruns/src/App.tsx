import React, { useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import { Map } from './components/Map'
import { CoordsProp } from './utils/interface'
import { MarkerProvider } from './context/MarkerContext'
import { Coords } from 'leaflet'
import { Marker } from 'react-leaflet'

function App() {
  const [isFormVisible, setIsFormVisible] = useState<boolean>(false)
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false)
  const [currentCoords, setCurrentCoords] = useState<CoordsProp>({
    lat: 0,
    lng: 0,
  })
  console.log(currentCoords)

  return (
    <div className='App body'>
      <MarkerProvider>
        <Sidebar isFormVisible={isFormVisible} />

        <Map
          setIsFormVisible={setIsFormVisible}
          setIsInputFocus={setIsInputFocus}
          setCurrentCoords={setCurrentCoords}
        />
      </MarkerProvider>
    </div>
  )
}

export default App
