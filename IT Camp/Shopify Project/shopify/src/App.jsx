import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from './components/store/CartContext'
import Header from './components/Header/Header'
import './App.css'
import HomePage from './components/Header/pages/HomePage'
import About from './components/Header/pages/About'
import Contact from './components/Header/pages/Contact'
import Profile from './components/Header/pages/Profile'
import Cart from './components/Header/pages/Cart'
import Footer from './components/footer/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div style={{ padding: '0 20%', minHeight: '65vh' }}>
          <CartContextProvider>
            <Routes>
              <Route path = '/' element={<HomePage />}/>
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </CartContextProvider>
        </div>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
