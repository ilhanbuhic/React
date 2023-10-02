import { useState } from 'react'

export default function MeSetter() {
  const [me, setMe] = useState({
    firstName: 'Ilhan',
    lastName: 'Buhic',
  })
  {
    console.log(me)
  }
  return (
    <input
      type='text'
      value={me.lastName}
      onChange={(e) => setMe({ ...me, lastName: e.target.value })}
    />
  )
}
