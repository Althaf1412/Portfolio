import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Internship from './Internship';
import Projects from './Projects';
import Education from './Education';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">Portfolio</div>
            
            {/* Desktop Menu */}
            <div className="nav-menu desktop-menu">
              {['home', 'about', 'skills', 'internship', 'projects', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              {['home', 'about', 'skills', 'internship', 'projects', 'education'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="mobile-nav-link"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          
        </div>
      </footer>
    </div>
  );
}

// Contact Component (keeping it here as it's small)
function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-description">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          feel free to reach out!
        </p>
        <div className="contact-buttons">
          <a href="mailto:althafansar29@gmail.com?subject=Hello%20Althaf" className="contact-btn primary">
            <span>📧</span>
            <span>althafansar29@gmail.com</span>
          </a>
          <a href="tel:+971509496099" className="contact-btn secondary">
            <span>📱</span>
            <span>+971 509496099</span>
          </a>
        </div>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/althaf-a-410637397?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="social-link">
            LinkedIn
          </a>
          <a href="https://github.com/Althaf1412 " target="_blank" rel="noopener noreferrer" className="social-link">
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default App;