import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <div className="home-content">
          <div className="profile-circle">
            <img
  src={`${import.meta.env.BASE_URL}certificates/Mypic.jpg`}
  alt="Althaf Profile"
  className="profile-image"
/>

          </div>
          <h1 className="home-title">
            Hi, I'm <span className="gradient-text">Althaf</span>
          </h1>
          <h2 className="home-subtitle">Full-Stack Developer</h2>
          <p className="home-description">
            Passionate about building scalable web applications with React and modern technologies. 
            Currently seeking opportunities to grow as a developer.
          </p>
          <div className="home-buttons">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;