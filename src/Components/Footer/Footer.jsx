import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Quick Links Section */}
        <div className="footer-section quick-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-section contact-info">
          <div className="email">
            <MdOutlineMail className="icon" />
            <p>mwangi.brian@student.moringaschool.com</p>
            <p>george.golder@student.moringaschool.com</p>
            <p>habsa.abdirizack@student.moringaschool.com</p>
          </div>
          <div className="phone">
            <FaPhoneAlt className="icon" />
            <p>
              <a href="tel:+254704048319">+254 704 048 319</a>
            </p>
          </div>
          <div className="location">
            <MdLocationOn className="icon" />
            <p>NAIROBI, KENYA</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 www.gahmanevents.com</p>
      </div>
    </footer>
  );
}

export default Footer;
