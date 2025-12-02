import React from 'react';
import './Skills.css';

function Skills() {
  const skillCategories = [
   {
      title: 'Frontend',
      icon: '💻',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap']
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Django', 'Python', 'Microsoft SQL Server']
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: ['Git & GitHub', 'VS Code', 'Postman']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-icon">💡</span>
          <h2 className="section-title">Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-card">
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="skill-item">
                    <span className="skill-bullet"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;