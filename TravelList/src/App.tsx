import React from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import PackingList from './components/PackingList/PackingList'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className='app'>
      <Header />
      <Form />
      <PackingList />
      <Footer />
    </div>
  )
}

export default App
