import React, { useState } from 'react'
import '../Css/Nav.css'
import '../App.css'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { CgMenu,CgClose } from "react-icons/cg";
const Nav = () => {

  const [navbar,setnavbar] = useState("nav-ul")
  const [menu,setmenu] = useState(true)

  function click(){
    setnavbar((oldvalue)=>{
      return oldvalue==="nav-ul" ? "nav-ul active" : "nav-ul"
    })
    setmenu(()=>{
      return !menu
    })

   
  }
  return (
    <div className="nav-item">
      <ul className={navbar}>
        <li className="nav-list-item" onClick={click}>
          <Link to='/'>Home</Link>
        </li>
        <li className="nav-list-item" onClick={click}>
          <Link to='/About'>About</Link>
        </li>
        <li className="nav-list-item" onClick={click}>
          <Link to='/Products'>Product</Link>
        </li>
        <li className="nav-list-item" onClick={click}>
          <Link to='/Contact'>Contact</Link>
        </li>
        <li className="nav-list-item cart"onClick={click}>
          <Link to='/Cart'>
          <FaCartShopping />
          <span className="cart-no">10</span>
          </Link>
        </li>
      </ul>



      <div className="nav-menu" onClick={click}>
      {menu? <CgMenu className='nav-menu-btn'/>:<CgClose className='nav-menu-btn'/>}
      {/* <CgMenu className='nav-menu-btn'/> */}
      </div>


    </div>
  )
}


export default Nav