 

import React from 'react';
import '../styles/admission.css';

function Admissions() {
  return (
    <div className="admissions-container">
      <h2 className="admissions-heading">🎓 Admissions</h2>
      <p className="admission-open-text">Admissions open for the 2025-2026 academic year. Apply now!</p>

      <div className="admission-section">
        <h3>📌 General Eligibility (For All Undergraduate Programs)</h3>
        <ul>
          <li>Must have passed 10+2 or equivalent examination from a recognized board.</li>
          <li>Minimum percentage or grade as specified per course (see below).</li>
          <li>Must meet specific subject requirements relevant to the chosen course.</li>
          <li>Admission is granted based on merit, entrance exam, or personal interview.</li>
        </ul>
      </div>

      <div className="admission-section">
        <h3>🧑‍💼 BBA – Bachelor of Business Administration</h3>
        <p><strong>Duration:</strong> 3 Years</p>
        <ul>
          <li>10+2 in any stream (Arts/Commerce/Science).</li>
          <li>Minimum 50% marks (5% relaxation for reserved categories).</li>
          <li>Good communication skills preferred.</li>
          <li>Personal interview or aptitude test may be conducted.</li>
        </ul>
      </div>

      <div className="admission-section">
        <h3>🔬 B.Sc – Bachelor of Science</h3>
        <p><strong>Specializations:</strong> Physics, Chemistry, Mathematics, Computer Science, etc.</p>
        <p><strong>Duration:</strong> 3 Years</p>
        <ul>
          <li>10+2 with Science stream (PCM/PCB/PCMB).</li>
          <li>Minimum 50% marks (45% for reserved categories).</li>
          <li>Must have relevant subjects for chosen specialization.</li>
          <li>Merit-based or counseling-based admission.</li>
        </ul>
      </div>

      <div className="admission-section">
        <h3>💻 BCA – Bachelor of Computer Applications</h3>
        <p><strong>Duration:</strong> 3 Years</p>
        <ul>
          <li>10+2 in any stream with Math/Computer Science.</li>
          <li>Minimum 50% marks.</li>
          <li>Basic computer knowledge desirable.</li>
          <li>May require entrance test or interview.</li>
        </ul>
      </div>

      <div className="admission-section">
        <h3>🧑‍💻 B.E/B.Tech – Computer Engineering</h3>
        <p><strong>Duration:</strong> 4 Years</p>
        <ul>
          <li>10+2 with Physics, Chemistry, and Mathematics (PCM).</li>
          <li>Minimum 45%–50% aggregate marks.</li>
          <li>Valid score in JEE Main / CET / institute-specific entrance.</li>
          <li>Admission via ranking and counseling process.</li>
        </ul>
      </div>

      <div className="admission-section">
        <h3>📄 Documents Required (at the time of admission)</h3>
        <ul>
          <li>10th and 12th Mark Sheets & Passing Certificates</li>
          <li>Transfer Certificate (TC)</li>
          <li>Migration Certificate (if applicable)</li>
          <li>Caste Certificate (if applicable)</li>
          <li>Passport Size Photographs</li>
          <li>Entrance Exam Score Card (if applicable)</li>
          <li>Aadhar Card or valid ID proof</li>
        </ul>
      </div>
    </div>
  );
}

export default Admissions;
