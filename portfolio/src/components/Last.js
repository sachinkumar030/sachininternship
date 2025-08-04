import React from "react";
import "./Last.css";

const Last = () => {
  return (
    <div className="footer-container footer-spacing">
      <div className="gradient-bg"></div>

      <div className="footer-content">
        <span className="footer-email">totalentertain001@gmail.com</span>
        <div className="social-icons">

          <a
            href="https://www.linkedin.com/in/sachin-kumar-27b5242b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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


          <a href="https://www.facebook.com/profile.php?id=100034940357590" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook animate-hover"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <i className="fab fa-github animate-hover"></i>
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
    </div>
  );
};

export default Last;

