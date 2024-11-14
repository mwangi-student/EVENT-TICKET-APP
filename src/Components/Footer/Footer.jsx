import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
         
        </div>

        
        <nav className="footer-nav">
          <ul>
            <li><Link to="/quickLinks">QUICK LINKS</Link></li>
            <li><Link to="/movies">Movies</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li> 
            
          </ul>
        </nav>

        <div className="email">
        <MdOutlineMail />
          <p>For inquiries, please email us at:</p>
          <p>mwangi.brian@student.moringaschool.com</p>
          <p>george.golder@student.moringaschool.com</p>
          <p>habsa.abdirizack@student.moringaschool.com</p>
        </div>

        Phone Number<FaPhoneAlt/>
        <p>
          <a href="tel:+254704048319">+254 704 048 319</a>
        </p>
      </div>

      
      <div className="footer-bottom">
        <p>&copy;Copyright 2024</p>
        <p>www.gahmanevents.com</p>
      </div>
    </footer>
  );
}

export default Footer;
