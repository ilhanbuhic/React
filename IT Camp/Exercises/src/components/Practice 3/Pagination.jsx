import React from 'react'

    export const Pagination = ({
    pages,
    currentPage,
    setCurrentPage,
    scrollToTop,
    }) => {
    const pageNumber = Array.from({ length: pages }, (_, index) => index)

    return (
        <div className='pagination'>
        {pageNumber.map((page) => (
            <button
            key={page}
            onClick={() => {
                setCurrentPage(page)
                scrollToTop()
            }}
            className={page === currentPage ? 'active' : ''}
            >
            {page + 1}
            </button>
        ))}
        </div>
    )
    }
