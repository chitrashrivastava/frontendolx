import React, { useState } from 'react';
import { asyncsigninUser } from './store/actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {toast } from 'react-toastify'
const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const success = await dispatch(asyncsigninUser({ email, password }));
        if (success) {
            navigate('/profile');
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between items-center mb-6">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
          <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </div>
        <p className="text-gray-600 text-sm">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register here</a>.</p>
      </form>
    </div>
  );
};

export default Login;
