import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

// import './components/Practice 1/Card.css'
// import './components/Practice 2/css/flex-container.css'

// import Card from './components/Practice 1/Card'
// import { ButtonContainer } from './components/Practice 2/ButtonContainer'
// import { Cards } from './components/Practice 3/Cards'
// ---------- Practice 4 ----------
import './components/Practice 4/CSS/defaultSettings.css'
import Header from './components/Practice 4/Header'
import Course from './components/Practice 4/Course'
import Campus from './components/Practice 4/Campus'
import Facilities from './components/Practice 4/Facilities'
import Testemonials from './components/Practice 4/Testemonials'
import ContactUs from './components/Practice 4/ContactUs'
import HomePage from './components/Practice 4/HomePage'
// ---------- Practice 4 ----------

function App() {
  return (
    <div className='App'>
      {/* <Card /> */}
      {/* <ButtonContainer /> */}
      {/* <Cards /> */}
      
      <BrowserRouter>
      <HomePage />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

      {/* <Course />
      <Campus />
      <Facilities />
      <Testemonials /> */}
    </div>
  )
}

export default App
