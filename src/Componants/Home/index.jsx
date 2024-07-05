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
    <main name="Home" className="hero-container-main">
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
          <motion.p
            initial={{ y: -300 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
            className="ParaTxtColorDark"
          >
            Hi, I'm Rushikesh Ghuge. A passionate Front-end & Back-end
            Developer. 📍
          </motion.p>
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
              <IconButton>
                <LinkedInIcon />
              </IconButton>
            </a>
            <a
              target="_blank"
              className=""
              href="https://github.com/RushiGhuge"
              rel="noreferrer"
            >
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
            <a
              target="_blank"
              href="https://leetcode.com/u/rushikeshghuge993/"
              rel="noreferrer"
            >
              <IconButton>
                <SiLeetcode color="#36373b" size={22}/>
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
              <img src={html} alt="" />
              <img src={css} alt="" />
            </li>

            <li>
              <img src={js} alt="" />
              <img src={ts} alt="" />
            </li>

            <li>
              <img src={react} alt="" />
              <img src={angular} alt="" />
            </li>

            <li>
              <img src={tailwind} alt="" />
              <img src={sass} alt="" />
            </li>

            <li>
              <img src={node} alt="" />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/nestjs.png"
                alt="nestjs"
              />
            </li>

            {/* <li>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/firebase.png"
                alt="firebase"
              />
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/linux--v1.png"
                alt="linux--v1"
              />
            </li>

            <li>
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/git.png"
                alt="git"
              />

              <img
                width="48"
                height="48"
                src="https://img.icons8.com/fluency/48/github.png"
                alt="github"
              />
            </li> */}
          </ul>
        </div>
      </motion.div>

      {/* absulute */}
      <div className="techLogos-ab">
        {/* {
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/tailwind_css.png"
          alt="tailwind_css"
        />
       
        <img
          width="48"
          height="48"
          src="https://img.icons8.com/fluency/48/node-js.png"
          alt="node-js"
        />  */}
        {/* 
         <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/redux.png"
          alt="redux"
        />

        

         <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/figma--v1.png"
          alt="figma--v1"
        />
       

      

        <img
          width="48"
          height="48"
          src="https://img.icons8.com/color/48/visual-studio-code-2019.png"
          alt="visual-studio-code-2019"
        /> */}
      </div>
    </main>
  );
};

export default Home;
