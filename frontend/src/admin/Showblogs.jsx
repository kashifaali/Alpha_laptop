import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this blog post?")) {
      try {
        await axios.delete(`/api/blog/${id}`);
setblog(blog.filter(item => item._id !== id));
      } catch (error) {
        console.error("Error deleting blog post:", error);
      }
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 p-4">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Latest Blog Posts
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {blog.map((blog) => (
  <div
    key={blog._id}
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
      <p className="text-gray-600 mb-6">
        {blog.content.length > 150
          ? blog.content.substring(0, 150) + '...'
          : blog.content}
      </p>

      {/* Edit and Delete Buttons */}
      <div className="flex justify-end space-x-20">
                      <Link to={`/edit-blog/${blog._id}`}>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        </Link>
        <button
          onClick={() => handleDelete(blog._id)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
}
