import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/AuthContext'
import { useState } from 'react'
import SignInForm from '../containers/SignInForm'
import SignUpForm from '../containers/SignUpForm'
const loginImg = require('../assets/images/login.jpg')

const AuthPage = () => {
  const { isSignUp } = UserAuth()

  return (
    <>
      <div className='w-full h-screen relative'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src={loginImg}
          alt='image'
        />
        <div className='bg-black/60 fixed w-full h-screen'></div>
        <div className='fixed w-full mt-[80px] px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[70vh] mx-auto bg-black/70 text-white'>
            {window.location.href.includes('/login') ? (
              <SignInForm />
            ) : (
              <SignUpForm />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthPage
