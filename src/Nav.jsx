import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './index.css';

export function Nav() {
  return (
    <nav id="nav" classNameName="navbar d-flex flex-row justify-content-end navbar-expand-lg p-2">
      <div classNameName="container-fluid">
        <Link classNameName="navbar-brand" to="/">GreenThread</Link>

        <button
          classNameName="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>

        <div classNameName="collapse navbar-collapse" id="navbarText">
          <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
            <li><NavLink classNameName="nav-link" to="/">Home</NavLink></li>
            <li><NavLink classNameName="nav-link" to="/shop">Shop</NavLink></li>
            <li><NavLink classNameName="nav-link" to="/compare">Compare Items</NavLink></li>
            <li><NavLink classNameName="nav-link" to="/closet">Your Closet</NavLink></li>
            <li><NavLink classNameName="nav-link" to="/contact">Contact Us</NavLink></li>
          </ul>

          <span classNameName="navbar-text">
            <form classNameName="container-fluid justify-content-start">
              <NavLink id="signUpLink" classNameName="nav-link" to="/login">Log In</NavLink>
            </form>
          </span>
        </div>
      </div>
    </nav>
  );
}
