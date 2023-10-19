import React from 'react'
import './CSS/facilities.css'

function Facilities() {
  const facilitiesData = [
    {
      imgSrc: './eduford_img/img/library.png',
      imgAlt: 'World Class Library',
      title: 'World Class Library',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nobis, ad ea inventore praesentium porro?',
    },
    {
      imgSrc: './eduford_img/img/basketball.png',
      imgAlt: 'Largest Play Ground',
      title: 'Largest Play Ground',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nobis, ad ea inventore praesentium porro?',
    },
    {
      imgSrc: './eduford_img/img/cafeteria.png',
      imgAlt: 'Tasty and Healthy Food',
      title: 'Tasty and Healthy Food',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem nobis, ad ea inventore praesentium porro?',
    },
  ]

  return (
    <section className='facilities' id='facilities'>
      <h1>Our Global Campus</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, in?</p>
      <div className='row'>
        {facilitiesData?.map((data, index) => (
          <div key={index} className='facilities-col'>
            <img src={data.imgSrc} alt={data.imgAlt} />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Facilities
