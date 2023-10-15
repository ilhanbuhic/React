import React, { useState, useEffect } from 'react'
import Posts from './Posts'
import { Pagination } from './Pagination'
import { handleScrollDown } from './HandleScrollDown'
import './Cards.css'
import './Pagination.css'
import './Post.css'
import './ScrollDownArrow.css'
import useScroll from '../../hooks/useScroll'

export function Cards() {
  const { showArrow, setShowArrow, scrollToBottom } = useScroll()
  const [defaultData, setDefaultData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const PAGES_COEFFICIENT = 10

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    // Fetching the total number of pages
    fetch(`https://dummyjson.com/posts?select=title,reactions,userId`)
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(data?.total / PAGES_COEFFICIENT)
      })

    // Fetching the data for the current page
    fetch(
      `https://dummyjson.com/posts?limit=${PAGES_COEFFICIENT}&skip=${String(
        currentPage * PAGES_COEFFICIENT
      )}&select=title,reactions,userId`
    )
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.posts)
      })
  }, [currentPage])

  return (
    <div className='mainContainer'>
      {showArrow && (
        <div
          className='arrowbtn arrowbtn-down'
          onClick={() => {
            scrollToBottom()
          }}
        ></div>
      )}
      <div
        className='container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '70px',
        }}
      >
        {defaultData?.length > 0 ? (
          defaultData?.map((post, index) => <Posts key={index} posts={post} />)
        ) : (
          <h1>No data</h1>
        )}
      </div>
      <Pagination
        pages={totalPages}
        currentPage={currentPage}
        scrollToTop={scrollToTop}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
