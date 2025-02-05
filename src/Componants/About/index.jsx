import "./style.css";
import about from "../../assets/img/about.jpg";
import { AboutMeData } from "../../constants/constants";
import { motion } from "framer-motion";

function About() {
  return (
    <section tabIndex={0} name="About" id="aboutSec" className="about-section">
      <motion.div
        initial={{ opacity: 0.4, y: 100, }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50}}
        className="about-img"
      >
        <img src={about} alt="" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0.4, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 50}}
        className="about-text"
      >
        <h3 id="aboutme">ABOUT ME</h3>
        <h3 id="head-ab">{AboutMeData.title}</h3>
        <p className="para-ab">{AboutMeData.subTitle}</p>
      </motion.div>
    </section>
  );
}

export default About;
