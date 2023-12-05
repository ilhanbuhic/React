import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from './Header/Header'
import HomePage from './pages/HomePage'
import Latest from './pages/Latest'
import MyList from './pages/MyList'
import WhyUS from './pages/WhyUS'
import Movies from './pages/Movies'
import { Loader } from './components/Loader/Loader'
import { useEffect, useState } from 'react'
import Series from './pages/Series'
import MoviePage from './pages/MoviePage'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, [])

  return (
    <div className='App bg-primary'>
      {isLoading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/latest' element={<Latest />} />
            <Route path='/my-list' element={<MyList />} />
            <Route path='/why-us' element={<WhyUS />} />
            <Route path='/movies' element={<MoviePage />} />
            <Route path='/series' element={<Series />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  )
}

export default App
