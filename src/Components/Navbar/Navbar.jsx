import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { useRef } from 'react'
// import { Link} from 'react-router-dom'
import nav_dropdown from '../Assets/dropdown_image.png'

export const NavbarComponent = () => {

  const [menu,setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo"/>
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown}  alt="" />
        <ul ref={menuRef} className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}> <a href="/"> SHOP</a>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("mens")}}> <a href="/mens">MEN</a>  {menu==="mens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("womens")}}> <a href="/womens">WOMEN</a>  {menu==="womens"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}>  <a href="/kids">KID</a> {menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <a href="/login"><button>Login</button></a>
            <a href="/cart"><img src={cart_icon} alt='cart-icon'/></a>
            <div className="nav-cart-count">
              {getTotalCartItems()}
            </div>
        </div>
    </div> 
  )
} 
