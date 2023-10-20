import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import './CSS/defaultSettings.css'
// import Header from './components/Practice 4/Header'
import Header from './Header'
import Course from './Course'
import Campus from './Campus'
import Facilities from './Facilities'
import Testemonials from './Testemonials'
import ContactUs from './ContactUs'
// ---------- Practice 4 ----------

function HomePage() {
  return (
    <div className='App'>
      {/* <Card /> */}
      {/* <ButtonContainer /> */}
      {/* <Cards /> */}

      <Header />
      <Course />
      <Campus />
      <Facilities />
      <Testemonials />
    </div>
  )
}

export default HomePage
