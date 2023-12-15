import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
const loginImg = require('../assets/images/login.jpg')

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, signUp } = UserAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      toast.success('Sign-up successfully!', {
        style: {
          fontSize: '20px',
        },
      })
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (error) {
      toast.error('Sign-up failed. Please try again.', {
        style: {
          fontSize: '20px',
        },
      })
      console.error(error)
    }
  }

  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <div className='w-full h-screen relative'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src={loginImg}
          alt='image'
        />
        <div className='bg-black/60 fixed w-full h-screen'></div>
        <div className='fixed w-full mt-[80px] px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-[100px]'>
              <h1 className='text-3xl font-bold'>Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className='p-7 my-2 text-2xl bg-gray-600'
                  type='email'
                  placeholder='Email'
                  autoComplete='email'
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-7 my-2 text-2xl bg-gray-600'
                  type='password'
                  placeholder='Password'
                  autoCapitalize='current-password'
                />
                <button className='bg-red-600 py-3 text-[20px] my-6 rounded font-bold'>
                  Sign Up
                </button>
                <div className='flex justify-between items-center text-2xl text-gray-600'>
                  <p className='text-[12px]'>
                    <input className='mr-2 w-7' type='checkbox' />
                    Remember me
                  </p>
                  <p className='text-[12px] cursor-pointer'>Need Help?</p>
                </div>
                <p className='mt-5'>
                  <span className='text-gray-600 mr-2 text-[12px]'>
                    Already subscribed?
                  </span>
                  <a className='text-[12px] my-4 cursor-pointer' href='/login'>
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
