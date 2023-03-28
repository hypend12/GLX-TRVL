import React from 'react';
import '../Navbar/Navbar.css';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import {FaTimes} from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
const[click, setClick] = useState(false);
const[color, setColor] = useState(false);

const handleClick = () => setClick(!click)

const changeColor = () => {
  if(window.scrollY  >= 100) {
    setColor(true)
  } else {
    setColor(false)
  }
}

window.addEventListener('scroll', changeColor)


  return (
    <div className={color ? 'header header-bg' : 'header'} >
     <Link to='/' > <h1>GLX TRVL</h1></Link>
  
     <ul className={click ? 'nav-menu active': 'nav-menu' }>
      <li>
        <Link to='/'>Home</Link>
      </li>

      <li>
     <Link to='/pricing'>Pricing</Link>
      </li>

      <li>
     <Link to='/training'>Training</Link>
      </li>

      <li>
     <Link to='/contact'>Contact</Link>
      </li>
      </ul> 
      <div className='hamburger' onClick={handleClick} >
        {click ? (<FaTimes size="28" style={{color: '#fff'}} />) : ( <FaBars size="28" style={{color: '#fff'}} />)}
       
      </div>
      
    </div>
  )
}

export default Navbar;
