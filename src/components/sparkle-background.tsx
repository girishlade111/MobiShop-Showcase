"use client";

import React, { useState, useEffect } from 'react';

const SparkleBackground: React.FC = () => {
  const [sparkles, setSparkles] = useState<any[]>([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 30 }).map(() => ({
        id: Math.random(),
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 5 + 5}s`,
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 10000); // Regenerate sparkles every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
          }}
        />
      ))}
    </div>
  );
};

export default SparkleBackground;
