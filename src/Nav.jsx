import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export function NavBar({ user }) {
  const handleAuthClick = async () => {
    if (user) {
      await auth.signOut();
      window.location.href = '/';
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">GreenThread</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/compare">Compare Items</Nav.Link>
            <Nav.Link as={Link} to="/closet">Your Closet</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            <button className="border rounded" onClick={handleAuthClick}>{user ? 'Log Out' : 'Log In'}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}