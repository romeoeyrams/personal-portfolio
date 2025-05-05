import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ParaText from "../../components/ParaText/ParaText";
import { assets } from "../../assets/assets";
import "./About.css";
import { Button } from "../../components/Button/Button";
// import AboutInfoItem from "../../components/AboutInfoItem/AboutInfoItem";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import { motion } from "framer-motion"

function About() {
  return (
  <>
    <div className="about-container">
      <div className="container">
        <motion.div className="left-side"
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 1 }}
        transition={{ duration: 2 }}
        >
          <h1>About Me</h1>
          <div className="about_subheading">
            <p>
              Hi, I am <span>Romeo Colby Eyrams</span>
            </p>
          </div>

          <div className="about_heading">
            <h2>A freelance web developer</h2>
          </div>
          <div className="about_info">
          <p>
            Hi! I'm a passionate developer with experience in building web
            applications. I love learning new technologies and contributing to
            exciting projects. In my spare time, I enjoy reading, traveling, and
            exploring the world of tech.
          </p>
          </div>
          <button>Download CV</button>
        </motion.div>
        <motion.div className="right-side"
        initial={{ opacity: 0, translateX: "100%" }}
        whileInView={{ opacity: 1, translateX: 1 }}
        transition={{ duration: 2 }}
        >
          <img src={assets.me} alt="" />
        </motion.div>
      </div>
    </div>

    <Education />
    <Skills />
    </>
  );
}

export default About;
