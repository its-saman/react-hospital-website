import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  fas fa-heartbeat, 
  fas fa-stethoscope, 
  fas fa-hospital, 
  fas fa-ambulance, 
  fas fa-pills, 
  fas fa-user-md 
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: fas fa-heartbeat,
      title: 'Cardiology',
      description: 'Comprehensive heart care services including diagnostics, treatment, and rehabilitation.'
    },
    {
      id: 2,
      icon: fas fa-stethoscope,
      title: 'General Medicine',
      description: 'Primary healthcare services for all age groups with experienced physicians.'
    },
    {
      id: 3,
      icon: fas fa-hospital,
      title: 'Emergency Care',
      description: '24/7 emergency services with state-of-the-art facilities and rapid response teams.'
    },
    {
      id: 4,
      icon: fas fa-ambulance,
      title: 'Ambulance Service',
      description: 'Quick and reliable ambulance service for emergencies and patient transport.'
    },
    {
      id: 5,
      icon: fas fa-pills,
      title: 'Pharmacy',
      description: 'In-house pharmacy with a wide range of medications and professional staff.'
    },
    {
      id: 6,
      icon: fas fa-user-md,
      title: 'Specialist Consultation',
      description: 'Access to specialists across various medical fields for expert consultation.'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive healthcare solutions for you and your family</p>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <FontAwesomeIcon icon={service.icon} className= "fas fa-chevron-right"<--"service-icon"--> />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 