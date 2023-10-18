import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AboutUsPage() {
  const navigate = useNavigate()

  return (
    <div className='container'>
      <h1>This is ABOUT US page</h1>
      {/* <Link style={{ color: '#fff' }} to={'/'}>
        Go to HOME
      </Link> */}
      <button onClick={() => navigate('/')}>HOME</button>
    </div>
  )
}

export default AboutUsPage
