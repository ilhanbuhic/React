import React from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import '../HomePage-Carousel/HomePage-Carousel.scss' // Import your local stylesheet

const HomePageCarousel = () => {
  const handleNextClick = () => {
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide')?.appendChild(lists[0])
  }

  const handlePrevClick = () => {
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide')?.prepend(lists[lists.length - 1])
  }

  return (
    <div className='container'>
      <div id='slide'>
        <div className='item' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1682685797365-6f57bbebffed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className='content'>
            <div className='name'>LUNDEV</div>
            <div className='des'>
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1699116245651-45d3cd9b7de3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className='content'>
            <div className='name'>LUNDEV</div>
            <div className='des'>
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
    
  )
}

export default HomePageCarousel