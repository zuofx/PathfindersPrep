import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import '../css/Contact.css'

import instagramIcon from '../assets/instagram.svg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';

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
          form.current.reset();
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

     <div className="contact-info">
        <div className='contact-item'>
          <img src={instagramIcon}
                alt="Instagram Icon"
                className="contact-svg-icon"
          
          />
          <a
            href="https://www.instagram.com/pathfindersprep"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-text"
          >
                @pathfindersprep
          </a>
        </div>
        <div className='contact-item'>
          <img src={phoneIcon}
                alt="Phone Icon"
                className="contact-svg-icon"
          
          />
          <a href="tel:+16474647064" className="contact-text">+1 (647) 464-7064</a>
        </div>
        <div className='contact-item'>
          <img src={emailIcon}
                alt="Email Icon"
                className="contact-svg-icon"
          
          />
          <a href="mailto:ops.pathfindersprep@gmail.com" className="contact-text">ops.pathfindersprep@gmail.com</a>
        </div>

      </div>


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
