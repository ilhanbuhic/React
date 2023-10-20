import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import '../components/Practice 4/CSS/defaultSettings.css'
// import Header from './components/Practice 4/Header'
import Header from '../components/Practice 4/Header'
import Course from '../components/Practice 4/Course'
import Campus from '../components/Practice 4/Campus'
import Facilities from '../components/Practice 4/Facilities'
import Testemonials from '../components/Practice 4/Testemonials'
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
      <ContactUs />
    </div>
  )
}

export default HomePage
