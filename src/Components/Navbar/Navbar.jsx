import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/hra_logo.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        window.scrollY > 100 ?  setSticky(true) : setSticky(false);
    });
  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);  
  }

  return (
    <nav className={`navContainer ${sticky? "dark-nav" : ""} container` }>
      <div className="logo">
        <img src={logo} alt="" className='Logo'/>
        <h4 className='logo-name'>Holy Rosary Academy of Las Piñas City</h4>
      </div>
        <ul className={mobileMenu? '':'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link> </li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>Program</Link> </li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
            <li><Link to='facilities' smooth={true} offset={-260} duration={500}>Facilities</Link></li>
            <li><Link to='Announcements' smooth={true} offset={-260} duration={500}>Annoucements</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500}><button className='btn'>Contact us</button></Link></li>
        </ul>
        <span className="material-symbols-outlined menu-icon" onClick={toggleMenu}>menu_open</span>
    </nav>
  )
}

export default Navbar
