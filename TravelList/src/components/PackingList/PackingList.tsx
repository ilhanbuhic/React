import React from 'react'

interface Item {
  description: string
  quantity: number
  packed: boolean
  id: number
}

interface PackingListProp {
  items: Item[]
  onDeleteItem: (id: number) => void
}

const PackingList: React.FC<PackingListProp> = ({ items, onDeleteItem }) => {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <ItemComponent
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </ul>
    </div>
  )
}

const ItemComponent: React.FC<{
  item: Item
  onDeleteItem: (id: number) => void
}> = ({ item, onDeleteItem }) => {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default PackingList
