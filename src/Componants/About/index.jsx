import "./style.css";
import about from "../../assets/img/about.jpg";
import { AboutMeData } from "../../constants/constants";

function About() {
  return (
    <section name="About" id="aboutSec" className="about-section">
      <div className="about-img">
        <img src={about} alt="" />
      </div>

      <div className="about-text">
        <h3 id="aboutme">ABOUT ME</h3>
        <h3 id="head-ab">{AboutMeData.title}</h3>
        <p className="para-ab">{AboutMeData.subTitle}</p>
      </div>
    </section>
  );
}

export default About;
