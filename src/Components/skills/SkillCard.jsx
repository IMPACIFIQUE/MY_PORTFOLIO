import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SkillRow from "./SkillRow.jsx";
import { getSkillLevel } from "./skillsData.js";

// One category card. The IntersectionObserver tells the progress bars
// inside this card when the card has scrolled into view.
export default function SkillCard({ category, index }) {
  const cardRef = useRef(null);
  const [barsVisible, setBarsVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;

    const card = cardRef.current;
    if (!card) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setBarsVisible(true);
          observer.disconnect(); // Animate only the first time.
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.article
      ref={cardRef}
      className="skill-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
    >
      <h3 className="skill-card__title">{category.title}</h3>
      <div className="skill-card__divider" aria-hidden="true" />

      <div className="skill-card__list">
        {category.skills.map((skill, skillIndex) => (
          <SkillRow
            key={skill.name}
            skill={skill}
            level={getSkillLevel(skill.value)}
            animate={barsVisible}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.article>
  );
}
// added line
