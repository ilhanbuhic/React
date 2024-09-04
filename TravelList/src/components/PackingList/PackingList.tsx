import React from 'react'
import data from '../../data/dummyData.json'

const PackingList: React.FC = () => {
  return (
    <div className='list'>
      <ul>
        {data.map((item) => (
          <Item key={item.id} item={item} />
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
