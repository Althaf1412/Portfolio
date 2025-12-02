import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">👤</span>
          <h2 className="section-title">About Me</h2>
        </div>
        <div className="about-grid">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a dedicated Full-Stack Developer with hands-on experience in building modern web applications. 
              My journey in web development has been driven by curiosity and a passion for creating elegant solutions 
              to complex problems.
            </p>
            <p className="about-paragraph">
              During my React internship, I gained valuable experience working with real-world projects, 
              collaborating with teams, and following industry best practices. I'm proficient in both 
              frontend and backend technologies, allowing me to build complete, end-to-end solutions.
            </p>
            <p className="about-paragraph">
              I'm always eager to learn new technologies and take on challenging projects that push me 
              to grow as a developer.
            </p>
          </div>
          <div className="about-facts">
            <h3 className="facts-title">Quick Facts</h3>
            <ul className="facts-list">
              <li className="fact-item">
                <span className="fact-icon">▹</span>
                <span>Completed React Internship</span>
              </li>
              <li className="fact-item">
                <span className="fact-icon">▹</span>
                <span>Strong foundation in Full-Stack Development</span>
              </li>
              <li className="fact-item">
                <span className="fact-icon">▹</span>
                <span>Passionate about clean code and best practices</span>
              </li>
              <li className="fact-item">
                <span className="fact-icon">▹</span>
                <span>Quick learner and problem solver</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;