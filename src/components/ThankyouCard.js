import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContainer from './AuthContainer';

const ThankyouCard = () => {
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = '/';
    }, 6000);

    return () => {
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <AuthContainer>
      <div className="thank">
        <h1 className=" text-center text-lg text-zinc-600 ">
          Thank you for Signing In! <i class="fa-solid fa-face-smile"></i>
        </h1>
        <p className=" text-center text-4xl mt-2 mb-8 text-black font-medium leading-tight  mb-8">
          "Keep your face always toward the sunshine, and shadows will fall
          behind you."
        </p>
        <p className=" text-center text-lg font-medium  mb-5 text-zinc-600 ">
          Redirecting to{' '}
          <span className="text-indigo-600 font-medium text-lg underline">
            <Link to="/">Home Page </Link>
          </span>
          <i class="fa-solid fa-arrow-right"></i>
        </p>
      </div>
    </AuthContainer>
  );
};

export default ThankyouCard;
