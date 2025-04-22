import React, { useState, useEffect } from 'react';
import Member from '../components/Member';
import '../css/OurTeam.css';

const teamData = [
  { name: 'Wesley Kwan', filename: 'wesley-kwan.jpg', tag: "Queen's 3rd Year Health Sciences; LSAT: 175 (99.5th Percentile)", link: 'https://www.linkedin.com/in/wesleykwan10/' },
  { name: 'Andy Ganea',  filename: 'andy-ganea.png',     tag: "Queen's 3rd Year Health Sciences; MCAT: 521 (98th Percentile)", link: 'https://www.linkedin.com/in/andrewganea/' },
  { name: 'Jerron Zhang',filename: 'jerron-zhang.png',  tag: "Queen's 3rd Year Health Sciences; MCAT: 521 (98th Percentile)", link: 'https://www.linkedin.com/in/jerron-zhang-bb830b245/' },
  { name: 'Felix Xu',    filename: 'felix-xu.png',      tag: "Queen's 3rd Year Health Sciences; MCAT: 523 (99th Percentile), CASPER: 4th Quartile", link: 'https://www.linkedin.com/in/felix-xu2004-/' },
  { name: 'Nathan Lai',  filename: 'nathan-lai.jpg',    tag: "Queen's 3rd Year Health Sciences; MCAT: 517 (94th Percentile), CASPER: 4th Quartile", link: 'https://www.linkedin.com/in/nathan-lai-20b37a280/' },
  { name: 'Grace Kim',   filename: 'grace-kim.jpg',     tag: "Queen's 3rd Year Health Sciences; CASPER: 4th Quartile", link: 'https://www.linkedin.com/in/grace-kim-357362264/' },
  { name: 'Julie Choi',  filename: 'julie-choi.png',    tag: "Queen's 3rd Year Health Sciences; CASPER: 4th Quartile", link: 'https://www.linkedin.com/in/julie-choi-383846270/' },
  { name: 'Ethan Ko',    filename: 'ethan-ko.jpg',      tag: "McMaster 3rd Year Integrated Biomedical Engineering and Health Sciences; DAT", link: 'https://www.linkedin.com/in/ethan--ko/' },
  { name: 'Dylan Kwan',  filename: 'dylan-kwan.jpg',    tag: "Queen's 3rd Year Health Sciences; MCAT", link: 'https://www.linkedin.com/in/dylankwann/' },
  { name: 'Sarah Karami',filename: 'sarah-karami.jpg', tag: "Queen's 3rd Year Health Sciences; DAT: (99.7th Percentile)", link: 'https://www.linkedin.com/in/sarah-karami-4b3143220/' },
  { name: 'Daniel Wang', filename: 'daniel-wang.jpg',  tag: "Queen's 3rd Year Health Sciences; CASPER: 4th Quartile", link: 'https://www.linkedin.com/in/danielhfwang/' },
];

const OurTeam = () => {
    const [expandedSet, setExpandedSet] = useState(new Set());
  
    const toggleExpand = (idx) => {
      setExpandedSet(prev => {
        const next = new Set(prev);
        if (next.has(idx)) next.delete(idx);
        else next.add(idx);
        return next;
      });
    };
  
    return (
      <div className="ourteam">
        <h1>Meet Our Amazing Team!</h1>
        <div className="team-members">
          {teamData.map((member, idx) => (
            <div
              key={idx}
              className={`member-wrapper ${expandedSet.has(idx) ? 'expanded' : ''}`}
            >
              <Member
                {...member}
                expanded={expandedSet.has(idx)}
                toggleExpand={() => toggleExpand(idx)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurTeam;