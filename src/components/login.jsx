import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, setUserFromLocalStorage } from './store/authslice'; // Correct path to the slice
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.jpg";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    // Check if user is already logged in from localStorage
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);

  const handleSubmit = () => {
    // Get user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the entered credentials match the saved user
    if (savedUser && savedUser.email === email && savedUser.password === password) {
      dispatch(loginSuccess(savedUser)); // Save user data to Redux
      navigate('/home'); // Redirect to home page
    } else {
      alert('Invalid email or password');
    }
  };

  if (isAuthenticated) {
    navigate('/home');
  }

  return (
    <div className="flex justify-center items-center h-screen backs">
      <div className="gop p-8 rounded-md shadow-lg w-[400px] h-[500px] font-serif text-white flex flex-col justify-start gap-6 relative -mt-20">
        <img
          src={logo}
          alt="User Icon"
          className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-[120px] h-[120px] rounded-full my-20 -mx-14"
        />
        <div className="relative mt-40">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Username"
            className="bg-transparent text-white pl-10 pr-3 py-2 w-full border-b border-white outline-none focus:border-white focus:ring-0"
          />
          <FontAwesomeIcon icon={faUser} className="absolute left-3 top-2 text-gray-400" />
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
        {/* Button with margin for spacing */}
        <div className="mt-8 flex justify-center">
          <button onClick={handleSubmit} className="h-[50px] w-[120px] rounded-3xl text-white text-lg font-sans logincolor">
            Login
          </button>
        </div>
        {/* Signup link with proper spacing */}
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="cursor-pointer text-blue-400 hover:text-blue-600"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
