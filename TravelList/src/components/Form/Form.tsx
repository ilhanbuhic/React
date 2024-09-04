import React, { FormEvent, useState } from 'react'

interface Item {
  description: string
  quantity: number
  packed: boolean
  id: number
}

function Form() {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [items, setItems] = useState<Item[]>([])

  function handleAddItems(item: Item) {
    setQuantity((items) => [...items, item])
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!description) return

    const newItem = {
      description,
      quantity,
      packed: false,
      id: items.length + 1,
    }
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value))
          console.log(quantity)
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type='text'
        placeholder='Item...'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
          console.log(description)
        }}
      />
      <button>Add</button>
    </form>
  )
}

export default Form
