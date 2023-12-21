import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { LoaderContextProvider } from './components/context/LoadingContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  // <React.StrictMode>
  <LoaderContextProvider>
    <App />
  </LoaderContextProvider>
  // </React.StrictMode>
)
