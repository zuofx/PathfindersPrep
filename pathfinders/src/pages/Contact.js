import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import '../css/Contact.css'

function Contact() {
  // 1) Use useRef to get form data
  const form = useRef();

  // 2) Event handler to send email via EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    // Replace the following IDs with your own from EmailJS
    const serviceID = 'service_m84ounh';
    const templateID = 'template_y2k6a4s';
    const publicKey = 'B7IlTMU9FO5BelTSd';

    // Using the emailjs.sendForm method
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <div className='contact'>
      <h1>CONTACT US</h1>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">NAME:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
        />

        <label htmlFor="subject">SUBJECT:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
        />

        <label htmlFor="email">EMAIL:</label>
        <input
          type="email"
          id="email"
          name="email"
          required
        />

        <label htmlFor="message">MESSAGE:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
        />

        <button type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Contact;
