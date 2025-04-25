import React, { useState, useEffect } from 'react';
import Member from '../components/Member';
import '../css/OurTeam.css';

import instagramIcon from '../assets/instagram.svg';
import phoneIcon     from '../assets/phone.svg';
import emailIcon     from '../assets/email.svg';

const teamData = [
  { name: 'Wesley Kwan', filename: 'wesley-kwan.jpg', tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences<br/><strong>LSAT</strong>: 175 (99.5th Percentile)</>), link: 'https://www.linkedin.com/in/wesleykwan10/', objectPosition: "center" },
  { name: 'Andy Ganea',  filename: 'andy-ganea.png',     tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>MCAT</strong>: 521 (98th Percentile)</>), link: 'https://www.linkedin.com/in/andrewganea/', objectPosition: "0% 20%"  },
  { name: 'Jerron Zhang',filename: 'jerron-zhang.png',  tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>MCAT</strong>: 521 (98th Percentile)</>), link: 'https://www.linkedin.com/in/jerron-zhang-bb830b245/', objectPosition: "0% 25%"  },
  { name: 'Felix Xu',    filename: 'felix-xu.png',      tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>MCAT</strong>: 523 (99th Percentile)<br/> <strong>CASPER</strong>: 4th Quartile</>), link: 'https://www.linkedin.com/in/felix-xu2004-/', objectPosition: "0% 30%" },
  { name: 'Nathan Lai',  filename: 'nathan-lai.jpg',    tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>MCAT</strong>: 517 (94th Percentile)<br/> <strong>CASPER</strong>: 4th Quartile</>), link: 'https://www.linkedin.com/in/nathan-lai-20b37a280/', objectPosition: "0% 20%"  },
  { name: 'Grace Kim',   filename: 'grace-kim.jpg',     tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>CASPER</strong>: 4th Quartile</>), link: 'https://www.linkedin.com/in/grace-kim-357362264/', objectPosition: "0% 5%"  },
  { name: 'Julie Choi',  filename: 'julie-choi.png',    tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>CASPER</strong>: 4th Quartile</>), link: 'https://www.linkedin.com/in/julie-choi-383846270/', objectPosition: "0% 10%"  },
  { name: 'Ethan Ko',    filename: 'ethan-ko.jpg',      tag: (<><strong>Program: </strong>McMaster 3rd Year Integrated Biomedical Engineering and Health Sciences<br/> <strong>DAT Prep</strong></>), link: 'https://www.linkedin.com/in/ethan--ko/' },
  { name: 'Dylan Kwan',  filename: 'dylan-kwan.jpg',    tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>MCAT Prep</strong></>), link: 'https://www.linkedin.com/in/dylankwann/' },
  { name: 'Sarah Karami',filename: 'sarah-karami.jpg', tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>DAT</strong>: (99.7th Percentile)</>), link: 'https://www.linkedin.com/in/sarah-karami-4b3143220/' },
  { name: 'Daniel Wang', filename: 'daniel-wang.jpg',  tag: (<><strong>Program: </strong>Queen's 3rd Year Health Sciences <strong>CASPER</strong>: 4th Quartile</>), link: '/' },
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

        <div className="footer">
        <p className="footer-message">
          Feel free to contact us and book an initial consultation!
        </p>
        <div className="footer-contact-info">
          <div className="footer-contact-item">
            <img
                                src={instagramIcon}
                                alt='Instagram'
                                className='footer-contact-icon'
                            />
            <a href="https://www.instagram.com/pathfindersprep" target="_blank" rel="noopener noreferrer" className="footer-contact-text">
              @pathfindersprep
            </a>
          </div>
          <div className="footer-contact-item">
            <img
                                src={phoneIcon}
                                alt='Phone'
                                className='footer-contact-icon'
                            />
            <a href="tel:+16474647064" className="footer-contact-text">+1 (647) 464‑7064</a>
          </div>
          <div className="footer-contact-item">
            <img
                                src={emailIcon}
                                alt='Email'
                                className='footer-contact-icon'
                            />
            <a href="mailto:pathfindersprep@gmail.com" className="footer-contact-text">pathfindersprep@gmail.com</a>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default OurTeam;