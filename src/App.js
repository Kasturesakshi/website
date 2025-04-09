import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import CampusLife from './pages/CampusLife';
import News from './pages/News';
import Students from './pages/Students';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/news" element={<News />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;