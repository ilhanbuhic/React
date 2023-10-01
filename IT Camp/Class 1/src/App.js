import "./App.css"
import React, { useState } from 'react';

function App() {


 

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
