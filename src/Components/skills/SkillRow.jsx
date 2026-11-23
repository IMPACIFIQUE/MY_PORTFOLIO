import ProgressBar from "./ProgressBar.jsx";

// One row inside a skill card: icon, name, level/percentage, progress bar.
export default function SkillRow({ skill, level, animate, index }) {
  const Icon = skill.icon;

  return (
    <div className="skill-row">
      <div className="skill-row__top">
        <span className="skill-row__name">
          <span
            className="skill-row__icon"
            style={{ color: skill.color }}
            aria-hidden="true"
          >
            <Icon focusable="false" />
          </span>
          {skill.name}
        </span>

        <span className="skill-row__meta">
          {level} &middot; {skill.value}%
        </span>
      </div>

      <ProgressBar
        value={skill.value}
        animate={animate}
        delay={index * 0.08}
        label={skill.name}
      />
    </div>
  );
}
// added line
