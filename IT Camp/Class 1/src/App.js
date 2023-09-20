import "./App.css"
import { useState } from "react"

function App() {
  // #1
  // const [firstString, setFirstString] = useState("")
  // const [secondString, setSecondString] = useState("")
  // const [thirdString, setThirdString] = useState("")
  // const [forthString, setForthString] = useState("")
  // return (
  //   <div className="output">
  //     <button onClick={() => setFirstString((prev) => prev + "ovo")}>
  //       First String
  //     </button>
  //     <button onClick={() => setSecondString((prev) => prev + "je")}>
  //       Second String
  //     </button>
  //     <button onClick={() => setThirdString((prev) => prev + "IT")}>
  //       Third String
  //     </button>
  //     <button onClick={() => setForthString((prev) => prev + "Kamp")}>
  //       Forth String
  //     </button>
  //     <div className="first">{firstString}</div>
  //     <div className="second">{secondString}</div>
  //     <div className="third">{thirdString}</div>
  //     <div className="forth">{forthString}</div>
  //   </div>
  // )
  
  // #2
  // const [name, setName] = useState("Ilhan")
  // const [numbers, setNumbers] = useState([12, 6, 35, 15, 21, 22, 30, 9, 99])
  // const [newNumber, setNewNumber] = useState("")
  // return (
  //   <div className="container">
  //     {<input type="text" value={name} onChange={(e) => setName(e.target.value)} />}
  //     <button onClick={() => alert(`Hello ${name}`)}>Hello</button>
  //     <input placeholder="Add Number" vlaue = {newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
  //     <button onClick={() => setNumbers((prev) => [...prev, +newNumber])}>Add number</button>
  //     {console.log(numbers)}
  //   </div>
  // )
}

export default App
