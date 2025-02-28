import React, { useEffect, useLayoutEffect, useState } from 'react';
import '../css/Navbar.css';

import Logo512 from '../assets/logo512.png';
import Logo512Crop from '../assets/logo512-cropped.png';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

const Navbar = () => {
    const [w, h] = useWindowSize();
    const [open, setOpen] = useState(false);

    if (w < 900) {
        if (!open) {
            return (
              <div className="navbar-closed">
                    <a href="/">
                        <img className='navbar-logo' src={Logo512Crop} alt="Logo"/>
                    </a>
                    <div className="navbar-bars" onClick={() => {setOpen(true)}}>
                        <div className='navbar-bar'/>
                        <div className='navbar-bar'/>
                        <div className='navbar-bar'/>
                    </div>
              </div>  
            );
        }else {
            return (
                <div className="navbar-open">
                    <a href="/">
                        <img className='navbar-logo' src={Logo512Crop} alt="Logo"/>
                    </a>
                    <div className='navbar-navlinks'>
                        <a className="min-navlink" href="/home">HOME</a>
                        <a className="min-navlink" href="/ourteam">OUR TEAM</a>
                        {/* TODO: enable later */}
                        {/* <a className="min-navlink" href="/testimonials">SUCCESS STORIES</a> */}
                        <a className="min-navlink" href="/contact">CONTACT</a>
                        <a className="min-navlink" onClick={() => {setOpen(false)}}>X</a>
                    </div>
              </div>  
            );
        }

    }else {
        return (
            <div className='navbar'>
                <a href="/">
                    <img className='navlogo' src={Logo512Crop} alt="Logo"/>
                </a>
                <h1>PATHFINDERS PREP | </h1>
                <a className="navlink" href="/home">HOME</a>
                <a className="navlink" href="/ourteam">OUR TEAM</a>
                <a className="navlink" href="/testimonials">SUCCESS STORIES</a>
                <a className="navlink" href="/contact">CONTACT</a>
            </div>
        )
    }

    
}
export default Navbar;