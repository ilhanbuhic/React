import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import './App.css'

function App() {
  return <div className='App'>
    <BrowserRouter>
    <Header />
    <div style = {{padding: "0 20%"}}>
      
    </div>
    </BrowserRouter>
  </div>
}

export default App
