import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Tooltip } from '@mui/material';
import { Link, animateScroll as scroll } from 'react-scroll';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { IconButton } from '@mui/material';
import { ThemeContext } from '../../Context/ThemeContext';
import './style.css'

import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import EngineeringIcon from '@mui/icons-material/Engineering';
import CloseIcon from '@mui/icons-material/Close';
import FeedIcon from '@mui/icons-material/Feed';

export default function TemporaryDrawer() {

    const [state, setState] = React.useState(false)
    const { theme, toggleTheme } = React.useContext(ThemeContext);


    const ScrollButton = ({ target }) => {
        return (
            <div className='button'>
                <Link
                    to={target}
                    spy={true}
                    smooth={true}
                    duration={300}
                    style={{ cursor: 'pointer', width: '100%' }}
                >
                    {target}
                </Link>
            </div>
        )
    };


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                height: '100vh',
                background: 'var(--bg)',
                color: 'var(--text)'
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >

            <div className='close'>
                <CloseIcon />
            </div>

            <ListItem >
                <ListItemButton onClick={toggleTheme}>
                    <ListItemIcon >
                        {theme === 'light' ?
                            <div className='button-sidenav'>
                                <DarkModeIcon />
                                Dark
                            </div>
                            :
                            <div className='button-sidenav'>
                                <WbSunnyIcon />
                                Light
                            </div>
                        }
                    </ListItemIcon>
                </ListItemButton>
            </ListItem>

            <ListItem >
                <ListItemButton>
                    <span><HomeIcon /></span>
                    <ScrollButton target='Home' />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <span><InfoIcon /></span>
                    <ScrollButton target='About' />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <span><EngineeringIcon /></span>
                    <ScrollButton target='Project' />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton >
                    <span><ContactsIcon /></span>
                    <ScrollButton target='Contacts' />
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton >
                    <span><FeedIcon /></span>
                    <a className="resume" target="_blank" href="https://drive.google.com/file/d/1hkxMVM6g0PoYNbg7QIkEnrvx33OiTgE1/view?usp=drive_link">Resume</a>
                </ListItemButton>
            </ListItem>

        </Box>
    );

    return (
        <div>
            <Button onClick={toggleDrawer(true)}>{<MenuIcon />}</Button>
            <Drawer
                anchor='left'
                open={state}
                onClose={toggleDrawer(false)}
            >
                {list('left')}
            </Drawer>
        </div>
    );
}