import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import AuthContainer from './AuthContainer';

const SignupPage = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Form submitted', data);
    if (Object.keys(errors).length === 0) {
      navigate('/thank-you');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthContainer>
        <div className="signupPage">
          <h1 className="text-4xl mt-2 mb-8 text-black font-medium">Sign Up</h1>
          <p className="text-lg font-medium  mb-3 text-zinc-600 ">
            Already a member?{' '}
            <span className="text-indigo-600 font-medium text-lg underline">
              <Link to="/signin">Login</Link>
            </span>
          </p>

          <div className="flex justify-between gap-3 items-center mb-4 ">
            <div className="">
              <label className=" block text-start " htmlFor="firstName">
                First Name
              </label>
              <input
                className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black "
                type="text"
                id="firstName"
                {...register('firstName', {
                  required: {
                    value: true,
                    message: 'First Name is required',
                    maxLength: 80,
                  },
                })}
              />
              <p className="error ">
                {errors.firstName?.message}
              </p>
            </div>
            <div className="">
              <label className="block text-start " htmlFor="lastName">
                Last Name
              </label>
              <input
                className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black "
                type="text"
                id="lastName"
                {...register('lastName', {
                  required: {
                    value: true,
                    message: 'Last Name is required',
                    maxLength: 80,
                  },
                })}
              />
              <p className="error ">
                {errors.lastName?.message}
              </p>
            </div>
          </div>

          <label className="block" htmlFor="email">
            Email Address
          </label>
          <input
            className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black "
            type="email"
            id="email"
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required',
              },
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Please use valid email address',
              },
            })}
          />
          <p className="error">
            {errors.email?.message}
          </p>

          <label className="block" htmlFor="password">
            Set Password
          </label>
          <input
            className="input-field border-2 h-9 w-full rounded-lg px-3 py-2  text-black"
            type="password"
            id="password"
            {...register('password', {
              required: {
                value: true,
                message: 'Password is required',
              },
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
                message:
                  'Password must contain at least one uppercase letter, one lowercase letter, and one number',
              },
            })}
          />
          <p className="error">
            {errors.password?.message}
          </p>
          <button
            type="submit"
            className="but"
          >   Next
          </button>
        </div>
      </AuthContainer>
    </form>
  );
};

export default SignupPage;
