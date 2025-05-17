import React from "react";
import './aboutdevloper.css'
import { Link } from "react-router-dom";

const AboutDeveloper = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo" aria-label="Logo with letter B inside hexagon">
          <svg
            className="logo-icon"
            fill="none"
            stroke="#64ffda"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3m6 6l6-6-6-6"
            ></path>
          </svg>
        </div>
        <nav className="nav">
          <Link to="/about" className="nav-link">
            01. About
          </Link>
          <Link to="/contact" className="nav-link">
            02. Contact
          </Link>
          <a href="https://drive.google.com/file/d/1QTe8NYzWcr-EwXskLWw8gvMBo29adiDh/view?usp=sharing" className="resume-button">
            Resume
          </a>
        </nav>
      </header>

      <main className="main-content">
        <section>
          <p className="intro-text">Hi, my name is</p>
          <h1 className="name">
            Sharukh khan<span className="dot">.</span>
          </h1>
          <h2 className="subtitle">I build things for the web.</h2>
          <p className="description">
            I'm a web devloper specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building accessible, human-centered products at{" "}
            <a href="#" className="highlight-link">
              Upstatement.
            </a>
          </p>
          <a href="https://grow.almabetter.com/my-certificates" target="_blank" rel="noopener noreferrer" className="course-button">
            Check out my course!
          </a>
        </section>
      </main>
    </div>
  );
};

export default AboutDeveloper;
