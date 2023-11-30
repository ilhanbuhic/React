import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import HomePage from './pages/HomePage'
import Latest from './pages/Latest'
import MyList from './pages/MyList'
import WhyUS from './pages/WhyUS'

function App() {
  return (
    <div className='App bg-primary'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/latest' element={<Latest />} />
          <Route path='/my-list' element={<MyList />} />
          <Route path='/why-us' element={<WhyUS />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
