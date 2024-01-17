import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import '../Css/Header.css'
import Nav from './Nav'
const Header = () => {
  return (
    <div className="navbar-logo">
        <Link to="/" className='Logo'>
            <img src="./Images/Logo/logo2.png" alt="" />
        </Link>
        <Nav/>
    </div>
  )
}

export default Header