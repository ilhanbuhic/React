import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from './Header/Header'
import HomePage from './pages/HomePage'
import MyList from './pages/MyList'
import WhyUS from './pages/WhyUS'
import Movies from './pages/MoviePoster'
import { Loader } from './components/Loader/Loader'
import { useEffect, useState } from 'react'
import Series from './pages/Series'
import MoviePage from './pages/MoviePage'
import { AuthContextProvider } from './components/context/AuthContext'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Account from './pages/Account'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const timeLoading = Math.random() * 1 + 1

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, timeLoading * 1000)
  }, [])

  return (
    <AuthContextProvider>
      <div className='App bg-primary'>
        {isLoading ? (
          <Loader />
        ) : (
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/my-list' element={<MyList />} />
              <Route path='/why-us' element={<WhyUS />} />
              <Route path='/movies' element={<MoviePage />} />
              <Route path='/series' element={<Series />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/signup' element={<Account />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </AuthContextProvider>
  )
}

export default App
