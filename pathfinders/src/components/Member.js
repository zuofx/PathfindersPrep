import React from 'react';
import '../css/Member.css';

// import headshot from '../assets/placeholder-headshot.jpg'
import linkedin from '../assets/linkedin.webp'

const Member = (props) => {

    let headshot = undefined;
    try {
        headshot = require('../assets/' + props.filename); 
    }catch {
        headshot = undefined;
    }
    

    return (
        // <a className='member' href={props.link} target='_blank'>
        <a className='member' href={props.link} target='_blank' rel='noopener noreferrer'>
            <img src={headshot}/>
            <h2>{props.name}</h2>
            <a href={props.link} target='_blank'>
                <img src={linkedin}/>
                <h3>{props.tag}</h3>
            </a>
        </a>
    )
}
export default Member;