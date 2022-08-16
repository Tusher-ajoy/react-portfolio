import React, { useContext } from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import { themeContext } from '../../Context';
import { motion } from 'framer-motion';

const Services = () => {
    const transition = {duration: 2, type:'spring'}

    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

    return (
        <div className='services' id='Services'>
            {/* left side */}
            <div className="awesome">
                <span style={{color:darkMode? 'white' : ''}}>My Awesome</span>
                <span>Services</span>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing obcaecati sed officia! <br /> Totam consequatur quibusdam recusandae?</span>
                <a href='https://drive.google.com/file/d/1Br1wmzs2nk3Ef7mqD9J7wwjKMdXsU_p9/view' rel='noreferrer' target='_blank'><button className='button s-button'>Download CV</button></a>
                
                <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>
            </div>

            {/* right side */}
            <div className="cards">
                <motion.div initial={{left:'20rem'}} whileInView={{left:'14rem'}} transition={transition} style={{left:'14rem'}}>
                    <Card
                    emoji = {HeartEmoji}
                    heading = 'Design'
                    details = 'Figma, Sketch, PhotoShop, Adobe, Adobe xd'
                    />
                </motion.div>
                <motion.div initial={{left:'-8rem'}} whileInView={{left:'-4rem',top:'12rem'}} transition={transition} style={{top:'12rem', left:'-4rem'}}>
                    <Card
                    emoji = {Glasses}
                    heading = 'Developer'
                    details = 'HTML, CSS, JavaScript, React'
                    />
                </motion.div>
                <motion.div initial={{top:'25rem'}} whileInView={{top:'19rem', left:'12rem'}} transition={transition} style={{top:'19rem', left:'12rem'}}>
                    <Card
                    emoji = {Humble}
                    heading = 'UI/UX'
                    details = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                    />
                </motion.div>
                <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
            </div>
        </div>
    );
};

export default Services;