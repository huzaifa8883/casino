import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupSuccess } from './store/authslice';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.jpg";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newUser = { email, username, firstName, lastName, password };
    dispatch(signupSuccess(newUser));
    navigate('/home'); // Navigate to home page after signup
  };

  return (
    <div className="flex justify-center items-center min-h-screen backs px-4">
      <div className="gop p-6 md:p-8 rounded-md shadow-lg w-full max-w-[400px] font-serif text-white flex flex-col justify-start gap-6 relative">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="User Icon"
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full"
          />
        </div>

        {/* Inputs */}
        <div className="relative mt-8">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="bg-transparent text-white pl-10 pr-3 py-2 w-full border-b border-white outline-none focus:border-white focus:ring-0"
          />
          <FontAwesomeIcon icon={faUser} className="absolute left-3 top-2 text-gray-400" />
        </div>

        <div className="relative">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
            className="bg-transparent text-white pl-10 pr-3 py-2 w-full border-b border-white outline-none focus:border-white focus:ring-0"
          />
        </div>

        <div className="relative">
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder="First Name"
            className="bg-transparent text-white pl-10 pr-3 py-2 w-full border-b border-white outline-none focus:border-white focus:ring-0"
          />
        </div>

        <div className="relative">
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder="Last Name"
            className="bg-transparent text-white pl-10 pr-3 py-2 w-full border-b border-white outline-none focus:border-white focus:ring-0"
          />
        </div>

        <div className="relative">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="bg-transparent text-white pl-10 pr-3 py-2 w-full border-b border-white outline-none focus:border-white focus:ring-0"
          />
          <FontAwesomeIcon icon={faLock} className="absolute left-3 top-2 text-gray-400" />
        </div>

        {/* Signup Button */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handleSubmit}
            className="h-[50px] w-[140px] rounded-3xl text-white text-lg font-sans logincolor">
            Sign Up
          </button>
        </div>

        {/* Login Redirect */}
        <div className="mt-4 text-center">
          <p>
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className="cursor-pointer text-blue-400 hover:text-blue-600">
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
