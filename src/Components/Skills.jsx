import React from "react";
import "./Skills.css";

const SkillsCard = () => {
  return (
    <div className="skills-card">
      <div className="skills-header">
        <h1>⚡ dev · proficiency</h1>
        <div className="sub">horizontal metrics · ecosystem cards</div>
      </div>

      <div className="section-title">
        <i className="fas fa-code"></i> core competencies 
      </div>

      <div className="bars-grid">
        <div className="skill-bar-item">
          <div className="skill-bar-meta">
            <span className="skill-name"><i className="fab fa-html5"></i> HTML5</span>
            <span className="percentage">95%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "95%" }}></div>
          </div>
        </div>
       
        <div className="skill-bar-item">
          <div className="skill-bar-meta">
            <span className="skill-name"><i className="fab fa-css3-alt"></i> CSS3</span>
            <span className="percentage">92%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "92%" }}></div>
          </div>
        </div>
      
        <div className="skill-bar-item">
          <div className="skill-bar-meta">
            <span className="skill-name"><i className="fab fa-js"></i> JavaScript</span>
            <span className="percentage">90%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "90%" }}></div>
          </div>
        </div>
    
        <div className="skill-bar-item">
          <div className="skill-bar-meta">
            <span className="skill-name"><i className="fab fa-react"></i> React</span>
            <span className="percentage">85%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "85%" }}></div>
          </div>
        </div>
        <div className="skill-bar-item">
          <div className="skill-bar-meta">
            <span className="skill-name"><i className="fab fa-vuejs"></i> Vue.js</span>
            <span className="percentage">82%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "82%" }}></div>
          </div>
        </div>
        <div className="skill-bar-item">
          <div className="skill-bar-meta">
            <span className="skill-name"><i className="fab fa-php"></i> PHP</span>
            <span className="percentage">75%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "75%" }}></div>
          </div>
        </div>
      </div>

      <div className="divider-light"></div>

      <div className="section-title" style={{ marginTop: "2.2rem" }}>
        <i className="fas fa-server"></i> stack · database & backend <small>specialized cards</small>
      </div>

      <div className="cards-grid">
        <div className="tech-card">
          <div className="card-icon"><i className="fas fa-database"></i></div>
          <h3>Database</h3>
          <div className="badge-list">
            <span><i className="fas fa-check-circle"></i> PostgreSQL</span>
            <span><i className="fas fa-check-circle"></i> MongoDB</span>
            <span><i className="fas fa-check-circle"></i> Redis</span>
          </div>
        
        </div>

        <div className="tech-card">
          <div className="card-icon"><i className="fas fa-cloud-upload-alt"></i></div>
          <h3>Backend</h3>
          <div className="badge-list">
            <span><i className="fas fa-check-circle"></i> Node.js</span>
            <span><i className="fas fa-check-circle"></i> Express</span>
            <span><i className="fas fa-check-circle"></i> Laravel</span>
            <span><i className="fas fa-check-circle"></i> Django</span>
            <span><i className="fas fa-check-circle"></i> RESTful APIs</span>
          </div>
        
        </div>

        <div className="tech-card">
          <div className="card-icon"><i className="fas fa-tools"></i></div>
          <h3>DevOps & Tools</h3>
          <div className="badge-list">
            <span><i className="fas fa-check-circle"></i> Docker</span>
            <span><i className="fas fa-check-circle"></i> Git / GitHub</span>
            <span><i className="fas fa-check-circle"></i> Vite</span>
            <span><i className="fas fa-check-circle"></i> AWS EC2</span>
          </div>
          
        </div>
      </div>

      <div className="cards-grid" style={{ marginTop: "1rem" }}>
        <div className="tech-card">
          <div className="card-icon"><i className="fas fa-paint-brush"></i></div>
          <h3>UI/UX & Design</h3>
          <div className="badge-list">
            <span><i className="fas fa-check-circle"></i> Figma</span>
            <span><i className="fas fa-check-circle"></i> Adobe XD</span>
            <span><i className="fas fa-check-circle"></i> Photoshop</span>
            <span><i className="fas fa-check-circle"></i> Illustrator</span>
          </div>
         
        </div>
        <div className="tech-card">
          <div className="card-icon"><i className="fas fa-code-branch"></i></div>
          <h3>Version Control</h3>
          <div className="badge-list">
            <span><i className="fas fa-check-circle"></i> Git</span>
            <span><i className="fas fa-check-circle"></i> GitHub Actions</span>
            <span><i className="fas fa-check-circle"></i> GitFlow</span>
            <span><i className="fas fa-check-circle"></i> Semantic Release</span>
          </div>
         
        </div>
        <div className="tech-card">
          <div className="card-icon"><i className="fas fa-cloud"></i></div>
          <h3>Cloud & Deployment</h3>
          <div className="badge-list">
            <span><i className="fas fa-check-circle"></i> Vercel</span>
            <span><i className="fas fa-check-circle"></i> Netlify</span>
            <span><i className="fas fa-check-circle"></i> Heroku</span>
            <span><i className="fas fa-check-circle"></i> AWS S3</span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;