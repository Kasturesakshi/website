 



// import React, { useState } from 'react';
// import '../styles/campuslife.css';

// import eventsImg from '../assets/events.jpg';
// import clubsImg from '../assets/clubs.jpg';
// import facilitiesImg from '../assets/facilities.jpg';

// function CampusLife() {
//   const [openCard, setOpenCard] = useState(null);

//   const toggleCard = (id) => {
//     setOpenCard(openCard === id ? null : id);
//   };

//   const cardData = [
//     {
//       id: 'events',
//       title: 'Exciting Events',
//       img: eventsImg,
//       brief: 'Join various college fests, tech talks, and cultural programs.',
//       info: 'Our college hosts tech fests, cultural nights, hackathons, and guest lectures from industry leaders. Students enjoy year-round engagement with fun and learning.',
//     },
//     {
//       id: 'clubs',
//       title: 'Student Clubs',
//       img: clubsImg,
//       brief: 'Explore your passion with coding, drama, dance, and more!',
//       info: 'We have clubs for music, dance, coding, drama, photography, literature, and more. These clubs help students build skills, network, and have fun.',
//     },
//     {
//       id: 'facilities',
//       title: 'Modern Facilities',
//       img: facilitiesImg,
//       brief: 'State-of-the-art labs, digital library, and smart classrooms.',
//       info: 'Our campus includes high-tech labs, a fully digitized library, e-learning zones, fitness centers, and modern dormitories with all essential amenities.',
//     },
//   ];

//   return (
//     <div className="campus-container">
//       {cardData.map((card) => (
//         <div
//           key={card.id}
//           className={`card ${openCard === card.id ? 'open' : ''}`}
//           onClick={() => toggleCard(card.id)}
//         >
//           <img src={card.img} alt={card.title} />
//           <div className="card-content">
//             <h3>{card.title}</h3>
//             <p>{card.brief}</p>
//             <div className="card-info">
//               <p>{card.info}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CampusLife;
import React, { useState } from 'react';
import '../styles/campuslife.css';

import eventsImg from '../assets/events.jpg';
import clubsImg from '../assets/clubs.jpg';
import facilitiesImg from '../assets/facilities.jpg';
import libraryImg from '../assets/library.jpg';
import computerLabImg from '../assets/computerlab.jpg';
import exhibitionImg from '../assets/exhibition.jpg';

function CampusLife() {
  const [openCard, setOpenCard] = useState(null);

  const toggleCard = (id) => {
    setOpenCard(openCard === id ? null : id);
  };

  const cardData = [
    {
      id: 'events',
      title: 'Exciting Events',
      img: eventsImg,
      brief: 'Join various college fests, tech talks, and cultural programs.',
      info: 'Our college hosts tech fests, cultural nights, hackathons, and guest lectures from industry leaders. Students enjoy year-round engagement with fun and learning.',
    },
    {
      id: 'clubs',
      title: 'Student Clubs',
      img: clubsImg,
      brief: 'Explore your passion with coding, drama, dance, and more!',
      info: 'We have clubs for music, dance, coding, drama, photography, literature, and more. These clubs help students build skills, network, and have fun.',
    },
    {
      id: 'facilities',
      title: 'Modern Facilities',
      img: facilitiesImg,
      brief: 'State-of-the-art labs, digital library, and smart classrooms.',
      info: 'Our campus includes high-tech labs, a fully digitized library, e-learning zones, fitness centers, and modern dormitories with all essential amenities.',
    },
    {
      id: 'library',
      title: 'Digital Library',
      img: libraryImg,
      brief: 'Thousands of e-books, research papers, and study resources.',
      info: 'The library offers 24/7 access to academic content, research journals, digital books, and peaceful study zones for group or solo learning.',
    },
    {
      id: 'computerlab',
      title: 'Computer Lab',
      img: computerLabImg,
      brief: 'Equipped with modern systems and high-speed internet.',
      info: 'Our computer labs feature the latest technology and software for students to practice coding, design, AI/ML models, and more in a professional environment.',
    },
    {
      id: 'exhibition',
      title: 'Technical Exhibition',
      img: exhibitionImg,
      brief: 'Showcasing innovation and student-led engineering projects.',
      info: 'Annual tech exhibitions offer a platform to display student innovations, startup ideas, and real-world solutions. Judges and guests from industry evaluate and guide future innovators.',
    },
  ];

  return (
    <div className="campus-container">
      {cardData.map((card) => (
        <div
          key={card.id}
          className={`card ${openCard === card.id ? 'open' : ''}`}
          onClick={() => toggleCard(card.id)}
        >
          <img src={card.img} alt={card.title} />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.brief}</p>
            <div className="card-info">
              <p>{card.info}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CampusLife;
