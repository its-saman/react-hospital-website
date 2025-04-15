import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to HealthCare Hospital</h1>
        <p>Providing world-class healthcare services with compassion and excellence</p>
        <div className="hero-buttons">
          <Link to="/appointment" className="btn">Book Appointment</Link>
          <Link to="/services" className="btn btn-secondary">Our Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero; 