import { useState, useEffect } from 'react';
import '../css/Home.css';

import FAQBox from '../components/FAQBox';

import logo512 from '../assets/logo512.png';

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
                    <div className='course'>
                        LSAT
                    </div>
                    <div className='course'>
                        CASPER
                    </div>
                    <div className='course'>
                        MCAT
                    </div>
                    <div className='course'>
                        DAT
                    </div>
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
            <div className='spacer'/>
        </div>
    )
}
export default Home;