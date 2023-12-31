import React, { useContext } from 'react'
import './style.css'
import { Link, animateScroll as scroll } from 'react-scroll';
import { ThemeContext } from '../../Context/ThemeContext';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton, Tooltip } from '@mui/material';
import TemporaryDrawer from '../Drawer';


const ScrollButton = ({ target }) => (
    <Link
        to={target}
        spy={true}
        smooth={true}
        duration={300}
        style={{ cursor: 'pointer' }}
    >
        {target}
    </Link>
);


const Navbar = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav className="navbar">
            <div className="left-nav">
                <h2>Rushi.dev</h2>
            </div>
            <div className="right-nav">
                <Tooltip title={theme} arrow>
                    <IconButton onClick={toggleTheme}>
                        {theme === 'light' ? <DarkModeIcon /> : <WbSunnyIcon />}
                    </IconButton>
                </Tooltip>
                <ScrollButton target='Home' />
                <ScrollButton target='About' />
                <ScrollButton target='Project' />
                <ScrollButton target='Contacts' />
                <a className="resume" target="_blank" href="https://drive.google.com/file/d/1e-oPZxchRHKfJ5IY7J6aD3vHs4CsJiRO/view">Resume</a>
            </div>
            <div className='drawer'>
                <TemporaryDrawer />
            </div>
        </nav>
    )
}

export default Navbar;