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

      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Laptop Details</h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Image Section */}
          <div className="md:w-1/2 w-full">
            <img
              src={laptop.imageUrl}
              alt={laptop.name}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 w-full space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">{laptop.name}</h2>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Company:</span> {laptop.company}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Model:</span> {laptop.model}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Processor:</span> {laptop.processor || 'N/A'}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Graphics Card:</span> {laptop.graphicsCard || 'N/A'}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">RAM:</span> {laptop.ram}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Hard Disk:</span> {laptop.hardDisk}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Battery:</span> {laptop.battery}
            </p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Screen Size:</span> {laptop.screenSize}
            </p>
            <p className="text-2xl font-bold text-green-600 mt-4">Price: ${laptop.price}</p>

            <button className="mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
