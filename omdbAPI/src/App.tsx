import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import HomePage from './pages/HomePage'
import WhyUS from './pages/WhyUS'
import Account from './pages/Account'
import { Loader } from './components/Loader/Loader'
import { useEffect, useState } from 'react'
import Series from './pages/Series'
import MoviePage from './pages/MoviePage'
import { AuthContextProvider } from './components/context/AuthContext'
import { useLoader } from './components/context/LoadingContext'
import AuthPage from './pages/AuthPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const timeLoading = Math.random() * 1 + 1
  const { isLoading, setIsLoading } = useLoader()

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
              <Route path='/why-us' element={<WhyUS />} />
              <Route
                path='/movies'
                element={
                  <ProtectedRoute>
                    <MoviePage />
                  </ProtectedRoute>
                }
              />
              <Route path='/series' element={<Series />} />
              <Route
                path='/account'
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />
              <Route path='/login' element={<AuthPage />} />
              <Route path='/signup' element={<AuthPage />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </AuthContextProvider>
  )
}

export default App
