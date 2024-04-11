import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {Link} from 'react-router-dom'


export const NavbarComponent = () => {

  const [menu,setMenu] = useState("shop")
 
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo"/>
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
          {/* <li onClick={()=>{setMenu("shop")}}> <Link to='/'>SHOP</Link>{menu==="shop"?<hr/>:<></>}</li> */}
          <li onClick={()=>{setMenu("mens")}}> <Link to='/mens'>MEN</Link>  {menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}> <a href="/womens">WOMEN</a>  {menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}>  <a href="/kids">KID</a> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <a href="/login"><button>Login</button></a>
            <a href="/cart"><img src={cart_icon} alt='cart-icon'/></a>
            <div className="nav-cart-count">
              0
            </div>
        </div>
    </div>
  )
} 
