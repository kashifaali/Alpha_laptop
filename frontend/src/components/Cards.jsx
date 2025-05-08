import React from "react";
import { Link } from "react-router-dom";

export default function Cards({laptop}) {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* Product Image */}
      <img
        src={laptop.imageUrl} // Replace with your actual image URL
        alt="Product"
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
     
      <div className="p-4">
        {/* Product Description */}
        <Link to={`/item_detail/${laptop._id}`} state={{ laptop }}>
        <p className="text-gray-700 text-3xl font-bold md:text-base">
          {laptop.name}
        </p>
        

        {/* Price */}
        <p className="text-lg font-light text-gray-900 mt-2 hover:underline cursor-pointer">
  {laptop.description}
</p>
        <p className="text-lg font-bold text-gray-900 mt-2">{laptop.price}</p>
        </Link>
       

        {/* Add to Cart Button */}
        <button className="w-full py-2 mt-3  transition-colors duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
