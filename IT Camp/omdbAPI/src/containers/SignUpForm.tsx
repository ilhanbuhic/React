import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { UserAuth } from '../components/context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'
import { SignupSchema } from '../utils'

const SignUpForm = () => {
  const { user, signUp } = UserAuth()
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => {
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

  const hidePasswordFunc = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='max-w-[320px] mx-auto py-[100px]'>
      <h1 className='text-3xl font-bold'>Sign Up</h1>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignupSchema}
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
              Sign Up
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
                Already subscribed?
              </span>
              <a className='text-[12px] my-4 cursor-pointer' href='/login'>
                Sign In
              </a>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default SignUpForm
