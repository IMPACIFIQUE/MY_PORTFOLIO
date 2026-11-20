import { useEffect, useState } from "react";

// Counts from 0 up to "end" and keeps the suffix ("+" or "%") visible.
export default function Counter({ end = 0, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frameId;
    let startTime;

    // requestAnimationFrame keeps the count smooth on every screen refresh.
    const animate = (time) => {
      if (startTime === undefined) startTime = time;

      const progress = Math.min((time - startTime) / duration, 1);

      // Ease-out: moves quickly at first, then slows down near the end.
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.round(eased * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [end, duration]);

  return (
    <span className="stat-value">
      {count}
      {suffix}
    </span>
  );
}
