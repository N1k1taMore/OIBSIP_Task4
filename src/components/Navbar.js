import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {' '}
          Mysterion
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
