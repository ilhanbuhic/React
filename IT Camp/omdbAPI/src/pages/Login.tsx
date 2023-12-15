// import { Link, useNavigate } from 'react-router-dom'
// import { UserAuth } from '../components/context/AuthContext'
// import { useState } from 'react'
// import { IoMdEye, IoMdEyeOff } from 'react-icons/io'
// const loginImg = require('../assets/images/login.jpg')

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [error, setError] = useState('')
//   const [hidePassword, setHidePassword] = useState(false)
//   const { user, logIn } = UserAuth()
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
//     setHidePassword(!hidePassword)
//   }

//   return (
//     <>
//       <div className='w-full h-screen relative'>
//         <img
//           className='hidden sm:block absolute w-full h-full object-cover'
//           src={loginImg}
//           alt='image'
//         />
//         <div className='bg-black/60 fixed w-full h-screen'></div>
//         <div className='fixed w-full mt-[80px] px-4 py-24 z-50'>
//           <div className='max-w-[450px] h-[70vh] mx-auto bg-black/70 text-white'>
//             <div className='max-w-[320px] mx-auto py-[100px]'>
//               <h1 className='text-3xl font-bold'>Sign In</h1>
//               {error ? (
//                 <p className='p-3 text-2xl bg-red-500 my-4 mt-6 rounded-sm'>
//                   {error}
//                 </p>
//               ) : null}
//               <form
//                 onSubmit={handleSubmit}
//                 className='w-full flex flex-col py-4'
//               >
//                 <input
//                   onChange={(e) => setEmail(e.target.value)}
//                   className='p-7 my-2 text-2xl bg-gray-600'
//                   type='email'
//                   placeholder='Email'
//                 />
//                 <div className='relative'>
//                   <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     className='p-7 w-full my-2 text-2xl bg-gray-600'
//                     type='password'
//                     placeholder='Password'
//                   />
               
//                   {hidePassword ? (
//                     <IoMdEyeOff
//                       className='absolute top-9 right-5 cursor-pointer text-[20px]'
//                       onClick={hidePasswordFunc}
//                     />
//                   ) : (
//                     <IoMdEye
//                       className='absolute top-9 right-5 cursor-pointer text-[20px]'
//                       onClick={hidePasswordFunc}
//                     />
//                   )}
//                 </div>
//                 <button className='bg-red-600 py-3 text-[20px] my-6 rounded font-bold'>
//                   Sign In
//                 </button>
//                 <div className='flex justify-between items-center text-2xl text-gray-600'>
//                   <p className='text-[12px]'>
//                     <input className='mr-2 w-7' type='checkbox' />
//                     Remember me
//                   </p>
//                   <p className='text-[12px] cursor-pointer'>Need Help?</p>
//                 </div>
//                 <p className='mt-5'>
//                   <span className='text-gray-600 mr-2 text-[12px]'>
//                     Don't have an account?
//                   </span>
//                   <a className='text-[12px] my-4 cursor-pointer' href='/login'>
//                     Sign Up
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login


