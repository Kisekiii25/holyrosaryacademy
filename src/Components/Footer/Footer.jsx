import React from 'react'
import './Footer.css'
import logo from '../../assets/hra_logo.png'

const Footer = () => {
  return (
    <div className='footer container'>
        <div className="left">
            <img className='logo' src={logo} alt="" />
            <p>© 2024 Holy Rosary Academy of Las Pinas City. Unofficial Webite.</p>
        </div>
        <div className="right">
            <p>Powered by : <a target='_blank' className='kiseki' href="https://www.facebook.com/Kisekiii25">Kiseki</a></p>
        </div>
    </div>
  )
}

export default Footer
