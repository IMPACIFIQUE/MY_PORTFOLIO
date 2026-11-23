import { useEffect, useRef, useState } from "react";

// Counts from 0 up to "end" and keeps the suffix ("+" or "%") visible.
export default function Counter({ end = 0, suffix = "", duration = 2000 }) {
  // Start at the final value when the visitor prefers reduced motion.
  const [count, setCount] = useState(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return end;
    }

    return 0;
  });
  const counterRef = useRef(null);

  useEffect(() => {
    const element = counterRef.current;

    if (!element) return undefined;

    // If the visitor prefers less motion, the final number is already shown.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let frameId;
    let startTime;
    let started = false;

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

    const startCounting = () => {
      if (started) return; // The animation runs only once.
      started = true;
      frameId = requestAnimationFrame(animate);
    };

    // Fallback for browsers that do not support IntersectionObserver.
    if (typeof IntersectionObserver === "undefined") {
      startCounting();
      return () => cancelAnimationFrame(frameId);
    }

    // Start counting when the stat scrolls into view.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [end, duration]);

  return (
    <span ref={counterRef} className="stat-value">
      {count}
      {suffix}
    </span>
  );
}
// Purpose: module documentation
// Note: reviewed for clarity
