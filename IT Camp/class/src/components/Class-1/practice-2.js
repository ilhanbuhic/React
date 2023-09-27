import { useState } from "react"

export default function AddingNumber() {
  const [numbers, setNumbers] = useState([12, 6, 35])
  const [newNumber, setNewNumber] = useState("")
  return (
    <div className="container">
      <input
        placeholder="Add Number"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      />
      <button onClick={() => setNumbers((prev) => [...prev, +newNumber],
        setNewNumber('')
        )}>
        Add number
      </button>
      <p>{numbers.join(", ")}</p>
    </div>
  )
}
