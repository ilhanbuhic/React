import React, { useState, useEffect } from 'react'
import Posts from './Posts'
import { Pagination } from './Pagination'
import "./Cards.css"
import "./Pagination.css"
import "./Post.css"

export function Cards() {
  const [defaultData, setDefaultData] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const PAGES_COEFFICITENT = 10

  useEffect(() => {
    // Fetching the total number of pages
    fetch(`https://dummyjson.com/posts?select=title,reactions,userId`)
      .then((res) => res.json())
      .then((data) => {
        setTotalPages(data?.total / PAGES_COEFFICITENT)
      })

    // Fetching the data for the current page
    fetch(
      `https://dummyjson.com/posts?limit=${PAGES_COEFFICITENT}&skip=${String(
        currentPage * PAGES_COEFFICITENT
      )}&select=title,reactions,userId`
    )
      .then((res) => res.json())
      .then((data) => {
        setDefaultData(data?.posts)
      })
  }, [currentPage])

  return (
    <div className='mainContainer'>
      <div
        className='container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
