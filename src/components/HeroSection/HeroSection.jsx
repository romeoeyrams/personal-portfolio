import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.15 }}
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.15 }}
      >
        Romeo Colby Eyrams
      </motion.h1>

      <div className="hero-btns">
        <motion.div className="project btn" 
        initial={{ x: '-100vw'}}
        animate={{ x: 0}}
        transition={{ delay:1.5, duration:1.5, type: 'spring'}}>
        <Link to="/project">
        <button  className="btn-projects">
          See my works
        </button>
        </Link>
        </motion.div>

        <div className="contact btn">
          <Link to="/contact">
        <button className="btn-contact">
          Get in Touch
        </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
