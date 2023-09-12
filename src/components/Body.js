import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className=" box">
      <Link to="/signup">
        <button className="page">
          Sign Up
        </button>
      </Link>

      <div className="Member">
        {' '}
        <span>Already a member?</span>{' '}
        <Link to="/signin">
          {' '}
          <span className="login">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Body;
