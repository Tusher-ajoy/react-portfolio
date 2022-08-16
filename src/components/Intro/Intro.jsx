import React, { useContext } from 'react';
import './Intro.css';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Intro = () => {
    const transition = {duration: 2, type:'spring'}

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode? 'white' : ''}}>Hy! I Am</span>
                <span>Tusher Das</span>
                <span>Creative frontend web developer with a flair for bringing innovative UX design to life. My ultimate motto is to fulfill the demand of the buyers by making them satisfied with proper file delivery in time and without any delay.</span>
            </div>
            <Link spy={true} to='Contact' smooth={true}><button className="button i-button">Hire me</button></Link>
            <div className="i-icons">
                <a href="https://github.com/Tusher-ajoy"><FaGithub style={{fontSize:'90px', color:'rgb(187, 66, 66)'}} /></a>
                <a href="https://www.linkedin.com/in/tusher-das"><FaLinkedinIn style={{fontSize:'90px', color:'rgb(187, 66, 66)'}} /></a>
                <a href="https://www.instagram.com/mr_.tush/"><FaInstagram style={{fontSize:'90px', color:'rgb(187, 66, 66)'}} /></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img initial={{left:'-36%'}} whileInView={{left:'-24%'}} transition={transition} src={glassesimoji} alt="" />
            <motion.div initial={{top:'-4%', left:'74%'}} whileInView={{left:'68%'}} transition={transition} className='floating-div' style={{top:'-4%', left:'68%'}}>
                <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
            </motion.div>
            <motion.div initial={{left:'9rem', top:'18rem'}} whileInView={{left:'0rem'}} transition={transition} className='floating-div' style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1="Best Design" txt2="Award" />
            </motion.div>
            {/* blur divs */}
            <div className="blur" style={{background:'rgb(238 210 255)'}}></div>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem', height:'11rem', left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro