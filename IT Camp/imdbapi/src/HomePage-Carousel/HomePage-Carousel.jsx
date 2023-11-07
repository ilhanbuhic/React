import React from 'react'
import '../HomePage-Carousel/HomePage-Carousel.scss'

const HomePageCarousel = () => {
  document.getElementById('next').onclick = function () {
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide').appendChild(lists[0])
  }
  document.getElementById('prev').onclick = function () {
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide').prepend(lists[lists.length - 1])
  }

  return (
    <div className='container'>
      <div id='slide'>
        <div className='item' style={{ backgroundImage: 'url(1.jpg)' }}>
          <div className='content'>
            <div className='name'>LUNDEV</div>
            <div className='des'>
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: 'url(4.jpg)' }}>
          <div className='content'>
            <div className='name'>LUNDEV</div>
            <div className='des'>
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: 'url(3.jpg)' }}>
          <div className='content'>
            <div className='name'>LUNDEV</div>
            <div className='des'>
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: 'url(4.jpg)' }}>
          <div className='content'>
            <div className='name'>LUNDEV</div>
            <div className='des'>
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: 'url(5.jpg)' }}>
          <div className='content'>
            <div className='name'>LUNDEV</div>
            <div className='des'>
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
        <div className='item' style={{ backgroundImage: 'url(6.jpg)' }}>
          <div className='content'>
            <div className='name'>LUNDEV</div>
            <div className='des'>
              Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu
            </div>
            <button>See more</button>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <button id='prev'>
          <i className='fa-solid fa-angle-left'></i>
        </button>
        <button id='next'>
          <i className='fa-solid fa-angle-right'></i>
        </button>
      </div>
    </div>
  )
}

export default HomePageCarousel
