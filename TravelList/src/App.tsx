import React, { useState } from 'react'
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import PackingList from './components/PackingList/PackingList'
import Footer from './Footer/Footer'

interface Item {
  description: string
  quantity: number
  packed: boolean
  id: number
}

function App() {
  const [items, setItems] = useState<Item[]>([])

  function handleAddItems(item: Item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className='app'>
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} />
      <Footer />
    </div>
  )
}

export default App
