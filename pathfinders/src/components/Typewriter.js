import React, { useState, useEffect } from 'react';
import '../css/Typewriter.css';

const Typewriter = ({ texts = [], typingSpeed = 150, deletingSpeed = 75, pause = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      } else {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }

      // switch modes or texts
      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, texts, currentTextIndex, typingSpeed, deletingSpeed, pause]);

  return (
    <span className="typewriter-text">
      {displayText}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;