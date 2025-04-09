// // import React from 'react';

// // function Courses() {
// //   return (
// //     <div>
// //       <h2>Courses Offered</h2>
// //       <ul>
// //         <li>B.Tech in Computer Science</li>
// //         <li>BBA</li>
// //         <li>B.Com</li>
// //         <li>B.Sc in Mathematics</li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Courses;



// import React from 'react';
// import '../styles/courses.css';  

// function Courses() {
//   return (
//     <div className="courses-container">
//       <h2 className="courses-title">Courses Offered</h2>
//       <div className="card-container">
//         <div className="course-card">B.Tech in Computer Science</div>
//         <div className="course-card">BBA</div>
//         <div className="course-card">B.Com</div>
//         <div className="course-card">B.Sc in Mathematics</div>
//       </div>
//     </div>
//   );
// }

// export default Courses;
import React from 'react';
import '../styles/courses.css';  

function Courses() {
  return (
    <div className="courses-container">
      <h2 className="courses-title">Courses Offered</h2>
      <div className="card-container">
        <div className="course-card">
          <strong>B.Tech in Computer Science</strong>
          <p>Focuses on software development, algorithms, and AI. Ideal for tech enthusiasts aiming to become engineers or developers.</p>
        </div>
        <div className="course-card">
          <strong>BBA</strong>
          <p>Provides foundational knowledge in business, management, and entrepreneurship. Great for aspiring business leaders.</p>
        </div>
        <div className="course-card">
          <strong>B.Com</strong>
          <p>Covers accounting, finance, and economics. Suitable for careers in banking, finance, and commerce sectors.</p>
        </div>
        <div className="course-card">
          <strong>B.Sc in Mathematics</strong>
          <p>Emphasizes mathematical theory, statistics, and problem-solving. Prepares students for research and analytics roles.</p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
