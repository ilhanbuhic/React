// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { Formik, Form, Field } from 'formik'
// import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
// import { UserAuth } from './context/AuthContext'
// import * as Yup from 'yup'

// const SignupSchema = Yup.object().shape({
//   email: Yup.string().email('Invalid email').required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 characters')
//     .matches(
//       /^(?=.*[A-Z])(?=.*\d)/,
//       'Password must contain at least one uppercase letter and one number'
//     )
//     .required('Password is required'),
// })

// interface ValidationSchemaExampleProps {
//   buttonName: string
// }

// export const ValidationSchemaExample: React.FC<
//   ValidationSchemaExampleProps
// > = ({ buttonName }) => {
//   const { user, logIn } = UserAuth()
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [showPassword, setShowPassword] = useState(false)
//   const navigate = useNavigate()

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     try {
//       await logIn(email, password)
//       navigate('/')
//     } catch (error) {
//       console.error(error)
//       setError('Wrong email / password')
//     }
//   }

//   const hidePasswordFunc = () => {
//     setShowPassword(!showPassword)
//   }

//   return (
//     <Formik
//       initialValues={{
//         email: '',
//         password: '',
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={(values) => {
//         console.log(values)
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form className='w-full flex flex-col py-4'>
//           <Field
//             className='p-7 my-2 text-xl bg-gray-600'
//             name='email'
//             type='email'
//             placeholder='Email'
//           />
//           {errors.email && touched.email ? (
//             <div className='text-red-500 text-2xl'>{errors.email}</div>
//           ) : null}
//           <div className='relative'>
//             <Field
//               className='p-7 w-full my-2 text-2xl bg-gray-600'
//               name='password'
//               type={showPassword ? 'text' : 'password'}
//               placeholder='Password'
//             />
//             {showPassword ? (
//               <IoMdEyeOff
//                 className='absolute top-9 right-5 cursor-pointer text-[20px]'
//                 onClick={hidePasswordFunc}
//               />
//             ) : (
//               <IoMdEye
//                 className='absolute top-9 right-5 cursor-pointer text-[20px]'
//                 onClick={hidePasswordFunc}
//               />
//             )}
//           </div>
//           {errors.password && touched.password ? (
//             <div className='text-red-500 text-xl'>{errors.password}</div>
//           ) : null}
//           <button className='bg-red-600 py-3 text-[20px] my-6 rounded font-bold'>
//             {buttonName}
//           </button>{' '}
//           <div className='flex justify-between items-center text-2xl text-gray-600'>
//             <p className='text-[12px]'>
//               <input className='mr-2 w-7' type='checkbox' />
//               Remember me
//             </p>
//             <p className='text-[12px] cursor-pointer'>Need Help?</p>
//           </div>
//           <p className='mt-5'>
//             <span className='text-gray-600` mr-2 text-[12px]'>
//               Don't have an account?
//             </span>
//             <a className='text-[12px] my-4 cursor-pointer' href='/login'>
//               Sign Up
//             </a>
//           </p>
//         </Form>
//       )}
//     </Formik>
//   )
// }

