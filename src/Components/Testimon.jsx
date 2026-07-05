import React from 'react';
import "./Testimon.css";

export default function Testimon() {
  const testimonials = [
    {
      id: 1,
      name: "Jean Claude N.",
      role: "CEO, Tech Rwanda",
      feedback: "Pacifique developed our modern recruitment portal (JOB_QUEST). His backend architecture is super fast, secure, and handling thousands of user requests effortlessly.",
      project: "JOB_QUEST"
    },
    {
      id: 2,
      name: "Aline Marie U.",
      role: "Operations Manager",
      feedback: "The ERP system (Smart Company) built by Pacifique completely changed how we track tasks. The UI design is clean, intuitive, and very pleasant to work with daily.",
      project: "Smart Company"
    },
    {
      id: 3,
      name: "Dr. Emmanuel K.",
      role: "University Registrar",
      feedback: "Our Student Management System is flawless. Pacifique integrated the RESTful APIs perfectly, making grade processing and analytics incredibly fast. Highly recommended!",
      project: "Student Management System"
    }
  ];

  return (
    <div className="testimon-container">
      <div className="testimon-header">
        <h2 className="testimon-title">WHAT PEOPLE SAY</h2>
        <div className="testimon-underline"></div>
      </div>

      <div className="testimon-grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimon-card">
            <div className="quote-icon">“</div>
            <p className="feedback-text">"{t.feedback}"</p>
            
            <div className="testimon-footer">
              <div className="user-info">
                <h4>{t.name}</h4>
                <span className="user-role">{t.role}</span>
              </div>
              <span className="project-tag">{t.project}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}