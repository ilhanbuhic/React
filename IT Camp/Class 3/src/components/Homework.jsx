import { useState } from 'react'

export default function HomeWork() {
  const [randomnumber, setRandomNumber] = useState(0)
  const [div, setDiv] = useState('')
  function handler() {
    let broj = Math.floor(Math.random() * (24 - -36 + 1)) + -36
    setRandomNumber(broj)
  }
  return (
    <div className='container'>
      <div
        style={{
          backgroundColor:
            randomnumber > -36 && randomnumber < -20
              ? 'darkblue'
              : randomnumber && randomnumber > -20 && randomnumber < 4
              ? 'yellow'
              : randomnumber && randomnumber > 4 && randomnumber < 24
              ? 'green'
              : randomnumber,
        }}
        className='main'
      >
        {randomnumber}
        <button onClick={handler}>Random Number</button>
      </div>
    </div>
  )
}
