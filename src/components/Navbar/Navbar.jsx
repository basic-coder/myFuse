import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Navbar = ({setNavActive,navActive}) => {

  
  const [linkActive, setLinkActive] = useState(0)

  const navArray = [
    { id: 0, label: "Home", link: "/" },
    { id: 1, label: "Sign in", link: "/signin" },
    { id: 2, label: "About Us", link: "/aboutus" },
    { id: 3, label: "Blogs", link: "/blogs" },
    { id: 4, label: "Contact Us", link: "/contactUs" }
  ]

  return (
    <>
    <div className='navbar '>
      <div className="container">
      <h1 className='nav__logo'>MyFuse<span>.</span>in</h1>

      <span className="nav__icon" onClick={() => setNavActive(!navActive)}><HiMiniBars3CenterLeft /></span>
      <ul className={`nav__links ${navActive ? 'navActive' : ''} `}>
        <span className="nav__icon close" onClick={() => setNavActive(!navActive)}><IoMdClose /></span>

        {navArray.map((data)=> <li key={data.id}><Link className={`nav__link ${data.id == linkActive ? 'active' : ''}`}  to={data.link} onClick={() => setLinkActive(data.id)}>{data.label}</Link></li>)}
      </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar