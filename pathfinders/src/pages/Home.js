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
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Justo dolor orci nisl ultricies habitasse morbi libero taciti libero. Magna dui feugiat ex convallis feugiat; ultrices dapibus tincidunt! Varius posuere dolor eleifend mauris magna odio mauris. Pretium platea sed, rhoncus dui congue eget rhoncus laoreet. Interdum eu pellentesque quisque, ex aenean viverra.

                    Sit torquent scelerisque tristique consectetur suscipit at, risus lectus. Risus molestie ac cursus molestie taciti commodo maximus vehicula. Sem sodales vehicula amet dapibus dapibus et, nullam vulputate. Quisque ipsum lorem imperdiet commodo hac aliquam vulputate. Dolor turpis eleifend habitasse montes metus. Facilisis dignissim posuere sem augue ad montes dapibus. Torquent odio suscipit posuere nunc suspendisse nibh tempus pellentesque nostra.
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

            <div className='faqs'>
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
            
            <div className='spacer'/>
        </div>
    )
}
export default Home;