
import { useState, useEffect } from "react";
import "./Home.css";
import profilePic from "../assets/profile.png";

export default function Home() {
  const titles = [
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitleIndex];

    if (!isDeleting && currentText === fullText) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        isDeleting
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1)
      );
    }, isDeleting ? 45 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  return (
    <div className="home-container">

      {/* Background decorations */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>
      <div className="dots dots-left"></div>
      <div className="dots dots-right"></div>

      {/* Hero content */}
      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="intro">

          <div className="availability">
            <span className="status-dot"></span>
            Available for Work
          </div>

          <h1>
            Hi, I'm <br />
            <span className="gradient-name">
              IMANIRUMVA Pacifique
            </span>
          </h1>

          <h2>
            {currentText}
            <span className="typing-cursor"></span>
          </h2>

          <p className="description">
            I build modern, responsive and user-friendly web
            applications with a passion for clean code,
            creative solutions and great design.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              &lt;/&gt; View My Projects <span>→</span>
            </a>

            <a href="#contact" className="secondary-button">
              ✉ Contact Me
            </a>

          </div>

          {/* Statistics */}
          <div className="statistics">

            <div className="stat">
              <span className="stat-icon">🏆</span>
              <div>
                <strong>2+</strong>
                <small>Years<br />Experience</small>
              </div>
            </div>

            <div className="stat">
              <span className="stat-icon">💼</span>
              <div>
                <strong>5+</strong>
                <small>Live<br />Projects</small>
              </div>
            </div>

            <div className="stat">
              <span className="stat-icon">&lt;/&gt;</span>
              <div>
                <strong>100%</strong>
                <small>Clean Code</small>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - PROFILE */}
        <div className="profile-area">

          <div className="profile-circle"></div>
          <div className="profile-glow"></div>

          <img
            src={profilePic}
            alt="Pacifique - Full Stack Developer"
            className="profile-image"
          />

          {/* Floating technology icons */}
          <div className="tech-icon react-icon">⚛</div>

          <div className="tech-icon vue-icon">V</div>

          <div className="tech-icon js-icon">JS</div>

          <div className="tech-icon node-icon">
            ⬡
            <small>Node</small>
          </div>

          <div className="tech-icon git-icon">◆</div>

        </div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="scroll-indicator">
        <span>↓</span>
        <small>Scroll Down</small>
      </a>

      {/* Bottom decorations */}
      <div className="bottom-wave"></div>
      <div className="bottom-wave second-wave"></div>

    </div>
  );
}
