import React, { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

export default function AddBlogs() {
  const navigate = useNavigate(); // ✅ call the hook here

  const [blog, setblog] = useState({
    title: '',
    content: '',
    imageUrl: ''
  })

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/addblog', blog);
      alert("blog save successfully");

      setblog({
        title: '',
        content: '',
        imageUrl: ''
      })

      navigate('/admin')

    }
    catch {

    }
  }



  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Write a Blog</h1>
        <form className="space-y-4" onSubmit={submit}>
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blog.title}
            onChange={(e) => setblog({ ...blog, title: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600 text-gray-900"
            required
          />

          <textarea
            name="content"
            placeholder="Write your content here..."
            value={blog.content}
            onChange={(e) => setblog({ ...blog, content: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded h-40 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600 text-gray-900"
            required
          />

          <input
            type="text"
            name="imageUrlUrl"
            placeholder="imageUrl URL"
            value={blog.imageUrl}
            onChange={(e) => setblog({ ...blog, imageUrl: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-600 text-gray-900"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
          >
            Publish Blog
          </button>
        </form>
      </div>
    </div>
  );
}
