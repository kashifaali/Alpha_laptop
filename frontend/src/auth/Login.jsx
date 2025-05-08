import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

  const [loginuser, setloginuser] = useState({
    email: "",
    password: ""
  })

  const submit = (e)=>{
    e.preventDefault();
    try{
      axios.post("/api/login", loginuser);
      alert("data send successfully");
    }
    catch(error){
      console.log(error);
    }
  }


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login</h2>

        {/* Email */}
        <form onSubmit={submit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e)=>{setloginuser({...loginuser, email: e.target.value})}}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e)=>{setloginuser({...loginuser, password: e.target.value})}}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input type="submit" value="submit" className="w-full mb-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition" />
        </form>
        

        {/* Don't have an account? */}
        <p className="text-center text-gray-600 mb-4">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
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
