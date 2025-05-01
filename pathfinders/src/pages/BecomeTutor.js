import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../css/BecomeTutor.css';

export default function BecomeTutor() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID  = 'service_m84ounh';                 // your EmailJS service
    const templateID = 'template_y2k6a4s';      // create this in EmailJS
    const publicKey  = 'B7IlTMU9FO5BelTSd';               // your EmailJS public key

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        () => {
          alert('Application submitted—thank you!');
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert('Submission failed. Please try again.');
          setLoading(false);
        }
      );
  };

  return (
    <div className="become-tutor">
      <h1>Join Pathfinders Prep as a Tutor!</h1>
      <form ref={formRef} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" required />

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input id="phone" name="phone" type="tel" required />

        <label htmlFor="exam">Test You Will Tutor:</label>
        <select id="exam" name="exam" required>
          <option value="" disabled>— Select one —</option>
          <option value="MCAT">MCAT</option>
          <option value="LSAT">LSAT</option>
          <option value="DAT">DAT</option>
          <option value="CASPer">CASPer</option>
        </select>

        <label htmlFor="program">University &amp; Program:</label>
        <input id="program" name="program" type="text" required />

        <label htmlFor="reason">Why do you want to join?</label>
        <textarea id="reason" name="reason" rows="5" required />

        <button type="submit" disabled={loading}>
          {loading ? 'Submitting…' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
