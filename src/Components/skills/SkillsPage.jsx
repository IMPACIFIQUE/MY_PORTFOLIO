import { MotionConfig } from "framer-motion";
import TechUniverse from "./TechUniverse.jsx";
import SkillCard from "./SkillCard.jsx";
import { skillsData } from "./skillsData.js";
import "./SkillsPage.css";

// The Skills page is made of two parts:
// 1. The "My Tech Universe" logo grid.
// 2. The skill cards with animated progress bars.
export default function SkillsPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="skills-page">
        <TechUniverse />

        <section className="skills-cards-section" aria-label="Skill details">
          <div className="skills-grid">
            {skillsData.map((category, index) => (
              <SkillCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
// added line
