import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import { FaRegCalendarDays } from "react-icons/fa6";
import { GoClock } from "react-icons/go";



function Navbar() {
  return (
    <header className="navbar">
    <div className="logo">
     GAHMAN <GoClock /> <br/>
     EVENTS<FaRegCalendarDays />
  </div>
  
       <nav className='nav-links'>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/events">EVENTS</Link></li>
          <li><Link to="/addEvent">ADD EVENTS</Link></li>
          
        </ul>
      </nav>
      <input type='text' placeholder='Search'  />
    </header>
  );
}

export default Navbar;       
