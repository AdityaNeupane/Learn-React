import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-brand">
          MyBrand
        </a>
        <div className="navbar-menu">
        <Link to="/home" className="navbar-item">Home</Link>
          <Link to="/about" className="navbar-item">About</Link>
          <Link to="/services" className="navbar-item">Services</Link>
          <Link to="/contact" className="navbar-item">Contact</Link>
        </div>
        <div className="navbar-toggle">
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
