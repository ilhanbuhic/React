import React from 'react'
import '../MonsterHunt/monsterhunt.scss'
const bg = require('../../assets/images/bg.jpg')
const dust = require('../../assets/images/dust.webp')
const foregroundBack = require('../../assets/images/foreground-back.webp')
const foregroundFront = require('../../assets/images/foreground-front.webp')
const jax = require('../../assets/images/jax.webp')
const luna = require('../../assets/images/luna.webp')
const manny = require('../../assets/images/manny.webp')
const rays = require('../../assets/images/rays.webp')

function MonsterHunt() {
  const scrollSpeed = 0.1

  function handleScroll(event: { preventDefault: () => void; deltaY: number }) {
    event.preventDefault()

    const delta = event.deltaY * scrollSpeed
    window.scrollBy(0, delta)
  }

  document.addEventListener('wheel', handleScroll)

  return (
    <body>
      <div className='parallax'>
        <header className='primary-header'></header>
        <div className='hero'>
          <div className='wrapper'>
            <h1 className='hero__title'>
              <span>Gear up!</span> We're going monster hunting!
            </h1>
          </div>
        </div>

        <img className='parallax__bg' src={bg} alt='' />
        <img className='parallax__dust' src={dust} alt='' />
        <img
          className='parallax__foreground-back'
          src={foregroundBack}
          alt=''
        />
        <img
          className='parallax__foreground-front'
          src={foregroundFront}
          alt=''
        />
        <img className='parallax__jax' src={jax} alt='' />
        <img className='parallax__luna' src={luna} alt='' />
        <img className='parallax__manny' src={manny} alt='' />
        <img className='parallax__rays' src={rays} alt='' />
      </div>

      <main className='main-content'>
        <div className='wrapper'></div>
      </main>
    </body>
  )
}

export default MonsterHunt
