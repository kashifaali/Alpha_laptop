import React from "react";
import Navbar from "../../components/Navbar";
import BottomNavbar from "../../components/BottomNavbar";
import Footer from "../../components/Footer";

export default function ContactUs() {
  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Bottom Navbar */}
      <BottomNavbar />

      {/* Main Layout */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
              <p className="mb-4 text-gray-600">
                We would love to hear from you! Whether you have a question about products, pricing, need support, or anything else.
              </p>
              <ul className="text-gray-700">
                <li className="mb-2">
                  📍 Address: <span className="font-medium">123 Laptop Street, Tech City, Pakistan</span>
                </li>
                <li className="mb-2">
                  📞 Phone: <span className="font-medium">+92 300 1234567</span>
                </li>
                <li className="mb-2">
                  📧 Email: <span className="font-medium">contact@paklap.pk</span>
                </li>
                <li className="mb-2">
                  🕒 Hours: <span className="font-medium">Mon - Sat: 10AM - 8PM</span>
                </li>
              </ul>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-gray-600 font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-600 font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-600 font-medium">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Your message..."
                    className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-yellow-400"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 rounded transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
