import React from 'react'
import './CSS/header.css'

function NavBar() {
  const navLinks = [
    { text: 'Home', href: '#home' },
    { text: 'Course', href: '#course' },
    { text: 'Campus', href: '#campus' },
    // { text: 'Blog', href: '#blog' },
    // { text: 'Contact', href: '#contact' },
  ]

  return (
    <header>
      <nav className='navbar'>
        <a href='#'>
          <img className='logo' src='eduford_img/img/logo.png' alt='logo' />
        </a>
        <div className='nav-links'>
          <i className='fas fa-times' id='close-menu-btn'></i>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.text}</a>
              </li>
            ))}
            <a href='#'>
              <button className='btn1'>Contact Us</button>
            </a>
          </ul>
        </div>
        <i className='fas fa-bars' id='menu-btn'></i>
      </nav>
      <div className='text-box'>
        <h1>Programming University</h1>
        <p>
          If you want to create bigger and more complex, you will need to learn
          ReactJS, Hooks, Redux, React Routing, NodeJS, and NextJS
        </p>
        <a href='#' className='btn2'>
          Visit Us
        </a>
      </div>
    </header>
  )
}

export default NavBar
