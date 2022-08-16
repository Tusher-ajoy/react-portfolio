import React from 'react'
import './Footer.css';
import Wave from '../../img/wave2.png'
import { FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:'100%'}} />
        <div className="f-content">
            <span>tusherd3@gmail.com</span>
            <div className="f-icons">
                <a href="https://www.instagram.com/mr_.tush/" rel="noreferrer" target='_blank'><FaInstagram style={{color:'white', fontSize:"3rem"}} /></a>
                <a href="https://www.facebook.com/tusher.das.7355" rel="noreferrer" target='_blank'><FaFacebook style={{color:'white', fontSize:"3rem"}} /></a>
                <a href="https://github.com/Tusher-ajoy" rel="noreferrer" target='_blank'><FaGithub style={{color:'white', fontSize:"3rem"}} /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer