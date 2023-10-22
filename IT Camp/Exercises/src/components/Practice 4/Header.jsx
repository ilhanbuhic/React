import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './CSS/header.css'
import ContactUs from '../../pages/Practice 4/ContactUs'

function NavBar() {
  const navigate = useNavigate()

  const navLinks = [
    { text: 'Home', href: '#home' },
    { text: 'Course', href: '#course' },
    { text: 'Campus', href: '#campus' },
    { text: 'Facilities', href: '#facilities' },

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
            <button className='btn1' onClick={() => navigate('/contact-us')}>
              Contact Us
            </button>
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
