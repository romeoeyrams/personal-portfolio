import React from "react";
import "./Skills.css";
import SkillsItems from "../SkillsItems/SkillsItems";
import SectionTitle from "../SectionTitle/SectionTitle";
import { assets } from "../../assets/assets";
import { motion } from "framer-motion"

function Skills() {
  return (
    <div className="skills">
      <motion.div className="container"
      initial={{ opacity: 0, translateX: "-100%" }}
      whileInView={{ opacity: 1, translateX: 1 }}
      transition={{ duration: 2 }}
      >
        <SectionTitle heading="Skills" subheading="" />
      </motion.div>

      {/* <div className="container"> */}
        <div className="skills-container">
          <h2 className="skills-heading">Frontend</h2>
          <div className="skills-category">
            <div className="skill-item">
              <img src={assets.html} className="html"/>
              <p>HTML5</p>
            </div>

            <div className="skill-item">
              <img src={assets.css} className="css"/>
              <p>CSS3</p>
            </div>

            <div className="skill-item">
              <img src={assets.javascript} className="javascript"/>
              <p>Javascript</p>
            </div>

            <div className="skill-item">
            <img src={assets.react} className="react"/>
              <p>React.js</p>
            </div>
            
            <div className="skill-item">
            <img src={assets.vue} className="vue"/>
              <p>Vue js</p>
            </div>

            <div className="skill-item">
            <img src={assets.styled_component} className="styled_component"/>
              <p>Styled Component</p>
            </div>
          </div>

          <h2 className="skills-heading">Backend</h2>
          <div className="skills-category">
            <div className="skill-item">
            <img src={assets.nodejs} className="node"/>
              <p>Node.js</p>
            </div>
            <div className="skill-item">
            <img src={assets.laravel} className="laravel"/>
              <p>Laravel</p>
            </div>
            <div className="skill-item">
            <img src={assets.xampp} className="xampp"/>
              <p>Xampp</p>
            </div>
          </div>

          <h2 className="skills-heading">Ops</h2>
          <div className="skills-category">
            <div className="skill-item">
            <img src={assets.git} className="git"/>
              <p>Git</p>
            </div>
            <div className="skill-item">
            <img src={assets.github} className="github"/>
              <p>Github</p>
            </div>
            <div className="skill-item">
            <img src={assets.vercel} className="vercel"/>
              <p>Vercel</p>
            </div>
            <div className="skill-item">
            <img src={assets.netlify} className="netlify"/>
              <p>Netlify</p>
            </div>
            <div className="skill-item">
            <img src={assets.postman} className="postman"/>
              <p>Postman</p>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Skills;
