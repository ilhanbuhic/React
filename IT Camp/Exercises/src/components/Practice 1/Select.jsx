import { useState } from 'react'

export const Select = ({ data }) => {
  return (
    <>
      {!data.length ? null : (
        <div className='selectContainer'>
          <select name='' id=''>
            <option value='all'>All items</option>
            {data?.map((item) => {
              return <option value={item.title}>{item.title}</option>
            })}
          </select>
        </div>
      )}
    </>
  )
}
