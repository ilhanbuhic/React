import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactUs() {
  const navigate = useNavigate()
  return (
    <>
      <div
        className='alert'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>ERROR 404</h1>
        <h3>NOT FOUND</h3>
        <h6 onClick={() => navigate('/')}>Return back</h6>
      </div>
    </>
  )
}

export default ContactUs
