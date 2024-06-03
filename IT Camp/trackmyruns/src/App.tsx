import React, { useRef, useState } from 'react'
import Sidebar from './components/Sidebar'
import { Map } from './components/Map'
import { Coords } from 'leaflet'

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [isInputFocus, setIsInputFocus] = useState(false)

  return (
    <div className='App body'>
      <Sidebar isFormVisible={isFormVisible} />

      <Map
        setIsFormVisible={setIsFormVisible}
        setIsInputFocus={setIsInputFocus}
      />
    </div>
  )
}

export default App
