import React from 'react';
import { useParams } from 'react-router-dom';
import '../css/ScheduleEmbed.css';

const eventMap = {
  MCAT:   'https://schej.it/e/DefBAE',
  LSAT:   'https://schej.it/e/7e753',
  DAT:    'https://schej.it/e/AA52E',
  CASPer: 'https://schej.it/e/AcdfD',
};

export default function ScheduleEmbed() {
  const { exam } = useParams();
  const url = eventMap[exam];
  if (!url) return <p>Invalid exam. Please go back.</p>;

  return (
    <div className="schej-embed-page">
      <iframe
        src={url}
        width="100%"
        height="700"
        frameBorder="0"
        title="Schej Availability"
      />
    </div>
  );
}
