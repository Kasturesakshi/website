 
import React from 'react';
import '../styles/news.css';

function News() {
  return (
    <div className="news-container">
      <h2 className="news-title">Latest News</h2>
      <ul className="news-list">
        <li className="news-item"> <strong > A hands-on workshop on modern web development using React.js was held on 12th March. </strong> <br/> 
        empowering students with practical skills to build dynamic and responsive web applications. </li>
        <li className="news-item"> <strong > New Courses Introduced in AI & ML on 30th March at KH college at Gargoti.</strong>  <br/> 
        KH College expanded its tech curriculum by launching cutting-edge courses in Artificial Intelligence and Machine Learning on 30th March, opening new avenues for innovation and future-ready careers.</li>
      </ul>
    </div>
  );
}

export default News;



// import React from 'react';
// import '../styles/news.css';
// import newsImg1 from '../assets/news1.jpg'; // example image
// import newsImg2 from '../assets/news2.jpg'; // another example

// function News() {
//   return (
//     <div className="news-container">
//       <h2 className="news-title">Latest News</h2>
//       <ul className="news-list">
//         <li className="news-item">
//           <img src={newsImg1} alt="React Workshop" style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }} />
//           <strong>A hands-on workshop on modern web development using React.js was held on 12th March.</strong> <br />
//           empowering students with practical skills to build dynamic and responsive web applications.
//         </li>
//         <li className="news-item">
//           <img src={newsImg2} alt="AI ML Courses" style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }} />
//           <strong>New Courses Introduced in AI & ML on 30th March at KH college at Gargoti.</strong> <br />
//           ABC College expanded its tech curriculum by launching cutting-edge courses in Artificial Intelligence and Machine Learning on 30th March, opening new avenues for innovation and future-ready careers.
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default News;
