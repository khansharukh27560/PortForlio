import React from "react";
import "./About.css"; // Importing the CSS file

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p className="about-description">
            Hello! I'm <span className="highlight">Sharukh khan</span>, 
            a passionate web developer with a knack for creating beautiful,
             user-friendly websites and applications. With a strong 
             foundation in HTML, CSS, JavaScript,Redux, BootStrap and modern frameworks, 
             I bring ideas to life on the web.
          </p>
          <p className="about-description">
            I specialize in building responsive, accessible, and performant websites that provide seamless user experiences across all devices. When I'm not coding, I enjoy exploring new technologies, contributing to open source, and designing creative solutions.
          </p>
          <div className="about-links">
            <a className="contact-btn" href="#contact">
              <i className="fas fa-envelope mr-2"></i> Contact Me
            </a>
            <a
              className="github-btn"
              href="https://github.com/khansharukh27"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github mr-2"></i> GitHub
            </a>
          </div>
        </div>
        <div className="about-image">
          <img
            alt="Portrait of a young developer working on a laptop"
            className="rounded-full"
            src="https://storage.googleapis.com/a1aa/image/f87a7c19-c2b2-4f3a-4aa7-c369b9fba24f.jpg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
