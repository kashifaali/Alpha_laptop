import React, { useState } from 'react';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();

  const [loginuser, setloginuser] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous error

    try {
      const res = await axios.post("/api/login", loginuser);
      if (res.status === 200) {
          localStorage.setItem("userLoggedIn", "true"); // You can also store username or token
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError("Server error. Please try again later.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login</h2>

        {/* Show error */}
        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Email"
            name="text"
            onChange={(e) => setloginuser({ ...loginuser, username: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setloginuser({ ...loginuser, password: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input type="submit" value="Login" className="w-full mb-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition" />
        </form>

        <p className="text-center text-gray-600 mb-4">
          Don&apos;t have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>

        <p className="text-center text-gray-600 mt-2">
          <Link to="/adminlogin" className="text-blue-500 hover:underline">
            Login as Admin
          </Link>
        </p>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-3 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

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
