import { useState } from "react";
import { motion } from "framer-motion";
import "./Project.css";

const myProjects = [
  {
    id: 1,
    title: "JOB_QUEST",
    category: "Web App",
    description:
      "An advanced job search and recruitment platform designed to connect top talents with premium companies through smart filtering and seamless applications.",
    techStack: ["React", "PHP", "JavaScript", "Git"],
    image: "/Artboard.png",
    live: "https://github.com/PACIFIQUEVIBUCODER",
    github: "https://github.com/PACIFIQUEVIBUCODER",
    status: "Live",
    featured: true,
  },
  {
    id: 2,
    title: "Smart Company",
    category: "ERP System",
    description:
      "An enterprise resource planning (ERP) system tailored for modern businesses to manage workflows, monitor employee tasks, and streamline reporting.",
    techStack: ["Vue.js", "PHP", "Database Management", "UI Design"],
    image: "/Asset.png",
    live: "https://github.com/PACIFIQUEVIBUCODER",
    github: "https://github.com/PACIFIQUEVIBUCODER",
    status: "Live",
    featured: false,
  },
  {
    id: 3,
    title: "Student Management System",
    category: "Admin Portal",
    description:
      "A secure and fast administrative portal engineered to track student academic profiles, manage grading, and generate institutional analytics.",
    techStack: ["React", "RESTful APIs", "JavaScript", "HTML"],
    image: "/profile.png",
    live: "https://github.com/PACIFIQUEVIBUCODER",
    github: "https://github.com/PACIFIQUEVIBUCODER",
    status: "Live",
    featured: false,
  },
];

const categories = ["All", ...Array.from(new Set(myProjects.map((p) => p.category)))];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [activeImage, setActiveImage] = useState(null);

  const filtered =
    filter === "All" ? myProjects : myProjects.filter((p) => p.category === filter);

  return (
    <div className="projects-container">
      <motion.div
        className="projects-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        <span className="projects-eyebrow">
          <span className="projects-eyebrow-dot" aria-hidden="true" />
          Selected Work
        </span>
        <h2 className="projects-title">MY PROJECTS</h2>
        <p className="projects-subtitle">
          A curated collection of products I have designed and built, from job
          platforms to enterprise systems. Each one solves a real problem.
        </p>
        <div className="title-underline" />
      </motion.div>

      <motion.div
        className="projects-filters"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`filter-chip ${filter === cat ? "is-active" : ""}`}
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {filtered.map((project, index) => (
          <motion.article
            key={project.id}
            className={`project-card ${project.featured ? "is-featured" : ""}`}
            variants={fadeUp}
            custom={index}
            whileHover={{ y: -8 }}
          >
            <div className="project-card-glow" aria-hidden="true" />

            <div
              className="project-thumb"
              onClick={() => setActiveImage(project.image)}
              role="button"
              tabIndex={0}
              aria-label={`Preview ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveImage(project.image);
              }}
            >
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement.classList.add("thumb-fallback");
                }}
              />
              <div className="thumb-overlay" aria-hidden="true">
                <span className="thumb-zoom">
                  <i className="fa-solid fa-magnifying-glass-plus" />
                </span>
              </div>
              <span className={`project-status status-${project.status.toLowerCase()}`}>
                {project.status}
              </span>
              <span className="project-number">0{project.id}</span>
            </div>

            <div className="project-content">
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn--primary"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn project-btn--ghost"
                >
                  <i className="fa-brands fa-github" aria-hidden="true" />
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {activeImage && (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
        >
          <button
            type="button"
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close preview"
          >
            <i className="fa-solid fa-xmark" />
          </button>
          <img src={activeImage} alt="Project preview" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}