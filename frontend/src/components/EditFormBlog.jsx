import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditFormBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch blog by ID on mount
  useEffect(() => {
    axios.get(`/api/blog/${id}`)
      .then(response => {
        const { title, content, imageUrl } = response.data;
        setFormData({ title, content, imageUrl });
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load blog');
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/blog/${id}`, formData);
      alert('Blog updated successfully!');
      navigate('/admin');
    } catch (err) {
      console.error(err);
      setError('Failed to update blog');
    }
  };

  if (loading) return <p className="text-center text-lg text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Edit Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Title</label>
            <input
              type="text"
              name="title"
className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-white text-black placeholder-black"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Content</label>
            <textarea
              name="content"
className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-white text-black placeholder-black"
              value={formData.content}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Image URL</label>
            <input
              type="text"
              name="imageUrl"
className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-white text-black placeholder-black"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow-md transition-all"
            >
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
