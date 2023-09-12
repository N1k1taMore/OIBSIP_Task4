import React from 'react';
import { Link } from 'react-router-dom';
import AuthContainer from './AuthContainer';

const Login = () => {
  return (
    <AuthContainer>
      <div className="signupPage">
        <h1 className="text-4xl mt-2 mb-4 text-black font-medium">Sign in</h1>
        <p className="text-lg font-medium  mb-3 text-zinc-600 ">
          New to LeanPrep?{' '}
          <span className="text-indigo-600 font-medium text-lg underline">
            <Link to="/signup">Signup</Link>
          </span>
        </p>

        <label className="block" htmlFor="email">
          Email Address
        </label>
        <input
          className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black mb-3"
          type="email"
          id="email"
        />

        <label className="block" htmlFor="password">
          Password
        </label>
        <input
          className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black mb-10"
          type="password"
          id="password"
        />

        <Link to="/thank-you">
          <button className="butt">
            Continue
          </button>
        </Link>
      </div>
    </AuthContainer>
  );
};

export default Login;
