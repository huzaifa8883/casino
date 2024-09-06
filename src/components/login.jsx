import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from "../assets/logo.jpg"

const Login = () => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
const navigate = useNavigate()

const handlesubmit = ()=>{
  if (email === 'arshad' && password === '56567') {
    navigate('/home');
  } else {
    // Optional: Add error handling or display a message
    alert('Invalid email or password');
  }

}
  return (
    <div className='flex justify-center items-center h-screen backs'>
      <div className='gop p-8 rounded-md shadow-lg w-[400px] h-[420px] font-serif text-white flex flex-col justify-start gap-6 relative -mt-20  '>
        <img
          src={logo}
          alt='User Icon'
          className='absolute top-[-40px] left-1/2 transform -translate-x-1/2 w-[120px] h-[120px] rounded-full my-20 -mx-14'
        />
        <div className='relative mt-40'>
          <input
          value={email}
          onChange={(e)=>setemail(e.target.value)}
            type='text'
            placeholder='username'
            className='bg-transparent text-white pl-10 pr-3 py-2 w-full border-b border-white outline-none focus:border-white focus:ring-0'
            style={{ backgroundColor: 'transparent' }} // Ensure background color is transparent
          />
          <FontAwesomeIcon
            icon={faUser}
            className='absolute left-3 top-2 text-gray-400'
          />
        </div>
        <div className='relative text-white'>
        
          <input
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            type='password'
            placeholder='password'
            className='bg-transparent text-white pl-10 pr-3 py-2 w-full border-b border-white outline-none focus:border-white focus:ring-0'
            style={{ backgroundColor: 'transparent' }} // Ensure background color is transparent
          />
          <FontAwesomeIcon
            icon={faLock}
            className='absolute left-3 top-2 text-gray-400'
          />
        </div>
        <div className='absolute top-80 left-1/1 transform -translate-x-1/2 mx-28'>
          <button onClick={handlesubmit} className='h-[50px] w-[120px] rounded-3xl text-white text-lg font-sans logincolor'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
