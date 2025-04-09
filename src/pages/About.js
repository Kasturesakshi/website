 


import React, { useState } from 'react';
import '../styles/about.css';
import principalImg from '../assets/principal.jpg';
import hodImg from '../assets/hod.jpg';

function About() {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (role) => {
    setActiveModal(role);
  };

  const handleClose = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className="about-container">
        <h2>About Us</h2>
        <p>
          {/* Your existing about content remains the same */}
          
It was in 1946 that Prince Shivaji Education Society, Kolhapur started a high school named ‘Shri Mouni Vidya Mandir’ and with that established the educational institution, Shri Mouni Vidapeeth. Initially, the high school was located in the old building of a rural hospital in Gargoti. In the year 1948, Sarvapalli Dr. Radhakrishnan Education Commission proposed the concept of Rural University. 

<br/>To implement such concept of rural university on experimental basis, three institutions, namely – Prince Shivaji Education Society, Kolhapur, Indian Institute of Education, Mumbai and Korgaonkar Charitable Institute, Kolhapur came forward and Unitedly established Shri Mouni Vidyapeeth in the year 1952. The contribution of Dr. V.T. Patil (Founder President of Shri Mouni Vidyapeeth), Padmabhushan Dr. J.P. Naik (Founder Innovator and great educationist) and Shri. Prabhakarpant Korgaonkar is very much significant in the establishment and development of Shri Mouni Vidyapeeth. From 1976 to 1993 as a President of Shri Mouni Vidyapeeth Padmashree Dr. D.Y. Patil has given a valuable contribution in the development of the institution.

<br/>The appellation Shri Mouni Vidyapeeth has been accepted to commemorate Shri Mouni Maharaj of Patgaon. Shri Mouni Maharaj was a guru of Chhatrapti Shivaji Maharaj. It is the same place where Chhatrapati Shahu founded ‘Kshatra Jagadguru Peeth’ Shri Mouni Maharaj’s concern for social upliftment is an inspiration for Shri Mouni Vidyapeeth. “Magh Shukl Ekadashi” is the birth anniversary of Shri Mouni Maharaj. The day is observed as the foundation day of Shri Mouni Vidyapeeth. On this day the “Dnyan Jyoti” (the torch of knowledge) which is at the auspicious Samadhi of Shri Mouni Maharaj is brought to Shri Mouni Vidyapeeth. This tradition is continued even today.

In the ever changing scenario of Globalization & Liberalization and to cater to the needs of the economically backward rural youth who could not afford the higher education elsewhere, Karmaveer Hire College introduced B.Sc. and B.C.A. courses during the academic year 2007 & 2008 respectively.

<br/>The Institution spread over 65 acres of land has main building with number of classrooms, laboratories, staff room, ladies room, office and audio-visual room. Adjacent to the main building is the library, gymkhana, NSS, NCC units, Health care unit, canteen, Grahak bhandar, Patasanstha and staff quarters.

Gymkhana with multi-gym facility and playground to fulfill the needs of sportsman and athletes. While the boys and girls have separate hostel facility the teaching staff enjoys the facility of residential quarters.

We have not lagged behind in taking care of students and their placement opportunities. We have trained the students, prepared them to face the placement interviews to get placement in companies of repute.
        </p>
      </div>

      {/* 👨‍🏫 Principal & HOD Section */}
      <div className="staff-section">
        <h2>Meet Our Leaders</h2>
        <div className="card-container">
          <div className="profile-card" onClick={() => handleOpen('principal')}>
            <img src={principalImg} alt="Principal" />
            <h3>Principal</h3>
          </div>
           
        </div>
      </div>

      {/* 🎬 Modal Popup */}
      {activeModal && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>×</button>
            <img
              src={activeModal === 'principal' ? principalImg : hodImg}
              alt={activeModal}
            />
            <h2>{activeModal === 'principal' ? 'Principal' : 'Head of Department'}</h2>
             
          </div>
          <div className="modal-text-box">
  <h2>{activeModal === 'principal' ? 'Principal' : 'Head of Department'}</h2>
  <p>
    {activeModal === 'principal'
      ? ' Dr. P. B. Patil ,He worked as a lecturer at Mouni Vidyapeeth, Gargoti. In 1962, he took the responsibility of heading as a Principal of Panchayat Raj Training Centre, Sangli..'
      : 'Prof. XYZ leads the department with a passion for research and student mentorship.'}
  </p>
</div>

        </div>
      )}
    </>
  );
}

export default About;
