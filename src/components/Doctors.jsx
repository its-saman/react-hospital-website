/* import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Doctors = () => {
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: '/images/doctor1.jpg',
      rating: 4.8,
      experience: '15 years'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      image: '/images/doctor2.jpg',
      rating: 4.9,
      experience: '12 years'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      image: '/images/doctor3.jpg',
      rating: 4.7,
      experience: '10 years'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      specialty: 'Orthopedic Surgeon',
      image: '/images/doctor4.jpg',
      rating: 4.9,
      experience: '18 years'
    }
  ];

  return (
    <section className="doctors" id="doctors">
      <div className="doctors-container">
        <div className="section-title">
          <h2>Our Doctors</h2>
          <p>Meet our team of experienced and dedicated healthcare professionals</p>
        </div>
        <div className="doctors-grid">
          {doctors.map(doctor => (
            <div className="doctor-card" key={doctor.id}>
              <div className="doctor-image">
                <img src={doctor.image} alt={doctor.name} />
              </div>
              <div className="doctor-info">
                <h3>{doctor.name}</h3>
                <p className="specialty">{doctor.specialty}</p>
                <div className="doctor-rating">
                  <FontAwesomeIcon icon={faStar} />
                  <span>{doctor.rating}</span>
                </div>
                <p className="experience">Experience: {doctor.experience}</p>
                <button className="btn">Book Appointment</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors; */
