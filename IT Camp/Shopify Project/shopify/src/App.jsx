import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CartContextProvider from './Store/CartContext'
import Header from './Header/Header'
import './App.css'
import HomePage from './Header/pages/HomePage'
import About from './Header/pages/About'
import Contact from './Header/pages/Contact'
import Profile from './Header/pages/Profile'
import Cart from './Header/pages/Cart'

function App() {
  return <div className='App'>
    <BrowserRouter>
    <Header />
    <div style = {{padding: "0 20%"}}>
      <CartContextProvider>
        <Routes>
          {/* <Route path = '/' element={<HomePage />}/> */}
          <Route path = '/about' element={<About />}/>
          <Route path = '/contact' element={<Contact />}/>
          <Route path = '/cart' element={<Cart />}/>
          <Route path = '/profile' element={<Profile />}/>
        </Routes>
      </CartContextProvider>
    </div>
    </BrowserRouter>
  </div>
}

export default App