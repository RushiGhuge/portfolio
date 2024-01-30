import './style.css'
import css from '../../assets/img/CSS3.svg'
import html from '../../assets/img/HTML.svg'
import js from '../../assets/img/js.svg'
import react from '../../assets/img/react.svg'
import { IconButton } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion'


const Home = () => {
    return (
        <section name="Home" className="hero-container-main">
            <div className="hero-main">
                <div className="hero-text">
                    <div className="hero-heading">
                        <motion.h1 initial={{ x: -300 }} animate={{ x: 0 }} transition={{ type: "spring", stiffness: 100 }} id="textColor">
                            Front-End Developer <span id="hand-shake">👋</span>
                        </motion.h1>

                    </div>
                    <motion.p initial={{ y: -300 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100, delay: 0.3 }} className="ParaTxtColorDark">Hi, I'm Rushikesh Ghuge. A
                        passionate Front-end Developer. 📍
                    </motion.p>
                    <motion.div initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 100, delay: 0.6 }} className="share-icon">
                        <a target="_blank" href="https://www.linkedin.com/in/rushikeshghuge/">
                            <IconButton>
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
                        <li><img src={html} alt="" /></li>
                        <li><img src={css} alt="" /></li>
                        <li><img src={js} alt="" /></li>
                        <li><img src={react} alt="" /></li>
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default Home;