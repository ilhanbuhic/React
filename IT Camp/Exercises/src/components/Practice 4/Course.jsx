import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './CSS/course.css'

function Course() {
  const courses = [
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
    <section class='course' id='course'>
      <h1>Course We Offer</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, in?</p>
      <div class='row'>
        {courses.map((course, index) => (
          <div className='course-col' key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Course
