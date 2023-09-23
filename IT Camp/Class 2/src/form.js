import React, { useEffect, useState } from "react"
import "./form.css"

function Form() {
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    birthYear: 0,
    profession: "",
  })

  return (
    <div className="main">
      <input
        placeholder="First name"
        value = {user.firstName}
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <input
        placeholder="Last name"
        value = {user.lastName}
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <input
        placeholder="Birth year"
        value = {user.birthYear}
        onChange={(e) => setUser({ ...user, birthYear: e.target.value })}
      />
      <input
        placeholder="Profession"
        value = {user.profession}
        onChange={(e) => setUser({ ...user, profession: e.target.value })}
      />
      <button
        onClick={() => {
          setUsers((prev) => [...prev, user])
          setUser({
            firstName: "",
            lastName: "",
            birthYear: "",
            profession: "",
          })
        }}
      >
        Submit
      </button>
      {console.log(user.firstName, user.lastName, user.birthYear, user.profession)}

      {users.map((user, index) => {
        return (
          <div key={index} style={{ textAlign: "center", color: "white" }}>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.birthYear}</p>
            <p>{user.profession}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Form
