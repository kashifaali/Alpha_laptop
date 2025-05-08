import React, { useState } from 'react';
import Navbar from "../../components/Navbar";
import BottomNavbar from "../../components/BottomNavbar";
import Footer from "../../components/Footer";

export default function Cart() {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      description: "This is a short description of Product 1.",
      quantity: 2,
      price: 29.99,
      image: "/laptop1.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is a short description of Product 2.",
      quantity: 1,
      price: 49.99,
      image: "/laptop1.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is a short description of Product 3.",
      quantity: 1,
      price: 39.99,
      image: "/laptop1.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is a short description of Product 4.",
      quantity: 3,
      price: 19.99,
      image: "/laptop1.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      description: "This is a short description of Product 5.",
      quantity: 2,
      price: 59.99,
      image: "/laptop1.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      description: "This is a short description of Product 6.",
      quantity: 1,
      price: 25.99,
      image: "/laptop1.jpg",
    },
  ];

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Pagination calculations
  const totalPages = Math.ceil(cartItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = cartItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      {/* Top Navbar */}
      <Navbar />
      {/* Bottom Navbar */}
      <BottomNavbar />

      {/* Cart Page */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl text-gray-600 font-bold mb-8 text-center">Your Cart</h1>

        {/* Cart Table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-6 text-left font-semibold text-gray-600">Item</th>
                <th className="py-3 px-6 text-left font-semibold text-gray-600">Description</th>
                <th className="py-3 px-6 text-center font-semibold text-gray-600">Quantity</th>
                <th className="py-3 px-6 text-center font-semibold text-gray-600">Price</th>
                <th className="py-3 px-6 text-center font-semibold text-gray-600">Edit</th>
                <th className="py-3 px-6 text-center font-semibold text-gray-600">Delete</th>
              </tr>
            </thead>
            <tbody>
              {selectedItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="py-4 px-6 flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-36 h-24 object-cover rounded-md" />
                    <span className="font-medium">{item.name}</span>
                  </td>
                  <td className="py-4 px-6 text-black">{item.description}</td>
                  <td className="py-4 px-6 text-center">
                    <div className="inline-block text-black px-3 py-1 border border-black rounded-md">
                      {item.quantity}
                    </div>
                  </td>
                  <td className="py-4 px-6 text-center text-black">${item.price.toFixed(2)}</td>
                  <td className="py-4 px-6 text-center">
                    <button className="text-blue-600 hover:underline">Edit</button>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <button className="text-red-600 hover:underline">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination Buttons */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-gray-700">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
