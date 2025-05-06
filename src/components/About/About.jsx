import React from "react";
import "./About.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import ParaText from "../ParaText/ParaText";
import { assets } from "../../assets/assets";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
// import Button from '../Button/Button';

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <motion.div
          className="about_header"
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 1 }}
          transition={{ duration: 2 }}
        >
          <SectionTitle heading="About me" subheading="" />
        </motion.div>
      </div>

      <div className="container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 1 }}
          transition={{ duration: 2 }}
        >
          <img src={assets.programmer} alt="" className="about-img" />
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, translateX: "100%" }}
          whileInView={{ opacity: 1, translateX: 1 }}
          transition={{ duration: 2 }}
        >
          <SectionTitle heading="" subheading="Let me introduce myself" />
          <div className="about-info">
            Hi, my name is <b>Romeo Colby Eyrams</b>. I'm a Ghana-based software
            engineer who specializes in building exceptional web applications.
            I've grown from simply enjoying problem-solving to dedicating myself
            to blending design with function, crafting interfaces hat are both
            beautiful and intuitive. Each project is a chance to exceed
            expectations, bring visions to life with precision and care. I
            believe every remarkable product tells a story of both expertise and
            the unique brand identity.
          </div> <br /><br />

          <div className="read-more">
          <button className="read_more">
          Read more
          </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
