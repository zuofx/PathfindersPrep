import React from 'react';
import Member from '../components/Member.js';

import '../css/OurTeam.css'

const OurTeam = () => {
    return (
        <div className="ourteam">
            <h1>Our Team</h1>

            <div className='team-members'>
                <Member name='Nathan Lai' filename='nathan-lai.png' tag="Queen's 3rd Year Health Sciences, MCAST, CASPER" link="https://linkedin.com/in/huymtruong"/>
                <Member name='Grace Kim' filename='grace-kim.png' tag="Queen's 3rd Year Health Sciences, CASPER" link="https://linkedin.com/in/huymtruong"/>
                <Member name='Julie Choi' filename='julie-choi.png' tag="Queen's 3rd Year Health Sciences, CASPER" link="https://linkedin.com/in/huymtruong"/>
                <Member name='Jerron Zhang' filename='jerron-zhang.png' tag="Queen's 3rd Year Health Sciences, MCAT" link="https://linkedin.com/in/huymtruong"/>
                <Member name='Ethan Ko' filename='ethan-ko.png' tag="McMaster 3rd Year Integrated Biomedical Engineering and Health Sciences, DAT, AA 20/30" link="https://linkedin.com/in/huymtruong"/>
                <Member name='Andy Ganea' filename='andy-ganea.png' tag="Queen's 3rd Year Health Sciences, MCAT Prep" link="https://linkedin.com/in/huymtruong"/>
            </div>
            
            <div className='spacer'/>
        </div>
    );
};

export default OurTeam;