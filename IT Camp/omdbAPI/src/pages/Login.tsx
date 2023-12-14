import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../components/context/AuthContext'
import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user, logIn } = UserAuth()
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.error(error)
      setError('Wrong email / password')
    }
  }

  return (
    <>
      <div className='w-full h-[92vh] relative'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/7e44df74-b1b2-4de5-9b5e-2991922160d2/RS-en-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg'
          alt='image'
        />
        <div className='bg-black/60 fixed w-full h-[92vh]'></div>
        <div className='fixed w-full mt-[100px] px-4 py24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-[100px]'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {error ? <p className='p-3 text-2xl bg-red-500 my-4 mt-6 rounded-sm'>{error}</p> : null}
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
                  Sign In
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
                    New here?
                  </span>
                  <Link
                    className='text-[12px] my-4 cursor-pointer'
                    to='/signup'
                  >
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
