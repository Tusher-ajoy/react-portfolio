import React, { useContext } from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Logo from '../../img/logo.png';
import Shopify from '../../img/Shopify.png';
import Team from '../../img/teams.png';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works">
        {/* left side */}
        <div className="awesome">
                <span style={{color:darkMode? 'white' : ''}}>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Lorem, ipsum dolor sit amet consectetur adipisicing obcaecati sed officia! 
                    <br /> 
                    Totam consequatur quibusdam recusandae?
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, maiores?
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                    </span>
                    <Link spy={true} to='Contact' smooth={true}><button className='button s-button'>Hire me</button></Link>
                
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
        </div>
        {/* right side */}
        <div className="w-right">
            <motion.div initial={{rotate:45}} whileInView={{rotate:0}} viewport={{margin:'-40px'}} transition={{duration:3.5, type:'spring'}} className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img style={{width:'100%'}} src={Logo} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img style={{width:'100%'}} src={Team} alt="" />
                </div>
            </motion.div>
            {/* background Circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle redCircle"></div>
        </div>
    </div>
  )
}

export default Works