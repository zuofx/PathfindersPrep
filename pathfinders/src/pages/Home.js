import { useState, useEffect } from 'react';
import '../css/Home.css';

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
                    <h2>PREPARE YOUR FUTURE WITH US</h2>
                    <div className="title-buttons">
                        <a href="/contact" target="_blank">BECOME A STUDENT</a>
                        <a href="/contact" target="_blank">BECOME A TUTOR</a>
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

            {/* <div className='faqs'>
                <h1 className='faqs-title'>
                    FAQ:
                </h1>
                <div className='faq-boxes'>
                    <FAQBox
                    className='faq-box'
                    question='This is a test question?'
                    answer='This is a test answer.'
                    />
                    <FAQBox
                    className='faq-box'
                    question='This is a test question?'
                    answer='This is a test answer.'
                    />
                    <FAQBox
                    className='faq-box'
                    question='This is a test question?'
                    answer='This is a test answer.'
                    />
                    <FAQBox
                    className='faq-box'
                    question='This is a longer test question?'
                    answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                    />
                </div>
            </div>
             */}

            <div className='footer'>
            <p className='footer-message'>
                Feel free to contact us and book an initial consultation!
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