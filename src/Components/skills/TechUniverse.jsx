import TechLogo from "./TechLogo.jsx";
import { techLogos } from "./skillsData.js";

// The dark slate top panel with the logo grid.
export default function TechUniverse() {
  return (
    <section className="tech-universe" aria-labelledby="tech-universe-title">
      <div className="tech-universe__inner">
        <header className="tech-universe__header">
          <h2 id="tech-universe-title" className="tech-universe__title">
            My Tech Universe
          </h2>
          <p className="tech-universe__subtitle">
            Technologies I use to build modern web applications.
          </p>
        </header>

        <div className="tech-logo-grid">
          {techLogos.map((tech) => (
            <TechLogo key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
// added line
