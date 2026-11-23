import { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const [percentage, setPercentage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    interval = setInterval(() => {
      setPercentage(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 95);

    timeout = setTimeout(() => {
      setIsComplete(true);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`loading-container ${isComplete ? 'fade-out' : ''}`}>
      <div className="loader">
        <div className="isometric-loader-wrapper">
        <svg className="isometric-svg" viewBox="0 0 400 200">
  <polygon 
    points="200,20 360,100 200,180 40,100" 
    className="base-surface" 
  />
  
  <polygon 
    points="200,20 360,100 200,180 40,100" 
    className="bg-border" 
  />
  
  <path 
    d="M 200,20 L 360,100 L 200,180 L 40,100 Z" 
    className="filling-border"
  />
</svg>

          <div className="loader-content">
            <div className="loader-text">
              {percentage === 0 ? "START" : percentage < 100 ? "LOADING..." : "WELCOME " }
            </div>
            {percentage > 0 && percentage < 100 && (
              <span className="loader-percentage">{percentage}%</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
<<<<<<< HEAD
// Purpose: module documentation
// Note: reviewed for clarity
// Format: normalized spacing
// Structure: annotated
=======
// added line
>>>>>>> origin/main
