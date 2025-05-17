import React, { useState, useEffect } from 'react';
import { FaUsers, FaLaptop, FaBlog } from 'react-icons/fa';
import AdminSidenavbar from '../components/AdminSidenavbar';
import Showblogs from './Showblogs';
import Showproduct from './Showproduct';
import Showusers from './Showusers';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('users');
  const navigate = useNavigate();

  // ✅ Check if admin is authenticated
  useEffect(() => {
    const checkAdminAuth = async () => {
      try {
        const res = await axios.get('/api/session', { withCredentials: true });
        if (!res.data.isAuthenticated || res.data.userType !== 'Admin') {
          navigate('/adminlogin');
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        navigate('/adminlogin');
      }
    };

    checkAdminAuth();
  }, [navigate]);

  // ✅ Render selected section
  const renderSection = () => {
    switch (activeSection) {
      case 'users':
        return <Showusers />;
      case 'products':
        return <Showproduct />;
      case 'blogs':
        return <Showblogs />;
      default:
        return <Showusers />;
    }
  };

  // ✅ Logout and redirect to login
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/logout", { withCredentials: true });
      localStorage.clear(); // clear any stored info if needed
      navigate("/adminlogin");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="h-screen w-64 bg-[#194DDB] text-white">
        <AdminSidenavbar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />

      </div>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-slate-50">
        {/* Top Navbar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>
          <form onSubmit={submit}>
            <input
              type="submit"
              value="Logout"
              className="bg-rose-500 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
            />
          </form>
        </div>

        {/* Conditionally Rendered Section */}
        {renderSection()}
      </main>
    </div>
  );
}
