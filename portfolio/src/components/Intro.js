import React from 'react';
import './Intro.css';


const Intro = () => {
  return (
    <div className="Intro" id="Intro">

      <div className="i-left">
        <div className="i-name">
          <span className="animate-text">Hi! I Am</span>
          <span className="highlight animate-text">Sachin </span>
          <span className="description animate-fade-in">
            "I'm a web developer who loves building modern and interactive websites. I enjoy solving problems and creating designs that are both beautiful and user-friendly.
          </span>
        </div>
        <a href="#contact">
          <button className="button i-button animate-bounce">Hire Me</button>
        </a>
        <div className="i-icons">
          <a
            href="https://github.com/sachinkumar030/DemoRepo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github animate-hover"></i>
          </a>
          <a
            href="]https://www.linkedin.com/in/sachin-kumar-27b5242b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin animate-hover"></i>
          </a>
          <a
            href="https://www.instagram.com/sachin_m018?igsh=MW92dWt1NmtuODMxZw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram animate-hover"></i>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100034940357590"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook animate-hover"></i>
          </a>

          <a
            href="https://x.com/Perfect3601Mr?s=09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter animate-hover"></i>
          </a>

        </div>
      </div>



      <div className="i-right">
        <img className="vector1 animate-zoom-in" src="Vector1.png" alt="Vector1" />
        <img className="vector2 animate-zoom-in" src="Vector2.png" alt="Vector2" />
        <img className="boy-img animate-float" src="download.png" alt="Boy" />
        <img className="glasses-img animate-spin" src="glassesimoji.png" alt="Glasses Emoji" />


        <div className="floating-div first animate-slide-in">
          <img src="crown.png" alt="Crown" />
          <div>
            <span>Web</span>
            <span>Developer</span>
          </div>
        </div>
        <div className="floating-div second animate-slide-in-delay">
          <img src="thumbup.png" alt="Thumb Up" />
          <div>
            <span>Best Design</span>
            <span>Award</span>
          </div>
        </div>

        <div className="blur blur1"></div>
        <div className="blur blur2"></div>
      </div>
    </div>
  );
};

export default Intro;
