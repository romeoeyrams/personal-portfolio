import React from 'react'
import './Hero.css';
import { assets } from '../../assets/assets';
import ParaText from '../ParaText/ParaText';
// import Button from '../Button/Button';

function Hero() {
  return (
    <div className="hero-style">
        <div className="hero">
      <div className="hero-container">
        <h1 className="hero-heading">
            <span>Hello, This is</span>
            <span className="hero-name">Romeo Colby Eyrams</span>
        </h1>
        <div className="hero-img">
           <img src={assets.heroImg} alt="hero" cla/>
        </div>
        <div className="hero-info">
            <p>
                I am a freelance web developer. I love to design and develop web experiences for people.
            </p>
            {/* <Button btnLink="/projects" btnText="see my works" outline={false} /> */}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
