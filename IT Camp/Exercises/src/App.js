import { React } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  useNavigate,
} from 'react-router-dom'

// import './components/Practice 1/Card.css'
// import './components/Practice 2/css/flex-container.css'

// import Card from './components/Practice 1/Card'
// import { ButtonContainer } from './components/Practice 2/ButtonContainer'
// import { Cards } from './components/Practice 3/Cards'
// ---------- Practice 4 ----------
// import './components/Practice 4/CSS/defaultSettings.css'
// import ContactUs from './pages/Practice 4/ContactUs'
// import HomePage from './pages/Practice 4/HomePage'
// ---------- Practice 4 ----------

// ---------- Practice 5 ----------
import Navbar from './components/Practice 5/Navbar/Navbar'
import './components/Practice 5/HomePage/defaultSettings.css'
import { HomePage } from './components/Practice 5/HomePage/HomePage'
import Product from './components/Practice 5/Products/Product'
import { Cards } from './components/Practice 5/Posts/Cards/Cards'
// ---------- Practice 5 ----------

function App() {
  return (
    <div className='App'>
      {/* <Card /> */}
      {/* <ButtonContainer /> */}
      {/* <Cards /> */}
      {/* // ---------- Practice 4 ---------- */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/contact-us' element={<ContactUs />} />
        </Routes>
      </BrowserRouter> */}
      {/* // ---------- Practice 4 ---------- */}

      {/* // ---------- Practice 5 ---------- */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/posts' element={<Cards />}></Route>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/products' element={<Product />}></Route>
          <Route path = '/posts/:id' element ></Route>
        </Routes>
      </BrowserRouter>
      {/* // ---------- Practice 5 ---------- */}
    </div>
  )
}

export default App

