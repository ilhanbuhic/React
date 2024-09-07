import React, { useState } from 'react'

interface Item {
  description: string
  quantity: number
  packed: boolean
  id: number
}

interface PackingListProp {
  items: Item[]
  onDeleteItem: (id: number) => void
  onTogglePacked: (id: number) => void
}

const PackingList: React.FC<PackingListProp> = ({
  items,
  onDeleteItem,
  onTogglePacked,
}) => {
  const [sortBy, setSortBy] = useState('input')

  let sortedItems

  if (sortBy === 'input') sortedItems = items
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description))
  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed))

  return (
    <div className='list'>
      <ul>
        {sortedItems?.map((item) => (
          <ItemComponent
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className='action'>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
      </div>
    </div>
  )
}

const ItemComponent: React.FC<{
  item: Item
  onDeleteItem: (id: number) => void
  onTogglePacked: (id: number) => void
}> = ({ item, onDeleteItem, onTogglePacked }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={item.packed}
        onChange={() => onTogglePacked(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default PackingList
