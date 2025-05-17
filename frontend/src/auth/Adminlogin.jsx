import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Adminlogin() {

  const navigate = useNavigate();
  const [admin, setAdmin] = useState({
    username: "",
    password: ""
  });


const [errorMsg, setErrorMsg] = useState("");

const submit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("/api/adminlogin", admin);
    if (res.status === 200) {
      navigate("/admin");
    }
  } catch (error) {
    setErrorMsg(error.response?.data?.message || "Admin login failed");
  }
};



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h2>
        {errorMsg && (
  <p className="text-red-600 text-center mt-2">{errorMsg}</p>
)}


        <form onSubmit={submit}>
          <input
            type="text"
            placeholder="Admin Username"
            name="username"
            onChange={(e) => setAdmin({ ...admin, username: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded bg-gray-50 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />



          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition">
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to User Login
          </Link>
        </p>
      </div>
    </div>
  );
}
