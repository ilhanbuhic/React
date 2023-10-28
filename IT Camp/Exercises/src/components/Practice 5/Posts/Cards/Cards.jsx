import React, { useState, useEffect } from 'react'
import { Post } from '../Posts/Post'
import { Pagination } from '../Pagination/Pagination'
import '../../.env/STATIC_LINK'
import '../Cards/Cards.css'
import '../Pagination/Pagination.css'
import '../Posts/Post.css'
import './ScrollDownArrow.css'
import useScroll from '../../../../hooks/useScroll'
import { STATIC_LINK } from '../../.env/STATIC_LINK'

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
    fetch(`${STATIC_LINK}/posts?select=title,reactions,userId`)
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(data?.total / PAGES_COEFFICIENT)
      })

    // Fetching the data for the current page
    fetch(
      `${STATIC_LINK}/posts?limit=${PAGES_COEFFICIENT}&skip=${String(
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
      <h1 style={{ fontSize: '3.2rem' }}>Ilhan Posts</h1>
      {showArrow && (
        <div
          style={{ marginTop: '130px' }}
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
          defaultData?.map((post, index) => <Post key={index} post={post} />)
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
