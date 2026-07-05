import React from "react";
import "./Skills.css";

export default function Skills() {
  // Your explicit language data with percentage values
  const languages = [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 92 },
    { name: "JavaScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "PHP", level: 70 },
  ];

  // Your Frameworks, Design Tools, and Version Control systems grouped logically
  const techStack = [
    { category: "Frameworks & Libraries", items: ["React.js", "Vue.js", "Vite"] },
    { category: "UI/UX & Design Tools", items: ["Figma", "Adobe Photoshop", "Adobe Illustrator"] },
    { category: "Tools & Architectures", items: ["Git Version Control", "GitHub", "RESTful APIs"] },
  ];

  return (
    <div className="skills-page-container">
      <section className="skills-page-content">
        <h1 className="skills-page-title">MY TECH STACK & SKILLS</h1>
        <p className="skills-subtitle-text">
          A representation of my current technical proficiency, tools, and developer ecosystem.
        </p>

        {/* --- CORE LANGUAGES (CIRCULAR VISUAL METRICS) --- */}
        <h2 className="section-divider-title">Core Competencies</h2>
        <div className="languages-metric-grid">
          {languages.map((lang, index) => {
            // Calculating SVG stroke dashoffset based on 100% scale circumference (251.2)
            const radius = 40;
            const circumference = 2 * Math.PI * radius;
            const strokeDashoffset = circumference - (lang.level / 100) * circumference;

            return (
              <div className="language-metric-card" key={index}>
                <div className="circle-progress-wrapper">
                  <svg className="progress-svg" width="100" height="100">
                    <circle className="bg-circle" cx="50" cy="50" r={radius} />
                    <circle
                      className="fg-circle"
                      cx="50"
                      cy="50"
                      r={radius}
                      style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: strokeDashoffset,
                      }}
                    />
                  </svg>
                  <span className="percentage-display">{lang.level}%</span>
                </div>
                <h3>{lang.name}</h3>
              </div>
            );
          })}
        </div>

        {/* --- FRAMEWORKS, DESIGN & ECOSYSTEM STACK --- */}
        <h2 className="section-divider-title">Frameworks & Tools Architecture</h2>
        <div className="stack-grid-layout">
          {techStack.map((stack, idx) => (
            <div className="stack-card" key={idx}>
              <h3>{stack.category}</h3>
              <div className="tag-cloud">
                {stack.items.map((item, itemIdx) => (
                  <span className="tech-tag" key={itemIdx}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}