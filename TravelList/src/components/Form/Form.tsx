import React, { FormEvent, useState } from 'react'

interface Item {
  description: string
  quantity: number
  packed: boolean
  id: number
}

interface FormProp {
  onAddItems: (item: Item) => void
}

function Form({ onAddItems }: FormProp) {
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (!description) return

    const newItem: Item = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    }
    onAddItems(newItem)

    setDescription('')
    setQuantity(1)
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value))
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
        }}
      />
      <button>Add</button>
    </form>
  )
}

export default Form
