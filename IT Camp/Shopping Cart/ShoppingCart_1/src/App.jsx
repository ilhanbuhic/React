import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartContextProvider from './store/CartContext'
import Header from './components/Header/Header'
import './App.css'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Cart from './pages/Cart'
import Footer from './components/footer/Footer'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <CartContextProvider>
        <Header />
        <div style={{ padding: '0 20%', minHeight: '65vh' }}>
            <Routes>
              <Route path = '/' element={<HomePage />}/>
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
        </div>
          </CartContextProvider>
        <Toaster />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
