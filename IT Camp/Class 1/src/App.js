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
  // const [numbers, setNumbers] = useState([12, 6, 35, 15, 21, 22, 30, 9, 99])
  // const [newNumber, setNewNumber] = useState("")
  // return (
  //   <div className="container">
  //     <input placeholder="Add Number" value = {newNumber} onChange={(e) => setNewNumber(e.target.value)}/>
  //     <button onClick={() => setNumbers((prev) => [...prev, +newNumber])}>Add number</button>
  //   </div>
  // )

  // #3
    // const [me, setMe] = useState({
    //   firstName: "Ilhan",
    //   lastName: "Buhic",
    // })
    // console.log(me)
    // // {console.log(me, setMe)}
    // return <input type="text" value={me.lastName} onChange={(e) => setMe({...me, lastName: e.target.value})}/>

  // #1 Home exercise
    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    // const [author, setAuthor] = useState('')

    // return (
    //   <div className="create">
    //     <h2>Add a new blog</h2>
    //     <form>
    //       <label>Blog Title:</label>
    //       <input 
    //       type = 'text'
    //       required
    //       value = {title}
    //       onChange={(e) => setTitle(e.target.value)}
    //       />
    //       <label>Blog Body:</label>
    //       <textarea 
    //       required
    //       value = {body}
    //       onChange={(e) => setBody(e.target.value)}
    //       ></textarea>
    //       <label>Blog author:</label>
    //       <select 
    //       value = {author}
    //       onChange={(e) => setAuthor(e.target.value)}>
    //         <option value = 'ilhan' >Ilhan</option>
    //         <option value = 'emina'>Emina</option>
    //       </select>
    //       <button>Add blog</button>
    //     </form>
    //   </div>
    // )

    // #Homework

    const handleSubmit = (e) => {
      e.preventDefault()
      const obj = {
        Name: firstName,
        lastName: lastName,
        birthYear: birthYear
      }
      const objArr = []
      objArr.push(obj)
      console.log(obj, objArr)
    }

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthYear, setBirthYear] = useState('')

    return (
      <div className="container">
        <form >
        <input type = "text" value = {firstName} onChange = {((e) => setFirstName(e.target.value))} placeholder="First name"/>
        <input type = "text" value = {lastName} onChange = {((e) => setLastName(e.target.value))} placeholder="Last name"/>
        <input type = "text" value = {birthYear} onChange = {((e) => setBirthYear(e.target.value))} placeholder="Birth year"/>
        <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>

    )
}

export default App
