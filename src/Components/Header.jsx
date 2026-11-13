import { useEffect, useRef, useState } from "react";
import "./Header.css";
import cvFile from "../assets/IMANIRUMVA_Pacifique_FlowCV_Resume_2026-04-22.pdf";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const headerRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Keep track of the scroll position and of the section currently in view.
  useEffect(() => {
    const syncHeader = () => {
      setScrolled(window.scrollY > 24);

      const marker = window.innerHeight * 0.34;
      let current = "home";
      let closestTop = -Infinity;

      NAV_LINKS.forEach(({ id }) => {
        const el = document.getElementById(id);

        // Skip sections that are currently hidden (e.g. behind the intro loader).
        if (!el || el.offsetParent === null) return;

        const top = el.getBoundingClientRect().top;

        // The section closest to the marker is the one being read right now.
        if (top <= marker && top > closestTop) {
          closestTop = top;
          current = id;
        }
      });

      const pageHeight = document.documentElement.scrollHeight;
      const atBottom = window.innerHeight + window.scrollY >= pageHeight - 4;

      if (atBottom && pageHeight > window.innerHeight + 40) {
        current = "contact";
      }

      setActive(current);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
    window.addEventListener("resize", syncHeader);

    // The intro loader hides the app at first, so re-measure once the header
    // becomes visible and gets its real size.
    const resizeObserver = new ResizeObserver(syncHeader);
    if (headerRef.current) resizeObserver.observe(headerRef.current);

    return () => {
      window.removeEventListener("scroll", syncHeader);
      window.removeEventListener("resize", syncHeader);
      resizeObserver.disconnect();
    };
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  // Lock the page behind the open mobile menu.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Drop the menu when the viewport grows back to desktop size.
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1081px)");
    const handleChange = (event) => {
      if (event.matches) setMenuOpen(false);
    };

    desktop.addEventListener("change", handleChange);
    return () => desktop.removeEventListener("change", handleChange);
  }, []);

  const handleNavClick = (event, id) => {
    setActive(id);

    if (!menuOpen) return;

    // Close the menu (which unlocks scrolling) before jumping to the section.
    event.preventDefault();
    setMenuOpen(false);

    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <header ref={headerRef} className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <a
          className="brand"
          href="#home"
          aria-label="Pacifique, back to top"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            P
          </span>
          <span className="brand-name">Pacifique</span>
        </a>

        <nav
          id="primary-navigation"
          className={`pill-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : ""}
              onClick={(event) => handleNavClick(event, link.id)}
            >
              {link.label}
            </a>
          ))}

          <a
            className="pill-nav-cv"
            href={cvFile}
            download="IMANIRUMVA_Pacifique_CV.pdf"
            onClick={() => setMenuOpen(false)}
          >
            <i className="fa-solid fa-download" aria-hidden="true"></i>
            Download CV
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="cv-button"
            href={cvFile}
            download="IMANIRUMVA_Pacifique_CV.pdf"
            aria-label="Download CV"
          >
            <i className="fa-solid fa-download" aria-hidden="true"></i>
            <span>Download CV</span>
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? "is-active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="nav-scrim" aria-hidden="true" onClick={() => setMenuOpen(false)} />
      )}
    </header>
  );
}
