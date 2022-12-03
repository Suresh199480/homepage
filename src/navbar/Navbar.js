import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-left'>
            <Link to="#"><h4 className='logo'>MyPropertyGo</h4></Link>
        </div>
        <div className='navbar-right'>
            <li className='nav-items'>
                <Link to="#" className='nav-links'>Apartment</Link>
            </li>
            <li className='nav-items'>
                <Link to="#" className='nav-links'>Carpets Trade</Link>
            </li>
            <li className='nav-items'>
                <Link to="#" className='nav-links'>Help</Link>
            </li>
            <li className='nav-items'>
                <Link to="#" className='nav-links'>Sign up</Link>
            </li>
            <li className='nav-items'>
                <Link to="/login" className='nav-links login-btn'>Login</Link>
            </li>
        </div>
    </div>
  )
}

export default Navbar