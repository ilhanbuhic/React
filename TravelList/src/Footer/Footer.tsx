import React from 'react'

interface Item {
  description: string
  quantity: number
  packed: boolean
  id: number
}

interface PackingListProp {
  items: Item[]
}

function Footer({ items }: PackingListProp) {
  const numItems = items.length
  const numPacked = items.filter((item) => item.packed).length
  const percentagePacked =
    numItems === 0 ? 0 : Math.round((numPacked / numItems) * 100)

  return (
    <footer className='footer'>
      <em>
        {percentagePacked !== 100
          ? `💼 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentagePacked}%)`
          : `You got everything, ready to go ✈️`}
      </em>{' '}
    </footer>
  )
}

export default Footer
