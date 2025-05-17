import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Showproduct() {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => {
        setLaptops(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/delete-laptop/${id}`);
      setLaptops(laptops.filter((laptop) => laptop._id !== id));
    } catch (error) {
      console.error("Error deleting laptop:", error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Laptops Inventory</h1>
      <p className="text-gray-500 mb-6">Total laptops: <span className="font-semibold">{laptops.length}</span></p>
      <hr className="mb-8 border-gray-300" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {laptops.map((laptop) => (
          <div key={laptop._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {/* Laptop Image and Info Link */}
            <Link to={`/item_detail/${laptop._id}`} state={{ laptop }}>
              <img
                src={laptop.imageUrl || "/images/default-laptop.jpg"}
                alt={laptop.name || "Laptop"}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-blue-700 mb-1">{laptop.name || 'Laptop Name'}</h2>
                <p className="text-gray-600 text-sm">Model: {laptop.model || 'N/A'}</p>
                <p className="text-gray-600 text-sm">Price: <span className="font-medium">${laptop.price || 'N/A'}</span></p>
              </div>
            </Link>

            {/* Buttons - Outside the Link */}
            <div className="flex justify-between px-4 pb-4 mt-auto">
              <Link to={`/edit-laptop/${laptop._id}`}>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-medium px-4 py-2 rounded">
                  Edit
                </button>
              </Link>
              <button
                onClick={() => handleDelete(laptop._id)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
