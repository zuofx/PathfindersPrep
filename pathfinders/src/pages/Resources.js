import React from 'react';
import '../css/Resources.css';

const resources = [
  {
    exam: 'MCAT',
    links: [
      { name: 'AAMC Official Practice Exams', url: 'https://students-residents.aamc.org/prepare-mcat-exam/free-planning-and-study-resources' },
      { name: 'AAMC Official Topic List', url: 'https://drive.google.com/file/d/1FN2xDXfDhMK-d2WcjbD57OYuaSixYxYK/view?usp=sharing' },
      { name: 'Khan Academy MCAT Notes', url: 'https://drive.google.com/drive/folders/1jwQcLgm5lHzXtz6H_StkoM1GgSTJaWrm?usp=sharing' },
      { name: 'Equation Sheet', url: 'https://drive.google.com/file/d/1RHacXo5p2zAIelZUOjoow5bso6W9UBra/view' },
      { name: '100 Page Psych Notes', url: 'https://docs.google.com/document/d/1IlE-AYZhM7XRsLFH1ouDeX5EWGboZ6EX/edit?tab=t.0' },
      { name: '300 Page Psych Notes', url: 'https://www.mcatbros.com/_files/ugd/69e71c_6fb066f455db442685a7472e0226b51b.pdf' },
      { name: 'Anki Decks', url: 'https://www.reddit.com/r/AnkiMCAT/wiki/index/' },
      { name: 'Lab Techniques Summary', url: 'https://drive.google.com/file/d/14cs6kEb_eB9lYLKz5QgT8hIaDiO8bMwG/view?usp=sharing' }
    ]
  },
  {
    exam: 'LSAT',
    links: [
      { name: 'LSAC Official Prep', url: 'https://www.lsac.org/lsat/lsat-prep' },
      { name: 'Khan Academy LSAT', url: 'https://www.khanacademy.org/prep/lsat' },
      { name: '7Sage LSAT', url: 'https://7sage.com/' }
    ]
  },
  {
    exam: 'DAT',
    links: [
      { name: 'ADA Official DAT', url: 'https://www.ada.org/dat' },
      { name: 'DAT Bootcamp', url: 'https://datbootcamp.com/' },
      { name: 'Khan Academy Organic Chem', url: 'https://www.khanacademy.org/science/organic-chemistry' }
    ]
  },
  {
    exam: 'CASPer',
    links: [
      { name: 'U Washington Ethics in Medicine', url: 'https://depts.washington.edu/bhdept/ethics-medicine' },
      { name: 'BeMo Casper Guide', url: 'https://bemoacademicconsulting.com/blog/casper-test-guide/' },
      { name: 'Casper Master', url: 'https://caspermaster.ai/' },
      { name: 'PrepMatch', url: 'https://prepmatch.com/' }
    ]
  }
];

const Resources = () => (
  <div className="resources-page">
    <h1>Preparation Resources</h1>
    {resources.map(section => (
      <div key={section.exam} className="resource-section">
        <h2>{section.exam}</h2>
        <div className="resource-buttons">
          {section.links.map(link => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-button"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Resources;

