import { useState } from 'react'

export default function AboutMeForm() {
  const [ilhan, setIlhan] = useState({
    firstName: '',
    lastName: '',
    years: 0,
    placeOfBirth: '',
    educationDegree: 'Primary school',
    profession: '',
    hobby: '',
    relationshipStatus: 'Yes',
  })

  const [showUserDiv, setshowUserDiv] = useState(false)
  const [hideForm, setHideForm] = useState('flex')

  // State to store the selected option's text content
  const [selectedOptionText, setSelectedOptionText] = useState('')

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
    <>
      <div style={{ display: `${hideForm}` }} className='container'>
        <input
          type='text'
          placeholder='First name'
          value={ilhan.firstName}
          name='firstName'
          // onChange={(e) => setIlhan({ ...ilhan, firstLastName: e.target.value })}
          onChange={handleSubmit}
        />
        <input
          type='text'
          placeholder='Last name'
          value={ilhan.lastName}
          name='lastName'
          // onChange={(e) => setIlhan({ ...ilhan, firstLastName: e.target.value })}
          onChange={handleSubmit}
        />
        <input
          type='text'
          placeholder='Years'
          value={ilhan.years}
          name='years'
          // onChange={(e) =>
          // setIlhan({ ...ilhan, years: parseInt(e.target.value) || 0 })
          // }
          onChange={handleSubmit || 0}
        />
        <input
          type='text'
          placeholder='Place of Birth'
          value={ilhan.placeOfBirth}
          name='placeOfBirth'
          // onChange={(e) => setIlhan({ ...ilhan, placeOfBirth: e.target.value })}
          onChange={handleSubmit}
        />
        <select
          type='text'
          // value={ilhan.educationDegree}
          name='educationDegree'
          // onChange={(e) =>
          //   setIlhan({
          //     ...ilhan,
          //     educationDegree:
          //       e.target.options[e.target.selectedIndex].textContent,
          //   })
          // }
          onChange={handleSelectChange}
        >
          <option value='option1'>Primary school</option>
          <option value='option2'>High school</option>
          <option value='option3'>Currently a student</option>
          <option value='option4'>Bachelor's degree</option>
        </select>

        <input
          type='text'
          placeholder='Profession'
          value={ilhan.profession}
          name='profession'
          onChange={handleSubmit}
        />
        <input
          type='text'
          placeholder='Hobby'
          value={ilhan.hobby}
          name='hobby'
          onChange={handleSubmit}
        />
        <select
          type='text'
          // value={ilhan.relationshipStatus}
          name='relationshipStatus'
          onChange={handleSelectChange}
        >
          <option value='option1'>Yes</option>
          <option value='option1'>No</option>
          <option value='option1'>Maybe</option>
        </select>

        <button
          onClick={() => {
            setshowUserDiv(true)
            setHideForm('none')
          }}
        >
          Submit
        </button>
      </div>
      {showUserDiv && (
        <div
          style={{ display: `${hideForm == 'flex' ? 'none' : 'flex'}` }}
          className='ilhan'
        >
          <p>{ilhan.firstName}</p>
          <p>{ilhan.lastName}</p>
          <p>{ilhan.years}</p>
          <p>{ilhan.placeOfBirth}</p>
          <p>{ilhan.educationDegree}</p>
          <p>{ilhan.profession}</p>
          <p>{ilhan.hobby}</p>
          <p>{ilhan.relationshipStatus}</p>
          <button
            style={{ width: '80%' }}
            className='back'
            onClick={() => {
              setHideForm('flex')
            }}
          >
            Go back
          </button>
        </div>
      )}
    </>
  )
}
