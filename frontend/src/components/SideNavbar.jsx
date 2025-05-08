import React from "react";

export default function SideNavbar() {
  return (
    <aside className="hidden sm:block w-64 bg-white text-gray-900 border border-gray-300 mt-4 ml-3 shadow-lg rounded-lg p-4">
      <ul className="space-y-2">
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer border-b border-gray-300">Dell</li>
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer border-b border-gray-300">HP</li>
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer border-b border-gray-300">Lenovo</li>
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer border-b border-gray-300">Apple</li>
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer border-b border-gray-300">Asus</li>
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer border-b border-gray-300">Acer</li>
        <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">MSI</li>
      </ul>
    </aside>
  );
}
