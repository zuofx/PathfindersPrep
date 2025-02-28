import React from 'react';
import { useState, useEffect } from 'react';
import '../css/FAQBox.css';

const FAQBox = (props) => {

    const [opened, setOpened] = useState(false);

    if (opened) {
        return (
            <div>
                <div className='question-box' onClick={() => setOpened(false)}>
                    <h1>{props.question}</h1>
                </div>
                <div className='answer-box'>
                    <h2>{props.answer}</h2>
                </div>
            </div>
        );
    }else {
        return (
            <div>
                <div className='question-box' onClick={() => setOpened(true)}>
                    <h1>{props.question}</h1>
                </div>
            </div>
        );
    }

};

export default FAQBox;