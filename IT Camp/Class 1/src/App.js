import "./App.css"
import { useState } from "react"

function App() {
  // #1
  const [firstString, setFirstString] = useState("")
  const [secondString, setSecondString] = useState("")
  const [thirdString, setThirdString] = useState("")
  const [forthString, setForthString] = useState("")

  return (
    <div className="output">
      <button onClick={() => setFirstString((prev) => prev + "ovo")}>
        First String
      </button>
      <button onClick={() => setSecondString((prev) => prev + "je")}>
        Second String
      </button>
      <button onClick={() => setThirdString((prev) => prev + "IT")}>
        Third String
      </button>
      <button onClick={() => setForthString((prev) => prev + "Kamp")}>
        Forth String
      </button>
      <div className="first">{firstString}</div>
      <div className="second">{secondString}</div>
      <div className="third">{thirdString}</div>
      <div className="forth">{forthString}</div>
    </div>
  )
}

export default App
