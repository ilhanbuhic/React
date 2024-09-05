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
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <ItemComponent
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
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
