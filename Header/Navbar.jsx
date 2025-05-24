import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='Nav'>
       <div className='maindiv'>
        <h2>Shopify</h2> 
       <div className='links'>
      <Link to="/" className='li'>Home</Link>
      <Link to="/About" className='li'>About</Link>
      <Link to="/Cart" className='li'>Cart</Link>
      <Link to="/contact" className='li'>Contact</Link>
      </div>
     </div>
    
      
    </nav>
    </>
  )
}

export default Navbar