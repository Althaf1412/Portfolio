import React from 'react';
import './Internship.css';

function Internship() {
  return (
    <section id="internship" className="section internship-section">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">💼</span>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="internship-card">
<div className="internship-header">
            <div className="internship-info">
              <h3 className="internship-title">React Developer Intern</h3>
              <p className="company-name">Pumo Technovation Private Limited</p>
            </div>
            <span className="internship-date">June 2025 - August 2025</span>
          </div>
          <ul className="internship-list">
            <li className="internship-item">
              <span className="item-bullet">▹</span>
              <span>Led frontend development for a production-level CRM (Customer Relationship Management) application, delivering a complete user interface solution using React.js</span>
            </li>
            <li className="internship-item">
              <span className="item-bullet">▹</span>
              <span>Took full ownership of frontend architecture and implementation, translating business requirements into intuitive and responsive user interfaces</span>
            </li>
            <li className="internship-item">
              <span className="item-bullet">▹</span>
              <span>Integrated and consumed RESTful APIs from backend services, implementing efficient data fetching strategies and error handling mechanisms</span>
            </li>
            <li className="internship-item">
              <span className="item-bullet">▹</span>
              <span>Designed and developed user-friendly, interactive components to streamline customer data management, contact tracking, and workflow automation</span>
            </li>
            <li className="internship-item">
              <span className="item-bullet">▹</span>
              <span>Collaborated closely with backend developers to ensure seamless API integration and optimal data flow between frontend and backend systems</span>
            </li>
            <li className="internship-item">
              <span className="item-bullet">▹</span>
              <span>Implemented responsive design principles to ensure cross-device compatibility and enhanced user experience across desktop and mobile platforms</span>
            </li>
          </ul>
         <div className="tech-tags">
            <span className="tech-tag">React.js</span>
            <span className="tech-tag">JavaScript</span>
            <span className="tech-tag">REST APIs</span>
            <span className="tech-tag">CRM Development</span>
            <span className="tech-tag">Frontend Architecture</span>
            <span className="tech-tag">Responsive Design</span>
          </div>
          <div className="internship-certificate-link">
            <a 
              href="/certificates/Althaf A ( Internship Certificate ).pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-certificate-btn"
            >
              <span className="cert-icon">📜</span>
              View Internship Certificate
            </a>
          </div>
        </div>
        
        </div>
     
    </section>
  );
}

export default Internship;