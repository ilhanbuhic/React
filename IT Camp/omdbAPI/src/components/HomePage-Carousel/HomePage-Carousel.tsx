import React, { useEffect } from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import './HomePage-Carousel.scss'
import data from '../data/products.json'
import axios from 'axios'

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
    <div className='carousel-container bg-secondary'>
      <div className='container bg-secondary'>
        <div id='slide'>
        {data.map((item, index) => (
        <div key={index} className='item' style={{ backgroundImage: `url(${item.imageURL})` }}>
          <div className='content'>
            <div className='name'>{item.title}</div>
            <div className='des'>{item.description}</div>
            <button>See more</button>
          </div>
        </div>
      ))}
        </div>
        <div className='buttons flex justify-center gap-2'>
          <button id='prev' onClick={handlePrevClick}>
            <HiOutlineArrowSmLeft
              style={{
                fontSize: 25,
                color: 'white',
                margin: '0 auto',
              }}
            />
          </button>
          <button id='next' onClick={handleNextClick}>
            <HiOutlineArrowSmRight
              style={{
                fontSize: 25,
                color: 'white',
                margin: '0 auto',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePageCarousel
