import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function Editformlaptop() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    model: '',
    price: '',
    ram: '',
    hardDisk: '',
    battery: '',
    screenSize: '',
    imageUrl: '',
    processor: '',
    graphicsCard: ''
  });

  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        const res = await axios.get(`/api/data`);
        const laptop = res.data.find(item => item._id === id);
        if (laptop) {
          setFormData({
            name: laptop.name || '',
            company: laptop.company || '',
            model: laptop.model || '',
            price: laptop.price || '',
            ram: laptop.ram || '',
            hardDisk: laptop.hardDisk || '',
            battery: laptop.battery || '',
            screenSize: laptop.screenSize || '',
            imageUrl: laptop.imageUrl || '',
            processor: laptop.processor || '',
            graphicsCard: laptop.graphicsCard || ''
          });
        }
      } catch (err) {
        console.error("Error fetching laptop:", err);
      }
    };
    fetchLaptop();
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
      await axios.put(`/api/edit-laptop/${id}`, formData);
      alert("Laptop updated successfully!");
      navigate("/admin");
    } catch (error) {
      console.error("Error updating laptop:", error);
      alert("Failed to update laptop.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Laptop</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
  ['name', 'Laptop Name'],
  ['company', 'Company'],
  ['model', 'Model'],
  ['price', 'Price'],
  ['ram', 'RAM'],
  ['hardDisk', 'Hard Disk'],
  ['battery', 'Battery'],
  ['screenSize', 'Screen Size'],
  ['imageUrl', 'Image URL'],
  ['processor', 'Processor (optional)'],
  ['graphicsCard', 'Graphics Card (optional)']
].map(([field, label]) => (
  <div key={field}>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      type={field === 'price' ? 'number' : 'text'}
      name={field}
      value={formData[field]}
      onChange={handleChange}
      placeholder={`Enter ${label}`}
className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 bg-white text-black placeholder-black"
      required={!(field === 'processor' || field === 'graphicsCard')}
    />
  </div>
))}


        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Laptop
        </button>
      </form>
    </div>
  );
}
