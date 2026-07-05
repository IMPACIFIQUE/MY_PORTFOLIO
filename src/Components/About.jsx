import React from "react";
import "./About.css";

export default function About() {
  // Urutonde rw'aho wakoze cyangwa imishinga wakoze rukuwe muri Experience.jsx
  const experiences = [
    {
      role: "Full-Stack Developer",
      company: "Freelance / Personal Projects",
      duration: "2025 - Present",
      description: "Developing scalable web applications using React, PHP, and JavaScript. Focused on building fast RESTful APIs, securing servers, and designing clean user interfaces.",
      skills: ["React", "JavaScript", "PHP", "Git"]
    },
    {
      role: "Frontend Developer & UI Designer",
      company: "Tech Solutions Hub (Junior Role/Intern)",
      duration: "2024 - 2025",
      description: "Created responsive user interfaces using HTML, CSS, and Vue.js. Collaborated with teams to implement seamless user experiences and managed version control using Git.",
      skills: ["HTML", "Vue.js", "UI Design", "Git"]
    }
  ];

  return (
    <div className="about-container">  
      <section className="about-content">
        <h1 className="about-title">ABOUT ME</h1>
        <h1 className="show-experience">EXPERIENCE</h1>

        <div className="top-section">
          {/* LEFT SIDE - BIO & MV CARDS */}
          <div className="about-left">
            <p className="about-description">
              I am a passionate Full-Stack Developer dedicated to creating
              modern, scalable, and secure digital solutions.
              <br /><br />
              My journey in software development started with curiosity
              about how websites work, and it has evolved into a commitment
              to building applications that solve real-world problems.
              <br /><br />
              I specialize in designing responsive user interfaces using
              modern frontend technologies while also developing robust
              backend systems, RESTful APIs, and database architectures.
            </p>

            <div className="mv-container">
              <div className="mv-card">
                <h2>Mission</h2>
                <p>
                  To create impactful software solutions that empower
                  individuals, businesses, and communities through
                  technology and innovation.
                </p>
              </div>

              <div className="mv-card">
                <h2>Vision</h2>
                <p>
                  To build useful things, discovering automated solutions that help real 
                  people streamline their daily lives and expand human potential.
                </p>
              </div>
            </div>
            <br />
        <button className="mycv-btn">View Resume</button>
          </div>

          {/* RIGHT SIDE - TIMELINE WITH EXPERIENCE SUBTITLE */}
          <div className="about-right">
            <h4 className="journey-experience">2+ Years of Experience</h4>

            <h3 className="section-subtitle">My Journey</h3>
            
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div className="timeline-item" key={index}>
                  <div className="timeline-dot"></div>
                  <span className="timeline-date">{exp.duration}</span>
                  <h4 className="timeline-title">{exp.role}</h4>
                  <h5 className="timeline-company">{exp.company}</h5>
                  <p className="timeline-text">{exp.description}</p>
                  
                  {/* TECH TAGS */}
                  <div className="tech-tags">
                    {exp.skills.map((skill, idx) => (
                      <span className="tech-tag" key={idx}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}