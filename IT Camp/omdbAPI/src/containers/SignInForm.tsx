import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { UserAuth } from '../components/context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import { useLoader } from '../components/context/LoadingContext'
// import { SigninSchema } from '../utils'

const SignInForm = () => {
  const { user, logIn } = UserAuth()
  const [showPassword, setShowPassword] = useState(false)
  const { displayLoader } = useLoader()
  const navigate = useNavigate()

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
    try {
      await logIn(email, password)
      toast.success('You signed-in successfully', {
        style: {
          fontSize: '20px',
        },
      })
      setTimeout(() => {
        displayLoader(true)
        navigate('/')
      }, 2000)
    } catch (error) {
      toast.error('Sign-in failed. Please try again.', {
        style: {
          fontSize: '20px',
        },
      })
      console.error(error)
    } finally {
      displayLoader(false)
    }
  }

  const hidePasswordFunc = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='max-w-[320px] mx-auto py-[100px]'>
      <h1 className='text-3xl font-bold'>Sign In</h1>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{ style: { marginTop: '70px' } }}
      />

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        // validationSchema={SigninSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className='w-full flex flex-col py-4'>
            <Field
              className='p-7 my-2 text-xl bg-gray-600'
              name='email'
              type='email'
              placeholder='Email'
            />
            {errors.email && touched.email ? (
              <div className='text-red-500 text-2xl'>{errors.email}</div>
            ) : null}
            <div className='relative'>
              <Field
                className='p-7 w-full my-2 text-2xl bg-gray-600'
                name='password'
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
              />
              {showPassword ? (
                <IoMdEyeOff
                  className='absolute top-9 right-5 cursor-pointer text-[20px]'
                  onClick={hidePasswordFunc}
                />
              ) : (
                <IoMdEye
                  className='absolute top-9 right-5 cursor-pointer text-[20px]'
                  onClick={hidePasswordFunc}
                />
              )}
            </div>
            {errors.password && touched.password ? (
              <div className='text-red-500 text-xl'>{errors.password}</div>
            ) : null}
            <button className='bg-red-600 py-3 text-[20px] my-6 rounded font-bold'>
              Sign In
            </button>{' '}
            <div className='flex justify-between items-center text-2xl text-gray-600'>
              <p className='text-[12px]'>
                <input className='mr-2 w-7' type='checkbox' />
                Remember me
              </p>
              <p className='text-[12px] cursor-pointer'>Need Help?</p>
            </div>
            <p className='mt-5'>
              <span className='text-gray-600 mr-2 text-[12px]'>
                Don't have an account?
              </span>
              <a className='text-[12px] my-4 cursor-pointer' href='/login'>
                Sign Up
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignInForm
