import React from 'react';
import Member from '../components/Member.js';

import '../css/OurTeam.css'

const OurTeam = () => {
    return (
        <div className="ourteam">
            <h1>Meet Our Amazing Team!</h1>

            <div className='team-members'>
                <Member name='Nathan Lai' filename='nathan-lai.jpg' tag="Queen's 3rd Year Health Sciences; MCAT: 517 (94th Percentile), CASPER: 4th Quartile" link="https://www.linkedin.com/in/nathan-lai-20b37a280/"/>
                <Member name='Grace Kim' filename='grace-kim.jpg' tag="Queen's 3rd Year Health Sciences; CASPER: 4th Quartile" link="https://www.linkedin.com/in/grace-kim-357362264/"/>
                <Member name='Julie Choi' filename='julie-choi.png' tag="Queen's 3rd Year Health Sciences; CASPER: 4th Quartile" link="https://www.linkedin.com/in/julie-choi-383846270/"/>
                <Member name='Jerron Zhang' filename='jerron-zhang.png' tag="Queen's 3rd Year Health Sciences; MCAT: 521 (98th Percentile)" link="https://www.linkedin.com/in/jerron-zhang-bb830b245/"/>
                <Member name='Ethan Ko' filename='ethan-ko.jpg' tag="McMaster 3rd Year Integrated Biomedical Engineering and Health Sciences (iBioMed); DAT" link="https://www.linkedin.com/in/ethan--ko/"/>
                <Member name='Andy Ganea' filename='andy-ganea.png' tag="Queen's 3rd Year Health Sciences; MCAT: 521 (98th Percentile)" link="https://www.linkedin.com/in/andrewganea/"/>
                <Member name='Wesley Kwan' filename='wesley-kwan.jpg' tag="Queen's 3rd Year Health Sciences; LSAT: 175 (99.5th Percentile)" link="https://www.linkedin.com/in/wesleykwan10/"/>
                <Member name='Dylan Kwan' filename='dylan-kwan.jpg' tag="Queen's 3rd Year Health Sciences; MCAT" link="https://www.linkedin.com/in/dylankwann/"/>
                <Member name='Sarah Karami' filename='sarah-karami.jpg' tag="Queen's 3rd Year Health Sciences; DAT: (99.7th Percentile)" link="https://www.linkedin.com/in/sarah-karami-4b3143220/"/>
                <Member name='Felix Xu' filename='felix-xu.png' tag="Queen's 3rd Year Health Sciences; MCAT, CASPER: 4th Quartile" link="https://www.linkedin.com/in/felix-xu2004-/"/>
                <Member name='Daniel Wang' filename='daniel-wang.jpg' tag="Queen's 3rd Year Health Sciences; CASPER: 4th Quartile" link="https://www.linkedin.com/in/danielhfwang/"/>
            </div>
            
            <div className='spacer'/>
        </div>
    );
};

export default OurTeam;