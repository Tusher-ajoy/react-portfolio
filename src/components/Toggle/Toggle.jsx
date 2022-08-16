import React, { useContext } from 'react';
import './Toggle.css';
import { FaSun, FaMoon } from "react-icons/fa";
import { themeContext } from '../../Context';

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const handleClicked = () => {
        theme.dispatch({type:'toggle'})
    }

  return ( 
    <div className="toggle" onClick={handleClicked}>
        <FaMoon />
        <FaSun />
        <div className="t-button" style={darkMode ? {left:'2px'} : {right:"2px"}}></div>
    </div>
  )
}

export default Toggle