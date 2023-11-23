import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-section'>
          <h3>About Us</h3>
          <p>
            We are an online store dedicated to providing top quality products
            and shopping experiences that will delight you.
          </p>
        </div>
        <div className='footer-section'>
          <h3>Links</h3>
          <ul>
            <li>
              <a href='#'>Home page</a>
            </li>
            <li>
              <a href='#'>Products</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='footer-section'>
          <h3>Contact info</h3>
          <p>Email: info@lintex.com</p>
          <p>Phone: 123-456-789</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
