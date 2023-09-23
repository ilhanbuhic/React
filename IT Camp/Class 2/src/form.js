import React, { useEffect, useState } from "react"
import "./form.css"

function Form() {
  // const [users, setUsers] = useState([])
  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   birthYear: 0,
  //   profession: "",
  // })

  // return (
  //   <div className="main">
  //     <input
  //       placeholder="First name"
  //       value={user.firstName}
  //       onChange={(e) => setUser({ ...user, firstName: e.target.value })}
  //     />
  //     <input
  //       placeholder="Last name"
  //       value={user.lastName}
  //       onChange={(e) => setUser({ ...user, lastName: e.target.value })}
  //     />
  //     <input
  //       placeholder="Birth year"
  //       value={user.birthYear}
  //       onChange={(e) => setUser({ ...user, birthYear: e.target.value })}
  //     />
  //     <input
  //       placeholder="Profession"
  //       value={user.profession}
  //       onChange={(e) => setUser({ ...user, profession: e.target.value })}
  //     />
  //     <button
  //       onClick={() => {
  //         setUsers((prev) => [...prev, user])
  //         setUser({
  //           firstName: "",
  //           lastName: "",
  //           birthYear: 0,
  //           profession: "",
  //         })
  //         {
  //           console.log(
  //             user.firstName,
  //             user.lastName,
  //             user.birthYear,
  //             user.profession
  //           )
  //         }
  //       }}
  //     >
  //       Submit
  //     </button>

  //     {users.map((user, index) => {
  //       return (
  //         <div key={index} style={{ textAlign: "center", color: "white" }}>
  //           <p>{user.firstName}</p>
  //           <p>{user.lastName}</p>
  //           <p>{user.birthYear}</p>
  //           <p>{user.profession}</p>
  //         </div>
  //       )
  //     })}
  //   </div>
  // )

  //#Homework
  const [ilhan, setIlhan] = useState({
    firstLastName: "",
    years: 0,
    placeOfBirth: "",
    educationDegree: "",
    profession: "",
    hobby: "",
    relationshipStatus: [],
  })

  return (
    <div className="container">
      <input
        placeholder="First and last name"
        value={ilhan.firstLastName}
        onChange={(e) => 
        setIlhan({ ...ilhan, firstLastName: e.target.value })}
      />
     <input 
     placeholder="Years"
     value = {ilhan.years}
     onChange={(e) => 
      setIlhan({...ilhan, years: parseInt(e.target.value) || 0})}
     />
     <input 
     placeholder="Place of Birth"
     value = {ilhan.placeOfBirth}
     onChange={(e) => setIlhan({...ilhan, placeOfBirth: e.target.value})}
     />
     <select
     value = {ilhan.educationDegree}
     onChange={(e) => setIlhan({...ilhan, educationDegree: e.target.value})}
     >
      <option value = 'option1'selected >Primary school</option>
      <option value = 'option2'>High school</option>
      <option value = 'option3'>Currently a student</option>
      <option value = 'option4'>Bachelor's degree</option>
     </select>

     <button
     onClick = {() => {console.log(ilhan)}}
     >Submit</button>
    </div>
  )
}

export default Form
