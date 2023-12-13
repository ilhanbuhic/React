import React from 'react'

const SignUp = () => {
  return (
    <>
      <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/7e44df74-b1b2-4de5-9b5e-2991922160d2/RS-en-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg'
          alt='image'
        />
        <div className='bg-black/60 fixed top-25 left-0 w-full h-screen'></div>
          <div className='fixed w-full mt-20 px-4 py24 z-50'>
            <div className='max-w-[450px] h-[700px] mx-auto bg-black/75 text-white'>
              <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>Sign Up</h1>
                
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default SignUp
