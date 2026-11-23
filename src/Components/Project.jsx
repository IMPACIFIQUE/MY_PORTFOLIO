import React from 'react';
import "./Project.css";

export default function Projects() {
  const myProjects = [
    {
      id: 1,
      title: "JOB_QUEST",
      description: "An advanced job search and recruitment platform designed to connect top talents with premium companies through smart filtering and seamless applications.",
      techStack: ["React", "PHP", "Javascript", "Git"],
      link: "https://github.com/PACIFIQUEVIBUCODER"
    },
    {
      id: 2,
      title: "Smart Company",
      description: "An enterprise resource planning (ERP) system tailored for modern businesses to manage workflows, monitor employee tasks, and streamline reporting.",
      techStack: ["Vue.js", "PHP", "Database Management", "UI Design"],
      link: "https://github.com/PACIFIQUEVIBUCODER"
    },
    {
      id: 3,
      title: "Student Management System",
      description: "A secure and fast administrative portal engineered to track student academic profiles, manage grading, and generate institutional analytics.",
      techStack: ["React", "RESTful APIs", "Javascript", "HTML"],
      link: "https://github.com/PACIFIQUEVIBUCODER"
    }
  ];

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title">MY PROJECTS</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-grid">
        {myProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-glow"></div>
            <div className="project-content">
              <span className="project-number">0{project.id}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer" 
                className="view-project-link"
              >
                View Details <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// added line
