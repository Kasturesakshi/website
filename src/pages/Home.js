 

  
// import React, { useState } from 'react';
// import background from '../assets/background.jpg';
// import '../styles/home.css';

// function Home() {
//   const [modalContent, setModalContent] = useState(null);

//   const handleOpenModal = (title, content) => {
//     setModalContent({ title, content });
//   };

//   const handleCloseModal = () => {
//     setModalContent(null);
//   };

//   return (
//     <div className="text-center">
//       <h1 className="display-4">
//         Welcome to <br />
//         Shri Mouni Vidyapeeth's Karmaveer Hire Arts, Science, Commerce and Education College
//       </h1>
//       <p className="lead">
//         "Your journey begins here - where dreams meet dedication.<br />
//         In every corner of this campus, passion finds its purpose."
//       </p>

//       <img src={background} alt="Background" className="home-image" />

//       {/* Map Card */}
//       <div 
//         className="map-card" 
//         onClick={() => window.open("https://www.google.com/maps/place/Karmaveer+Hire+College", "_blank")}
//       >
//         <div className="map-icon">📍</div>
//         <div className="map-text">
//           <h3>View Location on Map</h3>
//           <p>Click here to explore our campus on Google Maps.</p>
//         </div>
//       </div>

//       {/* Grid Section for 4 Info Cards */}
//       <div className="container">
//         <div className="row section-grid">

//           {/* First Row */}
//           <div className="col-md-6">
//             <section className="home-section" onClick={() => handleOpenModal("Diverse Academic Programs", 
//               "Our college offers a wide range of programs including BBA, B.Sc, BCA, and Computer Engineering. Each course is structured to provide theoretical and practical knowledge with a focus on holistic development.")}>
//               <h2>📚 Diverse Academic Programs</h2>
//               <p>Explore our undergraduate and postgraduate courses designed to shape tomorrow's leaders.</p>
//             </section>
//           </div>

//           <div className="col-md-6">
//             <section className="home-section" onClick={() => handleOpenModal("State-of-the-Art Facilities", 
//               "We offer modern labs, a central library, smart classrooms, computer centers, sports grounds, seminar halls, and hostel accommodations for a complete learning experience.")}>
//               <h2>🏛️ State-of-the-Art Facilities</h2>
//               <p>Fully equipped labs, digital classrooms, and a vibrant campus environment.</p>
//             </section>
//           </div>

//           {/* Second Row */}
//           <div className="col-md-6">
//             <section className="home-section" onClick={() => handleOpenModal("Experienced Faculty", 
//               "Our highly qualified and experienced faculty members bring both academic knowledge and industry experience, nurturing excellence and mentorship for every student.")}>
//               <h2>🌟 Experienced Faculty</h2>
//               <p>Passionate educators committed to academic and personal growth.</p>
//             </section>
//           </div>

//           <div className="col-md-6">
//             <section className="home-section" onClick={() => handleOpenModal("Beyond Academics", 
//               "We encourage participation in sports, cultural events, NSS, student clubs, leadership programs, and community service activities to ensure all-round development.")}>
//               <h2>🎯 Beyond Academics</h2>
//               <p>Engage in cultural events, sports, and student-led clubs beyond the classroom.</p>
//             </section>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {modalContent && (
//         <div className="modal-overlay" onClick={handleCloseModal}>
//           <div className="modal-box" onClick={(e) => e.stopPropagation()}>
//             <h3>{modalContent.title}</h3>
//             <p>{modalContent.content}</p>
//             <button className="modal-close" onClick={handleCloseModal}>Close</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;




import React, { useState } from 'react';
import background from '../assets/background.jpg';
import '../styles/home.css';
import '../styles/Footer.css';
import logo from '../assets/logo.png'; // For footer logo

function Home() {
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (title, content) => {
    setModalContent({ title, content });
  };

  const handleCloseModal = () => {
    setModalContent(null);
  };

  return (
    <div className="text-center">
      <h1 className="display-4">
        Welcome to <br />
        Shri Mouni Vidyapeeth's Karmaveer Hire Arts, Science, Commerce and Education College
      </h1>
      <p className="lead">
        "Your journey begins here - where dreams meet dedication.<br />
        In every corner of this campus, passion finds its purpose."
      </p>

      <img src={background} alt="Background" className="home-image" />

      {/* Map Card */}
      <div 
        className="map-card" 
        onClick={() => window.open("https://www.google.com/maps/place/Karmaveer+Hire+College", "_blank")}
      >
        <div className="map-icon">📍</div>
        <div className="map-text">
          <h3>View Location on Map</h3>
          <p>Click here to explore our campus on Google Maps.</p>
        </div>
      </div>

      {/* Grid Section for 4 Info Cards */}
      <div className="container">
        <div className="row section-grid">

          {/* First Row */}
          <div className="col-md-6">
            <section className="home-section" onClick={() => handleOpenModal("Diverse Academic Programs", 
              "Our college offers a wide range of programs including BBA, B.Sc, BCA, and Computer Engineering. Each course is structured to provide theoretical and practical knowledge with a focus on holistic development.")}>
              <h2>📚 Diverse Academic Programs</h2>
              <p>Explore our undergraduate and postgraduate courses designed to shape tomorrow's leaders.</p>
            </section>
          </div>

          <div className="col-md-6">
            <section className="home-section" onClick={() => handleOpenModal("State-of-the-Art Facilities", 
              "We offer modern labs, a central library, smart classrooms, computer centers, sports grounds, seminar halls, and hostel accommodations for a complete learning experience.")}>
              <h2>🏛️ State-of-the-Art Facilities</h2>
              <p>Fully equipped labs, digital classrooms, and a vibrant campus environment.</p>
            </section>
          </div>

          {/* Second Row */}
          <div className="col-md-6">
            <section className="home-section" onClick={() => handleOpenModal("Experienced Faculty", 
              "Our highly qualified and experienced faculty members bring both academic knowledge and industry experience, nurturing excellence and mentorship for every student.")}>
              <h2>🌟 Experienced Faculty</h2>
              <p>Passionate educators committed to academic and personal growth.</p>
            </section>
          </div>

          <div className="col-md-6">
            <section className="home-section" onClick={() => handleOpenModal("Beyond Academics", 
              "We encourage participation in sports, cultural events, NSS, student clubs, leadership programs, and community service activities to ensure all-round development.")}>
              <h2>🎯 Beyond Academics</h2>
              <p>Engage in cultural events, sports, and student-led clubs beyond the classroom.</p>
            </section>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalContent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>{modalContent.title}</h3>
            <p>{modalContent.content}</p>
            <button className="modal-close" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer bg-dark text-light py-5">
        <div className="container">
          <div className="row text-center text-md-start">

            <div className="col-md-3 mb-4 mb-md-0 footer-links">
              <p>About Us</p>
              <p>Internal Committees</p>
              <p>Admissions</p>
              <p>Alumni</p>
            </div>

            <div className="col-md-3 mb-4 mb-md-0 footer-links">
              <p>Departments</p>
              <p>Training & Placement</p>
              <p>Culture</p>
              <p>Application Form</p>
            </div>

            <div className="col-md-3 mb-4 mb-md-0 text-center">
              <img src={logo} alt="DYP Logo" className="footer-logo mb-2" />
              <h5 className="footer-title">KH College</h5>
              <p className="footer-subtitle">GROUP</p>
            </div>

            <div className="col-md-3 footer-contact">
              <p> Shri Mouni Vidyapeeth's Karmaveer Hire Arts, Science, Commerce and Education College, Gargoti</p>
              <p>Email: info.khcollege@group.edu.in</p>
              <p>Tel: 0231-2601431/32/33</p>
              <p>Jobs: career.khcollege@group.edu.in</p>
              <p>Student document verification via e-office</p>
            </div>
          </div>

          <hr className="my-4 border-light" />

          <div className="text-center small-text">
            <div className="social-icons mb-2">
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-twitter mx-2"></i>
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-linkedin mx-2"></i>
            </div>
            <p>Approved by AICTE, DTE - Govt. of Maharashtra & Affiliated to <strong>Shivaji University</strong></p>
            <p>© 2025 KH Group.</p>
            <p>Last Updated on: April 07, 2025</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
