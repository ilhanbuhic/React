import React from 'react'
import './CSS/campus.css'

function Campus() {
  const campusData = [
    { imgSrc: './eduford_img/img/london.png', imgAlt: 'London' },
    { imgSrc: './eduford_img/img/newyork.png', imgAlt: 'Newyork' },
    { imgSrc: './eduford_img/img/washington.png', imgAlt: 'Washington' },
  ]

  const campusTitles = [
    { title: 'LONDON' },
    { title: 'NEW YORK' },
    { title: 'WASHINGTON' },
  ]

  return (
    <section className='campus' id='campus'>
      <h1>Our Global Campus</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, in?</p>
      <div className='row'>
        {campusData.map((data, index) => (
          <div key={index} className='campus-col'>
            <img src={data.imgSrc} alt={data.imgAlt} />
            {campusTitles.map((data, index) => (
              <div key={index} className='layer'>
                <h3>{data.title}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Campus
