import React from 'react';

export default function Footer() {
  return (
    <div className="bg-gray-800 text-white py-10 mt-7">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul>
              <li className="mb-2">Laptop</li>
              <li className="mb-2">PC</li>
              <li className="mb-2">MacBook</li>
              <li className="mb-2">Tablets</li>
              <li className="mb-2">SSD</li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Blogs</li>
              <li className="mb-2">Reviews</li>
              <li className="mb-2">FAQs</li>
            </ul>
          </div>

          {/* Policy Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Policy</h3>
            <ul>
              <li className="mb-2">Privacy Policy</li>
              <li className="mb-2">Return Policy</li>
              <li className="mb-2">Terms of Service</li>
              <li className="mb-2">Shipping Policy</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul>
              <li className="mb-2">Follow Us on Social Media</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Email: contact@paklap.pk</li>
            </ul>
          </div>
        </div>

        {/* Below Footer */}
        <div className="mt-10 border-t border-gray-600 pt-6">
          <div className="flex justify-center space-x-6">
            {/* Social Media Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
              <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
              <i className="fab fa-twitter"></i> {/* Twitter icon */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
              <i className="fab fa-instagram"></i> {/* Instagram icon */}
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
              <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
            </a>
          </div>
          <div className="text-center text-gray-400 mt-4">
            <p>© 2025 PakLap.pk, All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
