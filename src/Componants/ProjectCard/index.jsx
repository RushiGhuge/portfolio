import "./style.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      tabIndex={0}
      initial={{ opacity: 0.4, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`project-card odd ${project.id % 2 !== 0 && "project-left  "}`}
    >
      <div className="project-img">
        <img src={project.img} alt="" />
      </div>

      <div className="project-content">
        <h2 id="youtube">
          {project.heading} <img src="" alt="" />
        </h2>

        <p>{project.des} </p>

        <div className="project-card-buttons">
          {project.tech.map((item, id) => (
            <p key={id}>{item}</p>
          ))}
        </div>

        <div className="project-cart-demo">
          <a className="hover-effect" target="_blank" href={project.CodeLink}>
            Code
            <GitHubIcon />
          </a>
          <a
            className="hover-effect"
            target="_blank"
            href={project.LiveDemoLink}
          >
            Live Demo <LaunchIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
