import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className='container'>
      <h1>This is HOME page</h1>
      <Link style={{ color: '#fff' }} to={'/about'}>
        ABOUT US
      </Link>
    </div>
  )
}

export default HomePage
