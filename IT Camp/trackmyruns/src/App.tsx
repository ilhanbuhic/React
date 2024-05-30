import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { Map } from './components/Map'

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false)
  console.log(isFormVisible)

  return (
    <div className='App body'>
      <Sidebar isVisible={isFormVisible} />
      <Map setIsFormVisible={setIsFormVisible} />
    </div>
  )
}

export default App
