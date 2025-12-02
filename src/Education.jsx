import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">🎓</span>
          <h2 className="section-title">Education & Certifications</h2>
        </div>

        {/* Bachelor's Degree */}
        <div className="education-card">
          <div className="education-header">
            <div className="education-info">
              <h3 className="education-title">Bachelor's Degree in Information Technology</h3>
              <p className="university-name">KCG College of Technology</p>
            </div>
            <span className="education-date">2020 - 2024</span>
          </div>
          <p className="education-description">
            Completed coursework in Data Structures, Algorithms, Database Management Systems, 
            Web Development, Software Engineering, and Object-Oriented Programming.
          </p>
          <div className="education-cgpa">
            <p><strong>CGPA:</strong> 8.1 / 10</p>
          </div>
        </div>

        {/* HSC */}
        <div className="education-card">
          <div className="education-header">
            <div className="education-info">
              <h3 className="education-title">Higher Secondary Certificate (HSC)</h3>
              <p className="university-name">S.R.G.D.S Matric Higher Secondary School, Tiruvannamalai</p>
            </div>
            <span className="education-date">2020</span>
          </div>
          <div className="education-cgpa">
            <p><strong>Percentage:</strong> 78%</p>
          </div>
        </div>

        {/* Certifications Header */}
        <div className="certifications-divider">
          <h3 className="certifications-heading">Professional Certifications</h3>
        </div>

        {/* Python Full Stack - Online */}
        <div className="education-card">
          <div className="education-header">
            <div className="education-info">
              <h3 className="education-title">Python Full Stack Development Certification</h3>
              <p className="university-name">Guvi, Online</p>
            </div>
          </div>
          <p className="education-description">
            Completed comprehensive training covering HTML, CSS, Bootstrap, JavaScript, React JS, 
            Python, Django, and SQL.
          </p>
          <div className="certificate-link">
            <a 
              href="https://www.guvi.in/verify-certificate?id=97823132f97GH1K46E" 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-certificate-btn"
            >
              <span className="cert-icon">📜</span>
              View Certificate
            </a>
          </div>
        </div>

        {/* Python Full Stack - Offline */}
        <div className="education-card">
          <div className="education-header">
            <div className="education-info">
              <h3 className="education-title">Python Full Stack Development – Offline Certification</h3>
              <p className="university-name">PUMO TECHNOVATION</p>
            </div>
          </div>
          <p className="education-description">
            Successfully completed hands-on training with real-time projects and mentorship in 
            Full stack web development.
          </p>
          <div className="certificate-link">
            <a 
              href="/certificates/CourseCompletion.jpg" 
              target="_blank" 
              rel="noopener noreferrer"
              className="view-certificate-btn"
            >
              <span className="cert-icon">📄</span>
              View Certificate 
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;