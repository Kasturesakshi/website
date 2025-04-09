import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
  return (
    <BSNavbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <BSNavbar.Brand href="/">KHCollege</BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
            <NavLink className="nav-link" to="/courses">Courses</NavLink>
            <NavLink className="nav-link" to="/admissions">Admissions</NavLink>
            <NavLink className="nav-link" to="/campus-life">Campus Life</NavLink>
            <NavLink className="nav-link" to="/news">News</NavLink>
            <NavLink className="nav-link" to="/students">Students</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;