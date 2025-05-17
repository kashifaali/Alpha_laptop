import React from 'react';
import { FaUsers, FaLaptop, FaBlog, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function AdminSidenavbar({ setActiveSection, activeSection }) {
  const buttonClass = (section) =>
    `flex items-center gap-2 px-4 py-2 rounded transition ${
      activeSection === section
        ? 'bg-yellow-300 text-blue-900 font-semibold'
        : 'hover:text-yellow-300'
    }`;

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white shadow-lg">
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-blue-500">
        Admin Panel
      </div>
      <nav className="flex flex-col p-6 space-y-4 text-lg">
        <button onClick={() => setActiveSection('users')} className={buttonClass('users')}>
          <FaUsers />
          Users
        </button>
        <button onClick={() => setActiveSection('products')} className={buttonClass('products')}>
          <FaLaptop />
          Laptop
        </button>
        <button onClick={() => setActiveSection('blogs')} className={buttonClass('blogs')}>
          <FaBlog />
          Blogs
        </button>

       <button>
         <Link to="/addblog" className={buttonClass('add-blogs')}>
          <FaPlus />
          Write Blogs
        </Link>
        </button>

        <button>
          <Link to="/addnew" className={buttonClass('add-laptop')}>
          <FaPlus />
          Add New
        </Link>
          </button>
      </nav>
    </aside>
  );
}
