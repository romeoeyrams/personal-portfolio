import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Projects.css";
import { Swiper } from "swiper/react";
import projects from "../../assets/projects";
import { motion } from "framer-motion";
// import ProjectItems from "../ProjectItems/ProjectItems";



function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <motion.div className="project_header"
         initial={{ opacity: 0, translateX: "-100%" }}
         whileInView={{ opacity: 1, translateX: 1 }}
         transition={{ duration: 2 }}
        >
          <SectionTitle
            heading="Projects"
            subheading=""
          />
        </motion.div>
      </div>

      <div className="container">
      <div className="cards-wrapper">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <img
              src={project.image}
              alt={project.title}
              className="card-image"
            />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <h3 className="view_project">View Project</h3>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Projects;
