import React from 'react';
import './Projects.css';

function Projects() {
const projects = [
    {
      title: 'JurisEdge',
      description: 'A professional front-end website developed for a legal advocate client. Features a modern, responsive design with integrated EmailJS service for client communication and contact form functionality.',
      technologies: ['React', 'EmailJS', 'CSS3', 'JavaScript'],
      github: 'https://github.com/Althaf1412/JurisEdge-ReactProject',
      live: 'https://Althaf1412.github.io/JurisEdge-ReactProject'
    },
    {
      title: 'Portfolio Website',
      description: 'Built a fully responsive portfolio website in React with reusable components, structured routing, and custom UI styling to highlight skills, projects, and developer profile.',
      technologies: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/Althaf1412/portfolio',
      live: '#'
    },
    {
      title: 'Farm Expert',
      description: 'Built an image-based plant disease detection system that evaluates leaf features, matches them with a plant health database, and delivers precise disease identification along with causes, effects, and management guidance to support farmers and improve crop productivity.',
      technologies: ['Python', 'Django', 'Machine Learning', 'Image Processing', 'SQL']
    },
    {
      title: 'Smart Gas Leakage Detector',
      description: 'Built an IoT-enabled gas leakage detection system using MQ5 sensor and Arduino, featuring WiFi connectivity, customizable threshold levels, and real-time alerts for LPG leakage monitoring in residential and commercial environments.',
      technologies: ['Arduino', 'IoT', 'MQ5 Sensor', 'WiFi', 'C++']
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">📁</span>
          <h2 className="section-title">Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIdx) => (
                  <span key={techIdx} className="project-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} className="project-link">
                  <span>🔗</span>
                  <span>Code</span>
                </a>
                <a href={project.live} className="project-link">
                  <span>🚀</span>
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;