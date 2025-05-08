import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const [signup, setsignup] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [message, setMessage] = useState("");
  

  const submit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post("/api/signup", signup);
      setMessage(res.data.message); // "User added successfully"
    } catch (error) {
      // ✅ Catch server message if available
      if (error.response && error.response.data && error.response.data.message) {
        setMessage("Signup failed: " + error.response.data.message);
      } else {
        setMessage("Signup failed: " + error.message);
      }
    }
  };
  



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        {/* username */}
        <form onSubmit={submit}>
        <input
          type="text"
          placeholder="username"
          name='username'
          onChange={(e) => setsignup({ ...signup, username: e.target.value })}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          name='email'
          onChange={(e) => setsignup({ ...signup, email: e.target.value })}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* password */}
        <input
          type="password"
          placeholder="password"
          name='password'
          onChange={(e) => setsignup({ ...signup, password: e.target.value })}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Sign Up Button */}
        <input type='submit' value="Sign up" className="w-full mb-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"/>        
        </form>
       

        {/* Already have account */}
        <p className="text-center text-gray-600 mb-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-3 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <button className="text-red-500 text-2xl hover:scale-110 transition">
            <FaGoogle />
          </button>
          <button className="text-blue-700 text-2xl hover:scale-110 transition">
            <FaFacebook />
          </button>
        </div>
      </div>
    </div>
  );
}
