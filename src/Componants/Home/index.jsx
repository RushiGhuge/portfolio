import './style.css'
import css from '../../assets/img/CSS3.svg'
import html from '../../assets/img/HTML.svg'
import js from '../../assets/img/js.svg'
import ts from '../../assets/img/typescript.svg'
import react from '../../assets/img/react.svg'
import node from '../../assets/img/node-js.svg'
import nextJs from '../../assets/img/nextjs.svg'
import mongo from "../../assets/img/mongo-db-64.png"
import tailwind from '../../assets/img/tailwind-css.svg'
import sass from '../../assets/img/sass.svg'
import angular from '../../assets/img/icons8-angular.svg'
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion'


const Home = () => {




    return (
        <main name="Home" className="hero-container-main">
            <div className="hero-main">
                <div className="hero-text">
                    <header className="hero-heading">
                        <motion.h1 initial={{ x: -300 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }} id="textColor">
                            Front-End React Developer <span id="hand-shake">👋</span>
                        </motion.h1>

                    </header>
                    <motion.p initial={{ y: -300 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100, delay: 0.3 }} className="ParaTxtColorDark">Hi, I'm Rushikesh Ghuge. A
                        passionate Front-end Developer. 📍
                    </motion.p>
                    <motion.div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.6 }} className="share-icon">
                        <a target="_blank" href="https://www.linkedin.com/in/rushikeshghuge/">
                            <IconButton >
                                <LinkedInIcon />
                            </IconButton>
                        </a>
                        <a target="_blank" className="" href="https://github.com/RushiGhuge">
                            <IconButton>
                                <GitHubIcon />
                            </IconButton>
                        </a>
                    </motion.div>
                </div>

                <motion.div initial={{ y: -300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.3 }} className="hero-img">
                </motion.div>

            </div>

            <motion.div initial={{ y: 300, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.6 }} className="techStack">
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
                        {/* <li>
                            <img src={node} alt="" />
                            <img src={mongo} alt="" />
                        </li> */}

                        <li>
                            <img src={tailwind} alt="" />
                            <img src={sass} alt="" />
                        </li>

                    </ul>
                </div>
            </motion.div>
        </main>
    )
}

export default Home;