import { motion } from "framer-motion";

// A rounded track with a purple-blue fill that animates from 0 to "value".
export default function ProgressBar({ value, animate, delay = 0, label }) {
  return (
    <div
      className="skill-progress"
      role="progressbar"
      aria-label={`${label} proficiency`}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
    >
      <motion.div
        className="skill-progress__fill"
        initial={{ width: 0 }}
        animate={{ width: animate ? `${value}%` : 0 }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />
    </div>
  );
}
// added line
