import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';

import '../css/ScheduleWithSchej.css';

const eventMap = {
  MCAT:   'https://schej.it/e/DefBAE',
  LSAT:   'https://schej.it/e/7e753',
  DAT:    'https://schej.it/e/AA52E',
  CASPer: 'https://schej.it/e/AcdfD',
};

export default function ScheduleWithSchej() {
  const formRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID  = 'service_m84ounh';
    const templateID = 'template_rf04hlx';
    const publicKey  = 'B7IlTMU9FO5BelTSd';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          alert('Details submitted! Redirecting to availability…');
          // grab the exam type and navigate
          const formData = new FormData(formRef.current);
          const exam = formData.get('exam');
          navigate(`/schedule/${exam}`);
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert('Failed to submit—please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="schedule-form-page">
      <h1>Please Enter Your Contact Info Below</h1>

      <form ref={formRef} className="schedule-form" onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="phone">Phone:</label>
        <input id="phone" name="phone" type="phone" required />

        <label htmlFor="exam">Exam Type:</label>
        <select id="exam" name="exam" required>
          <option value="" disabled>— Select one —</option>
          {Object.keys(eventMap).map((key) => (
            <option key={key} value={key}>{key}</option>
          ))}
        </select>

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Continue to Availability'}
        </button>
      </form>
    </div>
  );
}
