import React from 'react';
import "./Navbar.scss";
import { IoLogoDesignernews } from 'react-icons/io';
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="nav-left">
        <h2 className="logo-heading">Digital Patrika </h2>
        {/* <IoLogoDesignernews className='logo-icon' /> */}
      </div>
      <div className="nav-lists">

        <ul color='white'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">Sponsors</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <FaBars color='white' className='hamburger' />
    </nav>
  )
}

export default Navbar