
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">

      {/* Logo */}
      <a href="#home" className="header-logo" onClick={closeMenu}>
        <span className="logo-icon">P</span>
        <span>Pacifique</span>
      </a>

      {/* Navigation */}
      <nav className={`navbar ${menuOpen ? "show" : ""}`}>

        <a href="#home" className="active" onClick={closeMenu}>
          <span>⌂</span> Home
        </a>

        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

      </nav>

      {/* Download CV */}
      <a href="/cv.pdf" className="header-cv" download>
        <span>↓</span> Download CV
      </a>

      {/* Mobile Menu */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </header>
  );
}
