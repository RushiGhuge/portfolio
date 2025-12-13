import "./style.css";
import css from "../../assets/img/CSS3.svg";
import html from "../../assets/img/HTML.svg";
import js from "../../assets/img/js.svg";
import ts from "../../assets/img/typescript.svg";
import react from "../../assets/img/react.svg";
import node from "../../assets/img/node-js.svg";
import tailwind from "../../assets/img/tailwind-css.svg";
import sass from "../../assets/img/sass.svg";
import angular from "../../assets/img/icons8-angular.svg";
import { IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";

const Home = () => {
  return (
    <section name="Home" className="hero-container-main">
      <div className="hero-main">
        <div className="hero-text">
          <header className="hero-heading">
            <motion.h1
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              id="textColor"
            >
              Full Stack Developer <span id="hand-shake">👋</span>
            </motion.h1>
          </header>
          <motion.h2
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="ParaTxtColorDark"
          >
            Hi, I'm Rushikesh Ghuge. A passionate Front-end & Back-end
            Developer. 📍
          </motion.h2>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
            className="share-icon"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rushikeshghuge/"
              rel="noreferrer"
            >
              <IconButton tabIndex={-1}>
                <LinkedInIcon />
              </IconButton>
            </a>
            <a
              target="_blank"
              className=""
              href="https://github.com/RushiGhuge"
              rel="noreferrer"
            >
              <IconButton tabIndex={-1}>
                <GitHubIcon />
              </IconButton>
            </a>
            <a
              target="_blank"
              href="https://leetcode.com/u/rushikeshghuge993/"
              rel="noreferrer"
            >
              <IconButton tabIndex={-1}>
                <SiLeetcode className="icon" size={22} />
              </IconButton>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="hero-img"
        ></motion.div>
      </div>

      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.6 }}
        className="techStack"
      >
        <h3 className="ParaTxtColorDark">Tech Stack | </h3>
        <div className="logos">
          <ul>
            <li>
              <img src={html} alt="html" />
              <img src={css} alt="css" />
            </li>

            <li>
              <img src={js} alt="js" />
              <img src={ts} alt="ts" />
            </li>

            <li>
              <img src={react} alt="react" />
              <img src={angular} alt="angular" />
            </li>

            <li>
              <img src={tailwind} alt="tailwind" />
              <img src={sass} alt="sass" />
            </li>

            <li>
              <img src={node} alt="node" />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/nestjs.png"
                alt="nestjs"
              />
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
