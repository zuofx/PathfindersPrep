import logo from './logo.svg';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';

// Pages
import Home from './pages/Home.js';
import Error404 from './pages/Error404.js';
import OurTeam from './pages/OurTeam.js';
import Testimonials from './pages/Testimonials.js';
import Contact from './pages/Contact.js';
import Resources from './pages/Resources.js';
import ScheduleWithSchej from './pages/ScheduleWithSchej';
import ScheduleEmbed from './pages/ScheduleEmbed';
import BecomeTutor from './pages/BecomeTutor';



// Components
import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ourteam" element={<OurTeam />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/schedule" element={<ScheduleWithSchej />} />
          <Route path="/schedule/:exam" element={<ScheduleEmbed />} />
          <Route path="/tutor" element={<BecomeTutor />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>


    </div>
  );
}

export default App;
