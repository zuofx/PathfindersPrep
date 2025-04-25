import React, { useState } from 'react';
import '../css/Member.css';
import linkedinIcon from '../assets/linkedin.webp';

const Member = ({ name, filename, tag, link, objectPosition, expanded, toggleExpand }) => {
  const [direction, setDirection] = useState('right');

  let headshot;
  try {
    headshot = require('../assets/' + filename);
  } catch {
    headshot = undefined;
  }

  const handleToggle = (e) => {
    e.stopPropagation();
    if (!expanded) {
      const rect = e.currentTarget.getBoundingClientRect();
      const panelWidth = rect.width;
      const spaceRight = window.innerWidth - rect.right;
      setDirection(spaceRight >= panelWidth ? 'right' : 'left');
    }
    toggleExpand();
  };

  return (
    <div className="member-card" onClick={handleToggle}>
      <div className="member-basic">
        <img
          src={headshot}
          alt={`${name} headshot`}
          className="member-photo"
          style={{ objectPosition }}
        />
        <h2 className="member-name">{name}</h2>
      </div>

      <div
        className={`member-details ${expanded ? `open open-${direction}` : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="member-tag">{tag}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={linkedinIcon} alt="LinkedIn" className="linkedin-icon" />
        </a>
      </div>
    </div>
  );
};

export default Member;
