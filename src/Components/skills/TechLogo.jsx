import { motion } from "framer-motion";

// A single logo in the "My Tech Universe" grid.
// It is grey by default and gets its brand color on hover.
export default function TechLogo({ tech }) {
  const Icon = tech.icon;

  return (
    <motion.div
      className="tech-logo"
      style={{ "--brand-color": tech.color }}
      whileHover={{ y: -8, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <span className="tech-logo__icon">
        <Icon aria-hidden="true" focusable="false" />
      </span>
      <span className="tech-logo__name">{tech.name}</span>
    </motion.div>
  );
}
// added line
