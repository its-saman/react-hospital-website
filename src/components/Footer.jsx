import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  fas fa-facebook, 
  fas fa-twitter, 
  fas fa-instagram, 
  fas fa-linkedin 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>HealthCare Hospital</h3>
          <p>Providing world-class healthcare services with compassion and excellence since 1995.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={fas fa-facebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={fas fa-twitter} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={fas fa-instagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={fas fa-linkedin} />
            </a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/doctors">Doctors</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Pediatrics</li>
            <li>Orthopedics</li>
            <li>Emergency Care</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>123 Medical Center Drive</p>
          <p>Healthcare City, HC 12345</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Email: info@healthcarehospital.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HealthCare Hospital. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 