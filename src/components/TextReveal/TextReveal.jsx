import React, { useRef, useEffect, useState } from 'react';
import './textReveal.css'; 

const TextReveal = ({ children }) => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Adjust as needed
    });

    let current = textRef.current

    if (current) {
      observer.observe(current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return <div ref={textRef} className={`reveal-text ${isVisible ? 'visible' : ''}`}>{children}</div>;
};

export default TextReveal;