import React, { useEffect, useState } from 'react'
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from 'react-icons/hi'
import './HomePage-Carousel.scss'
// import data from '../data/products.json'
import axios from 'axios'

const HomePageCarousel = () => {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    const getJSON = async () => {
      const json = await axios.get('http://localhost:3001/json')
      setData(json.data)
    }
    getJSON()
  }, [])

  interface JsonData {
    imageURL: string
    title: string
    description: string
  }

  const handleNextClick = () => {
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide')?.appendChild(lists[0])
    console.log(lists)
  }

  const handlePrevClick = () => {
    let lists = document.querySelectorAll('.item')
    document.getElementById('slide')?.prepend(lists[lists.length - 1])
    console.log(lists)
  }

  return (
    <div className='carousel-container bg-secondary'>
      <div className='container bg-secondary'>
        <div id='slide'>
          {data?.map((item: JsonData, index: number) => (
            <div
              key={index}
              className='item'
              // style={{ backgroundImage: `url(${item.imageURL})` }}
              style={{
                backgroundImage: `url(${item.imageURL})`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
              }}
            >
              <div className='content'>
                <div className='name'>{item.title}</div>
                <div className='des'>{item.description}</div>
                {/* <button>See more</button> */}
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
