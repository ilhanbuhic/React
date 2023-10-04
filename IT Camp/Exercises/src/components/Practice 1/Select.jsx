import { useState } from 'react'

export const Select = ({ data }) => {
  // const [selectedOption, setSelectedOption] = useState('')

  // const handleSelectChange = (e) => {
  //     const newValue = e.target.value
  //     selectedOption(newValue)
  // }

  return (
    <>
      {!data.length ? null : (
        <div className='selectContainer'>
          <select
            onChange={(e) => {
              {
                console.log(e.target.value)
              }
              {
                data?.map((item) => {
                  return e.target.value === item.title ? <option value={item.title}>{item.title}</option> : null
                })
              }
            }}
            name=''
            id=''
          >
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