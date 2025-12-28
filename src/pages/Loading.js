import React, { useState, useEffect } from 'react';
import '../styles/Loading.css';

const Loading = ({ onComplete, duration = 4000 }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const loadingMessages = [
    "Crafting something beautiful...",
    "Arranging pixels perfectly...",
    "Adding some magic touches...",
    "Almost ready for you..."
  ];

  const loadingSteps = [
    { target: 15, delay: 200 },
    { target: 35, delay: 400 },
    { target: 60, delay: 300 },
    { target: 85, delay: 500 },
    { target: 100, delay: 300 }
  ];

  useEffect(() => {
    let stepIndex = 0;
    let currentProgress = 0;

    const updateProgress = () => {
      if (stepIndex >= loadingSteps.length) return;

      const step = loadingSteps[stepIndex];
      const increment = (step.target - currentProgress) / 20;

      const progressAnimation = setInterval(() => {
        currentProgress += increment;
        if (currentProgress >= step.target) {
          currentProgress = step.target;
          clearInterval(progressAnimation);
          stepIndex++;
          if (stepIndex < loadingSteps.length) {
            setTimeout(updateProgress, step.delay);
          }
        }

        setProgress(Math.round(currentProgress));

        if (currentProgress >= 100 && !isComplete) {
          setIsComplete(true);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              onComplete();
            }, 800);
          }, 500);
        }
      }, 50);
    };

    const progressTimeout = setTimeout(updateProgress, 800);

    return () => clearTimeout(progressTimeout);
  }, [isComplete, onComplete]);

  // Rotate messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    return () => clearInterval(messageInterval);
  }, [loadingMessages.length]);

  const handleSkip = () => {
    setProgress(100);
    setIsComplete(true);
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div 
      className={`loading-container ${fadeOut ? 'fade-out' : ''}`}
      onClick={handleSkip}
    >
      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape shape-1" />
        <div className="shape shape-2" />
        <div className="shape shape-3" />
      </div>

      {/* Bouncing Dots */}
      <div className="bouncing-dots">
        <div className="dot dot-1" />
        <div className="dot dot-2" />
        <div className="dot dot-3" />
      </div>

      {/* Loading Text */}
      <div className="loading-text">
        {loadingMessages[messageIndex]}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="percentage">
        {progress}%
      </div>

      {/* Skip hint */}
      <div className="skip-hint">
        Click anywhere to skip
      </div>
    </div>
  );
};

export default Loading;