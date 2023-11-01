import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/navbar.css'
import {useSelector} from 'react-redux'

const Navbar = () => {

    const cartproducts = useSelector(state=>state.cart)

  return (
    <div>
     <nav className='nav'>
     <div className='nav-1'><NavLink className='nav-8' to='/'>Home</NavLink></div>
     <div className='nav-1'><NavLink className='nav-8' to='/product'>Product</NavLink></div>
     <div className='nav-1'><NavLink className='nav-8' to='/about'>About us</NavLink></div>
     <div className='nav-1'><NavLink className='nav-8' to='/cart'>Cart {cartproducts.length}</NavLink></div>
     </nav>
    </div>
  )
}

export default Navbar
