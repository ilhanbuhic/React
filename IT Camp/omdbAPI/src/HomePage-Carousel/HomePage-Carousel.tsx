import React, { useEffect } from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import '../HomePage-Carousel/HomePage-Carousel.scss'
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
          <div
            className='item'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1682685797365-6f57bbebffed?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
          >
            <div className='content'>
              <div className='name'>LUNDEV</div>
              <div className='des'>
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div
            className='item'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1699116245651-45d3cd9b7de3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
          >
            <div className='content'>
              <div className='name'>LUNDEV</div>
              <div className='des'>
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div
            className='item'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1694111356884-45781a164220?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
          >
            <div className='content'>
              <div className='name'>LUNDEV</div>
              <div className='des'>
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div
            className='item'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1699247193226-c9c5a7717013?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
          >
            <div className='content'>
              <div className='name'>LUNDEV</div>
              <div className='des'>
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div
            className='item'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1699265273248-e5d3fa223ed4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
          >
            <div className='content'>
              <div className='name'>LUNDEV</div>
              <div className='des'>
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
          <div
            className='item'
            style={{
              backgroundImage:
                'url(https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
            }}
          >
            <div className='content'>
              <div className='name'>LUNDEV</div>
              <div className='des'>
                Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
              </div>
              <button>See more</button>
            </div>
          </div>
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
