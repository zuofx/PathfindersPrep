import { useState, useEffect } from 'react';
import '../css/Home.css';

import Typewriter from '../components/Typewriter';
import FAQBox from '../components/FAQBox';

import logo512 from '../assets/logo512.png';

import instagramIcon from '../assets/instagram.svg';
import phoneIcon     from '../assets/phone.svg';
import emailIcon     from '../assets/email.svg';


const Home = () => {
    return (
        <div className="Home">
            <div className="title">
                <div className='title-text'>
                    {/* <img src={logo512   }/> */}
                    {/* <h1>Welcome</h1> */}
                    <Typewriter
                        texts={[
                        'PREPARE YOUR FUTURE WITH US',
                        'PREPARE WITH PATHFINDERS PREP'
                        ]}
                        typingSpeed={120}
                        deletingSpeed={60}
                        pause={3000}
                    />
                    <div className="title-buttons">
                        <a href="/schedule" target="_blank">BECOME A STUDENT</a>
                        <a href="/tutor" target="_blank">BECOME A TUTOR</a>
                    </div>
                </div>
            </div>


            <div className='about'>
                <h1>ABOUT US</h1>
                <p>
                    At Pathfinders Prep, we believe that quality education should be accessible to everyone. That’s why we offer pay-what-you-can tutoring to support all students on their journey to academic and professional success. Our expert tutors provide personalized guidance for high-stakes exams, including the MCAT, LSAT, DAT, and CASPer, ensuring that financial barriers don’t stand in the way of your future. Whether you're aiming for medical school, law school, or dental school, we're here to help you navigate the path to success—no matter your circumstances.    
                </p>
            </div>

            <div className='subjects'>
                <h1>
                    SUBJECTS WE TEACH:
                </h1>
                <div className='courses'>
                    <a
                      className='course'
                      href='https://www.lsac.org/lsat'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      LSAT
                    </a>
                    <a
                      className='course'
                      href='https://takecasper.com'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      CASPER
                    </a>
                    <a
                      className='course'
                      href='https://students-residents.aamc.org/applying-medical-school/taking-mcat-exam'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      MCAT
                    </a>
                    <a
                      className='course'
                      href='https://www.ada.org/dat'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      DAT
                    </a>
                </div>
            </div>

            {/* TODO: Enable when content available */}
            {/* <div className='testimonials'>
                <h1>
                    TESTIMONIALS:
                </h1>
                <div className='testimonials-container'>
                    <p className='testimonial'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                    </p>
                    <p className='testimonial'>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
                    </p>
                </div>
        
            </div> */}

            <div className='faqs'>
                <h1 className='faqs-title'>
                    FAQ:
                </h1>
                <div className='faq-boxes'>
                    <FAQBox
                    className='faq-box'
                    question='What does “pay-what-you-can” mean?'
                    answer='At Pathfinders Prep, we believe cost should never stand between you and success. You choose the amount you can afford per session—whether that’s our suggested minimum, full rate, or anything in between. We’ll never turn away a student for lack of funds.'
                    />
                    <FAQBox
                    className='faq-box'
                    question='How do I book a session?'
                    answer='Simply click “Become a Student” to complete a brief intake form. You’ll indicate your exam date, availability, and subject focus (e.g. MCAT Biology, LSAT Reading Comprehension). We’ll match you with a tutor and email you a link to schedule via our online calendar.'
                    />
                    <FAQBox
                    className='faq-box'
                    question='What if I need to reschedule or cancel?'
                    answer='Life happens! You can reschedule or cancel up to 24 hours before your session without penalty. Cancellations within 24 hours incur a small fee, but we’ll always work with you in emergencies—just reach out as soon as possible.'
                    />
                    <FAQBox
                    className='faq-box'
                    question='Who will be tutoring me?'
                    answer='Every tutor is a high-achieving student who has aced their exam. Before your first session, you’ll receive a brief bio outlining their credentials, teaching style, and areas of expertise so you can feel confident in your match.'
                    />
                    <FAQBox
                    className='faq-box'
                    question='How do I make a payment?'
                    answer='Based on the payment schedule that our tutors will discuss with you in your first session, you will be asked to e-transfer the amount agreed upon to ops.pathfindersprep@gmail.com.'
                    />
                </div>
            </div>
            

            <div className='footer'>
            <p className='footer-message'>
                Feel free to contact us with any inquiries that you have!
            </p>
            <div className='footer-contact-info'>
                <div className='footer-contact-item'>
                <img
                    src={instagramIcon}
                    alt='Instagram'
                    className='footer-contact-icon'
                />
                <a
                    href='https://www.instagram.com/pathfindersprep'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='footer-contact-text'
                >
                    @pathfindersprep
                </a>
                </div>
                <div className='footer-contact-item'>
                <img
                    src={phoneIcon}
                    alt='Phone'
                    className='footer-contact-icon'
                />
                <a
                    href='tel:+16474647064'
                    className='footer-contact-text'
                >
                    +1 (647) 464‑7064
                </a>
                </div>
                <div className='footer-contact-item'>
                <img
                    src={emailIcon}
                    alt='Email'
                    className='footer-contact-icon'
                />
                <a
                    href='mailto:pathfindersprep@gmail.com'
                    className='footer-contact-text'
                >
                    pathfindersprep@gmail.com
                </a>
                </div>
            </div>
            </div>


        </div>
    )
}
export default Home;