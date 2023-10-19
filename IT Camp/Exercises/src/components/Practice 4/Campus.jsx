import React from 'react'
import './CSS/campus.css'

function Campus() {
  const campusCol = [
    { img: './eduford_img/img/london.png', alt: 'London' },
    { img: './eduford_img/img/newyork.png', alt: 'Newyork' },
    { img: './eduford_img/img/washington.png', alt: 'Washington' },
  ]

  const campusLayer = [
    { title: 'LONDON' },
    { title: 'NEW YORK' },
    { title: 'WASHINGTON' },
  ]

  return (
    <section className='campus' id='campus'>
      <h1>Our Global Campus</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, in?</p>
      <div className='row'>
        {campusCol.map((link, index) => (
          <div key={index} className='campus-col'>
            <img src={link.img} alt={link.alt} />
            {campusLayer.map((link, index) => (
              <div key={index} className='layer'>
                <h3>{link.title}</h3>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Campus
