import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
// import { Link } from 'react-scroll';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Events from './Components/Events';
import Dashboard from './Components/Dashboard';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <nav style={{ display: "flex", gap: "15px", padding: "10px", borderBottom: "2px solid #ddd" }}>
        <ul>
          <li><Link to="dashboard" smooth={true} duration={500}>Dashboard</Link></li>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="events" smooth={true} duration={500}>Events</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </nav>
      {location.pathname === '/profile' ? (
        <Profile />
      ) : (
        <>
          <div id='dashboard'><Dashboard/></div>
          <div id='about'><About/></div>
          <div id='events'><Events/></div>
          <div id='contact'><Contact/></div>
        </>
      )}
    </>
  );
}

export default App;