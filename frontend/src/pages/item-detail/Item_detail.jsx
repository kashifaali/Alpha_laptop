import { useLocation } from 'react-router-dom';
import React from 'react';
import Navbar from "../../components/Navbar";
import BottomNavbar from "../../components/BottomNavbar";
import Footer from "../../components/Footer";

export default function Item_detail() {
  const location = useLocation();
  const { laptop } = location.state || {};

  if (!laptop) {
    return <div className="text-center mt-10 text-red-500">No item data available.</div>;
  }

  return (
    <>
      <Navbar />
      <BottomNavbar />

      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold text-black mb-8">Item Details</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <img src={laptop.imageUrl} alt={laptop.name} className="w-full h-auto rounded-lg shadow-md" />
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">{laptop.name}</h2>
            <p className="text-lg font-light text-gray-700 hover:underline cursor-pointer">{laptop.description}</p>
            <p><span className="font-medium">Model:</span> {laptop.model}</p>
            <p><span className="font-medium">Company:</span> {laptop.company}</p>
            <p className="text-xl font-semibold text-green-600">{laptop.price}</p>
            <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
