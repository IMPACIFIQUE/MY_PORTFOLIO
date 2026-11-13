import { useEffect, useState } from "react";
import "./Home.css";
import portrait from "../assets/pc.png";

const ROLES = [
  "Full-Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "React Developer",
];

const STATS = [
  { icon: "fa-solid fa-trophy", tone: "gold", value: "2+", label: "Years Experience" },
  { icon: "fa-solid fa-briefcase", tone: "pink", value: "5+", label: "Live Projects" },
  { icon: "fa-solid fa-code", tone: "violet", value: "100%", label: "Clean Code" },
];

const TECH = [
  { key: "react", name: "React", className: "chip-react" },
  { key: "vue", name: "Vue.js", className: "chip-vue" },
  { key: "js", name: "JavaScript", className: "chip-js" },
  { key: "node", name: "Node.js", className: "chip-node" },
  { key: "php", name: "PHP", className: "chip-php" },
];

function TechIcon({ name }) {
  if (name === "react") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="#61dafb" />
        <g fill="none" stroke="#61dafb" strokeWidth="1" strokeLinecap="round">
          <ellipse cx="12" cy="12" rx="10.4" ry="4.1" />
          <ellipse cx="12" cy="12" rx="10.4" ry="4.1" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10.4" ry="4.1" transform="rotate(120 12 12)" />
        </g>
      </svg>
    );
  }

  if (name === "vue") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M1.8 3.2h4.4L12 12.6l5.8-9.4h4.4L12 21.2 1.8 3.2Z" fill="#41b883" />
        <path d="M6.2 3.2h2.6L12 8.6l3.2-5.4h2.6L12 14 6.2 3.2Z" fill="#35495e" />
      </svg>
    );
  }

  if (name === "js") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="1.5" y="1.5" width="21" height="21" rx="4" fill="#f7df1e" />
        <text
          x="12"
          y="16.6"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="10"
          fontWeight="700"
          fill="#131a24"
        >
          JS
        </text>
      </svg>
    );
  }

  if (name === "node") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2.2 20.7 7v10L12 21.8 3.3 17V7L12 2.2Z"
          fill="none"
          stroke="#7bd14a"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <text
          x="12"
          y="14.1"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="5.2"
          fontWeight="700"
          fill="#9be36d"
        >
          node
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <ellipse
        cx="12"
        cy="12"
        rx="10.6"
        ry="6.2"
        fill="rgba(99, 102, 241, 0.16)"
        stroke="#8892bf"
        strokeWidth="1.4"
      />
      <text
        x="12"
        y="14.2"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="6"
        fontWeight="700"
        fill="#b9c6ff"
      >
        php
      </text>
    </svg>
  );
}

export default function Home() {
  const [typed, setTyped] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? ROLES[0]
      : ""
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return undefined;

    const fullText = ROLES[roleIndex];
    const isComplete = typed === fullText;
    let delay = isDeleting ? 45 : 90;

    if (isComplete && !isDeleting) delay = 2000;

    const timer = setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
      } else if (isDeleting && typed === "") {
        setIsDeleting(false);
        setRoleIndex((index) => (index + 1) % ROLES.length);
      } else {
        setTyped(
          isDeleting ? fullText.slice(0, typed.length - 1) : fullText.slice(0, typed.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [typed, isDeleting, roleIndex]);

  const [firstWord, ...remainingWords] = typed.split(" ");
  const restOfRole = remainingWords.join(" ");

  return (
    <div className="hero">
      {/* ---------------------- Background ---------------------- */}
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-orb hero-orb--purple"></span>
        <span className="hero-orb hero-orb--blue"></span>
        <span className="hero-dots hero-dots--tl"></span>
        <span className="hero-dots hero-dots--br"></span>
      </div>

      <div className="hero-inner">
        {/* --------------------- Introduction -------------------- */}
        <div className="hero-copy">
          <span className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true"></span>
            Available for Work
          </span>

          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I&apos;m</span>
            <span className="hero-name">IMANIRUMVA Pacifique</span>
          </h1>

          <p className="hero-role">
            <span className="sr-only">Full-Stack Developer</span>
            <span className="hero-role-text" aria-hidden="true">
              <span className="role-plain">{firstWord}</span>
              {restOfRole && <span className="role-accent">{restOfRole}</span>}
              <span className="role-cursor"></span>
            </span>
          </p>

          <p className="hero-text">
            I build modern, responsive and user-friendly web applications with passion for clean
            code and great design.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              <span className="btn-code" aria-hidden="true">
                {"</>"}
              </span>
              View My Projects
              <i className="fa-solid fa-arrow-right btn-arrow" aria-hidden="true"></i>
            </a>

            <a className="btn btn-ghost" href="#contact">
              <i className="fa-regular fa-envelope" aria-hidden="true"></i>
              Contact Me
            </a>
          </div>

          <div className="hero-stats">
            {STATS.map((stat) => (
              <div className={`stat stat--${stat.tone}`} key={stat.label}>
                <i className={`${stat.icon} stat-icon`} aria-hidden="true"></i>
                <div className="stat-body">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------ Portrait ---------------------- */}
        <div className="hero-visual">
          <div className="portrait-stage">
            <span className="portrait-halo" aria-hidden="true"></span>
            <span className="portrait-ring portrait-ring--outer" aria-hidden="true"></span>
            <span className="portrait-ring portrait-ring--dashed" aria-hidden="true"></span>
            <span className="portrait-ring portrait-ring--inner" aria-hidden="true"></span>

            <img
              className="portrait-img"
              src={portrait}
              alt="Imanirumva Pacifique, full-stack developer"
            />

            <div className="tech-chips" aria-hidden="true">
              {TECH.map((tech) => (
                <span className={`tech-chip ${tech.className}`} key={tech.key}>
                  <TechIcon name={tech.key} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#about" aria-label="Scroll down to the about section">
        <span className="scroll-circle" aria-hidden="true">
          <i className="fa-solid fa-arrow-down"></i>
        </span>
        <span className="scroll-label">Scroll Down</span>
      </a>

      {/* --------------------- Bottom wave ---------------------- */}
      <div className="hero-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroWaveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#6d28d9" stopOpacity="0" />
              <stop offset="32%" stopColor="#7c3aed" stopOpacity="0.75" />
              <stop offset="68%" stopColor="#4f46e5" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#2563eb" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M0 100 C 250 152, 470 44, 720 82 C 980 122, 1180 50, 1440 98 V160 H0 Z"
            fill="url(#heroWaveGradient)"
          />
          <path
            d="M0 100 C 250 152, 470 44, 720 82 C 980 122, 1180 50, 1440 98"
            fill="none"
            stroke="#b794ff"
            strokeOpacity="0.45"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </div>
  );
}
