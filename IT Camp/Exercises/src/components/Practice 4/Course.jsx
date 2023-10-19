import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './CSS/course.css'

function Course() {
  const courseData = [
    {
      title: 'Intermediate',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure iste officiis eius, doloribus facilis provident debitis architecto placeat corporis!',
    },
    {
      title: 'Degree',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure iste officiis eius, doloribus facilis provident debitis architecto placeat corporis!',
    },
    {
      title: 'Post Graduation',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure iste officiis eius, doloribus facilis provident debitis architecto placeat corporis!',
    },
  ]

  return (
    <section className='course' id='course'>
      <h1>Course We Offer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, in?</p>
      <div class='row'>
        {courseData.map((data, index) => (
          <div className='course-col' key={index}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Course
