import "./App.css"
import React, { useState } from 'react';

function App() {

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
