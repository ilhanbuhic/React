import React from 'react'
import './CSS/testemonials.css'

function Testemonials() {
  const testemonialData = [
    {
      imgSrc: './eduford_img/img/user1.jpg',
      imgAlt: 'User 1',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullafugiat odit ipsa ea quas? Aliquid saepe corporis voluptatevoluptates id.',
      user: 'Christine Berkley',
      icon1: 'fas fa-star',
    },
    {
      imgSrc: './eduford_img/img/user1.jpg',
      imgAlt: 'User 1',
      comment:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nullafugiat odit ipsa ea quas? Aliquid saepe corporis voluptatevoluptates id.',
      user: 'David Byer',
      icon1: 'fas fa-star',
      icon2: 'fas fa-star-half-alt',
    },
  ]

  return (
    <section className='testemonials'>
      <h3>What Our Students Say</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, in?</p>
      <div className='row'>
        <div className='testemonials-col'>
          <img src='./eduford_img/img/user1.jpg' alt='User 1' />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              fugiat odit ipsa ea quas? Aliquid saepe corporis voluptate
              voluptates id.
            </p>
            <h3>Christine Berkley</h3>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='far fa-star'></i>
          </div>
        </div>
        <div className='testemonials-col'>
          <img src='./eduford_img/img/user2.jpg' alt='User 2' />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              fugiat odit ipsa ea quas? Aliquid saepe corporis voluptate
              voluptates id.
            </p>
            <h3>David Byer</h3>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star'></i>
            <i className='fas fa-star-half-alt'></i>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testemonials
