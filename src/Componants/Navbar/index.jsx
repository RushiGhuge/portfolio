import React, { useContext } from "react";
import "./style.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { ThemeContext } from "../../Context/ThemeContext";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { IconButton, Tooltip } from "@mui/material";
import TemporaryDrawer from "../Drawer";
import logo from "../../assets/logo/icons8-source-code-48.png";
import { motion } from "framer-motion";

const ScrollButton = ({ target }) => (
  <Link
    role="button"
    activeClass="active"
    to={target}
    spy={true}
    smooth={true}
    duration={300}
    style={{ cursor: "pointer" }}
  >
    {target}
  </Link>
);

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const lightTooltip = "Switch to Dark Theme";
  const darkToolTip = "Switch to Light Theme";
  const toolTip = theme === "light" ? lightTooltip : darkToolTip;
  return (
    <nav className="navbar">
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        className="left-nav"
      >
        <img src={logo} alt="" />
        <h2>Rushighuge.in</h2>
      </motion.div>
      <div className="right-nav">
        <Tooltip title={toolTip} arrow>
          <IconButton onClick={toggleTheme}>
            {theme === "light" ? <DarkModeIcon /> : <WbSunnyIcon />}
          </IconButton>
        </Tooltip>
        <button>
          <ScrollButton target="Home" />
        </button>

        <button>
          <ScrollButton target="About" />
        </button>

        <button>
          <ScrollButton target="Project" />
        </button>

        <button>
          <ScrollButton target="Contacts" />
        </button>

        <a
          className="resume"
          target="_blank"
          href="https://drive.google.com/file/d/1Vo1TWAd1tMOO_xzGd0rJJgnDFl7MTJZ8/view"
          rel="noreferrer"
        >
          Resume
        </a>
      </div>
      <div className="drawer">
        <TemporaryDrawer />
      </div>
    </nav>
  );
};

export default Navbar;
