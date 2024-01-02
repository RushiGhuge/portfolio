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
        activeClass="active"
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
                <a className="resume" target="_blank" href="https://drive.google.com/file/d/1hkxMVM6g0PoYNbg7QIkEnrvx33OiTgE1/view?usp=drive_link">Resume</a>
            </div>
            <div className='drawer'>
                <TemporaryDrawer />
            </div>
        </nav>
    )
}

export default Navbar;