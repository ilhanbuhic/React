import React from 'react'
import '../Banner/Banner.css'

export const Banner = () => {
  const htmlContent = 'Stay Informed, Stay Connected'
  return (
    <div className='banner-container'>
      <div className='image-container'>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    </div>
  )
}
export default Banner
