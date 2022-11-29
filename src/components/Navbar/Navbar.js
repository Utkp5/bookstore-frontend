import React from 'react'
import './Navbar.css'
import { CiShoppingCart } from "react-icons/ci";


function Navbar() {
  return (
    <div className='navbar'>
        <div>
            <img src="https://bookpresstheme.com/html/assets/images/index2/logo-main-1.png" alt="" className='logo'/>
        </div>
        <div className='navbar_items'>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About us</a></li>
                <li><a href="">Author</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Sign in</a></li>
                <li><a href="">Sign up</a></li>
                <CiShoppingCart size={32} color="white" />
            </ul>
        </div>
    </div>
  )
}

export default Navbar
