import React from 'react'
import data from '../../data/dummyData.json'

type Props = {}

const PackingList = (props: Props) => {
  return (
    <div className='list'>
      <ul>
        {data.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </ul>
    </div>
  )
}

function Item({ item }: any) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}

export default PackingList
