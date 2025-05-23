import React, { useEffect, useState } from "react";
import BottomNavbar from "../../components/BottomNavbar";
import Navbar from "../../components/Navbar";
import SideNavbar from "../../components/SideNavbar";
import Footer from "../../components/Footer";
import axios from "axios";


export default function Blog() {
  const [blog, setblog] = useState([]);

  useEffect(() => {
    axios.get('/api/blog')
      .then((response) => {
        setblog(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // <-- Empty array to run only once on mount


  return (

    <>
      <Navbar />
      <BottomNavbar />

      <div className="flex">
        {/* Left Side - Sidebar (Hidden on Mobile) */}
        <SideNavbar />


        {/* Right Side - Hero Section */}
        <div className="flex-1 p-4">
          <div className="max-w-7xl mx-auto px-4 py-12">
            {/* Page Heading */}
            <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Our Latest Blog Posts
            </h1>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blog.map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                      {blog.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-4">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </p>

                    <p className="text-gray-600 mb-6 hover:underline cursor-pointer">
                      {blog.content.length > 150
                        ? blog.content.substring(0, 150) + '...'
                        : blog.content}
                    </p>

                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>

  );
}
