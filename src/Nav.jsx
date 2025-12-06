import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './index.css';

export function Nav({ user }) {
  const navigate = useNavigate();

  function handleAuthClick() {
    if (user) {
      // Sign out
      auth.signOut().then(() => {
        navigate('/');
      });
    } else {
      // Navigate to login
      navigate('/login');
    }
  }

  return (
    <nav className="navbar d-flex flex-row justify-content-end navbar-expand-lg p-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">GreenThread</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
            <li><NavLink className="nav-link" to="/compare">Compare Items</NavLink></li>
            <li><NavLink className="nav-link" to="/closet">Your Closet</NavLink></li>
            <li><NavLink className="nav-link" to="/contact">Contact Us</NavLink></li>
          </ul>

          <span className="navbar-text">
            <form className="container-fluid justify-content-start">
              <button 
                id="signUpLink" 
                type="button"
                onClick={handleAuthClick}
                style={{ cursor: 'pointer' }}
              >
                {user ? 'Log Out' : 'Log In'}
              </button>
            </form>
          </span>
        </div>
      </div>
    </nav>
  );
}