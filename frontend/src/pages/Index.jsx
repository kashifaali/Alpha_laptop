import React from "react";
import Navbar from "../components/Navbar";
import BottomNavbar from "../components/BottomNavbar";
import Footer from "../components/Footer";
import Hero from "./Home/Hero";
import SideNavbar from "../components/SideNavbar";
import Blog from "./Blog/Blog";

export default function Index() {
  return (
    <>
      {/* Top Navbar */}
      <Navbar />

      {/* Bottom Navbar */}
      <BottomNavbar />

      {/* Main Layout */}
      <div className="flex">
        {/* Left Side - Sidebar (Hidden on Mobile) */}
        <SideNavbar />
    

        {/* Right Side - Hero Section */}
        <div className="flex-1 p-4">
          <Hero />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
