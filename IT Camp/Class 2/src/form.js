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
  //     {console.log(users)}

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
    educationDegree: "Primary school",
    profession: "",
    hobby: "",
    relationshipStatus: 'Yes'
  })

  // ***** Handling Select Change *****
  // State to store the selected option's text content
  const [_, setSelectedOptionText] = useState("")

  // Function to handle changes in the select element
  const handleSelectChange = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]
    setSelectedOptionText(selectedOption.textContent)
    setIlhan({ ...ilhan, [e.target.name]: selectedOption.textContent })
  }
  // ***** Handling Select Change *****

  const handleSubmit = (e) => {
    setIlhan({ ...ilhan, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
      <input
        placeholder="First and last name"
        value={ilhan.firstLastName}
        name="firstLastName"
        // onChange={(e) => setIlhan({ ...ilhan, firstLastName: e.target.value })}
        onChange={handleSubmit}
      />
      <input
        placeholder="Years"
        value={ilhan.years}
        name="years"
        // onChange={(e) =>
        // setIlhan({ ...ilhan, years: parseInt(e.target.value) || 0 })
        // }
        onChange={handleSubmit || 0}
      />
      <input
        placeholder="Place of Birth"
        value={ilhan.placeOfBirth}
        name="placeOfBirth"
        // onChange={(e) => setIlhan({ ...ilhan, placeOfBirth: e.target.value })}
        onChange={handleSubmit}
      />
      <select
        value={ilhan.educationDegree}
        name="educationDegree"
        // onChange={(e) =>
        //   setIlhan({
        //     ...ilhan,
        //     educationDegree:
        //       e.target.options[e.target.selectedIndex].textContent,
        //   })
        // }
        onChange={handleSelectChange}
      >
        <option value="option1">Primary school</option>
        <option value="option2">High school</option>
        <option value="option3">Currently a student</option>
        <option value="option4">Bachelor's degree</option>
      </select>

      <input 
      placeholder="Profession"
      value={ilhan.profession}
      name="profession"
      onChange={handleSubmit}
      />
      <input 
      placeholder="Hobby"
      value={ilhan.hobby}
      name="hobby"
      onChange={handleSubmit}
      />
      <select
      value={ilhan.relationshipStatus}
      name="relationshipStatus"
      onChange={handleSelectChange}
      >
        <option value="option1">Yes</option>
        <option value="option1">No</option>
        <option value="option1">Maybe</option>
      </select>

      <button
        onClick={() => {
          console.log(ilhan)
        }}
      >
        Submit
      </button>
    </div>
  )
}

export default Form
