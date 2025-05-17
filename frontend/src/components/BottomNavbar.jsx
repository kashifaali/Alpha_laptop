import React from "react";
import { Home, LocalOffer, Article, ContactMail } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";



export default function BottomNavbar() {

  const location = useLocation(); // Get current URL
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <nav className="w-full bg-white shadow-md">
      <ul className="flex justify-between md:justify-around items-center p-2 md:px-4 md:py-2 w-full max-w-screen-lg mx-auto">
        {/* Home */}
        <Link to={"/"}>

        <li className={`flex flex-col items-center font-semibold cursor-pointer ${isActive("/") ? "text-[#FABB1A]" : "text-black hover:text-[#FABB1A]"}`}>
          <Home fontSize="small" className="md:hidden" />
          <span className="text-xs md:text-base">Home</span>
        </li>

        </Link>
        

        {/* Deals */}
        <li className="flex flex-col items-centerfont-semibold text-white bg-red-500 py-1 px-6 rounded-full hover:text-[#FABB1A] cursor-pointer">
          <LocalOffer fontSize="small" className="md:hidden" />
          <span className="text-xs md:text-base">Deals</span>
        </li>

        {/* Blogs */}
        <Link to={"/blog"}>
        <li className={`flex flex-col items-center font-semibold cursor-pointer ${isActive("/blog") ? "text-[#FABB1A]" : "text-black hover:text-[#FABB1A]"}`}>
          <Article fontSize="small" className="md:hidden" />
          <span className="text-xs md:text-base">Blogs</span>
        </li>
        </Link>
        

        {/* Contact Us */}
        <Link to={"/contact"}>
        <li className={`flex flex-col items-center font-semibold cursor-pointer ${isActive("/contact") ? "text-[#FABB1A]" : "text-black hover:text-[#FABB1A]"}`}>
        <ContactMail fontSize="small" className="md:hidden" />
          <span className="text-xs md:text-base">Contact Us</span>
        </li>
        </Link>

        
        
      </ul>
    </nav>
  );
}
