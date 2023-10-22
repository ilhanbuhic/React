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
          marginTop: '40vh',
          alignItems: 'center',
        }}
      >
        <h1>ERROR 404</h1>
        <h3>NOT FOUND</h3>
        <h5 onClick={() => navigate('/')} style={{ cursor: 'pointer', marginTop: '30px', color: 'blue' }}>
          Return back
        </h5>
      </div>
    </>
  )
}

export default ContactUs
