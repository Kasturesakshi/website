// import React from 'react';

// function Students() {
//   return (
//     <div>
//       <h2>Student Portal</h2>
//       <p>Access your grades, schedules, and announcements here.</p>
//     </div>
//   );
// }

// export default Students;
import React, { useState } from 'react';
import '../styles/students.css';

function Students() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const syllabusData = {
    bsc: {
      name: "B.Sc in Mathematics",
      syllabus: "Calculus, Algebra, Real Analysis, Differential Equations, Statistics",
      timetable: "Mon-Fri: 10AM - 3PM, Math Lab on Wed"
    },
    bba: {
      name: "BBA",
      syllabus: "Principles of Management, Accounting, Marketing, HR, Business Law",
      timetable: "Mon-Fri: 9AM - 2PM, Project Class on Thu"
    },
    bcom: {
      name: "B.Com",
      syllabus: "Economics, Taxation, Financial Management, Auditing, Business Communication",
      timetable: "Mon-Fri: 11AM - 4PM, Practical on Tue"
    }
  };

  return (
    <div className="students-container">
      <h2 className="title">Student Portal</h2>
      <p className="subtitle">Access your syllabus and academic timetable below.</p>

      <div className="card-container">
        {Object.entries(syllabusData).map(([key, course]) => (
          <div
            key={key}
            className={`course-card ${selectedCourse === key ? 'active' : ''}`}
            onClick={() => setSelectedCourse(key)}
          >
            <h3>{course.name}</h3>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <div className="content-card animate-in">
          <h4>Syllabus - {syllabusData[selectedCourse].name}</h4>
          <p>{syllabusData[selectedCourse].syllabus}</p>

          <h4>Academic Timetable</h4>
          <p>{syllabusData[selectedCourse].timetable}</p>
        </div>
      )}
    </div>
  );
}

export default Students;
