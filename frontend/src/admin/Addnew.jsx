import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // ✅ only useNavigate

export default function AddNew() {
  const navigate = useNavigate(); // ✅ call the hook here

  const [addlaptop, setAddLaptop] = useState({
    name: '',
    company: '',
    model: '',
    price: '',
    ram: '',
    hardDisk: '',
    battery: '',
    screenSize: '',
    imageUrl: '',
    processor: '',
    graphicsCard: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/addnew", addlaptop);
      alert("Laptop added successfully!");

      // Clear form
      setAddLaptop({
        name: '',
        company: '',
        model: '',
        price: '',
        ram: '',
        hardDisk: '',
        battery: '',
        screenSize: '',
        imageUrl: '',
        processor: '',
        graphicsCard: '',
      });

      navigate('/'); // ✅ use the function returned by useNavigate
    } catch (error) {
      console.error("Error adding laptop:", error);
    }
  };

  // ... rest of your component stays the same


  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md mt-8">
      <h1 className="text-2xl font-bold text-center mb-6">Add New Laptop</h1>
      <form className="space-y-4" onSubmit={submit}>
        <input name="name" value={addlaptop.name} onChange={(e)=>setAddLaptop({...addlaptop, name: e.target.value})} placeholder="Laptop Name" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="company" value={addlaptop.company} onChange={(e)=>setAddLaptop({...addlaptop, company: e.target.value})} placeholder="Company" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="model" value={addlaptop.model} onChange={(e)=>setAddLaptop({...addlaptop, model: e.target.value})} placeholder="Model" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="price" type="number" value={addlaptop.price} onChange={(e)=>setAddLaptop({...addlaptop, price: e.target.value})} placeholder="Price ($)" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="ram" value={addlaptop.ram} onChange={(e)=>setAddLaptop({...addlaptop, ram: e.target.value})} placeholder="RAM (e.g. 8GB)" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="hardDisk" value={addlaptop.hardDisk} onChange={(e)=>setAddLaptop({...addlaptop, hardDisk: e.target.value})} placeholder="Hard Disk (e.g. 512GB SSD)" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="battery" value={addlaptop.battery} onChange={(e)=>setAddLaptop({...addlaptop, battery: e.target.value})} placeholder="Battery (e.g. 6 hours)" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="screenSize" value={addlaptop.screenSize} onChange={(e)=>setAddLaptop({...addlaptop, screenSize: e.target.value})} placeholder="Screen Size (inches)" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="imageUrl" value={addlaptop.imageUrl} onChange={(e)=>setAddLaptop({...addlaptop, imageUrl: e.target.value})} placeholder="Image URL" required className="w-full p-2 border border-gray-300 rounded" />
        <input name="processor" value={addlaptop.processor} onChange={(e)=>setAddLaptop({...addlaptop, processor: e.target.value})} placeholder="Processor (e.g. Intel i7)" className="w-full p-2 border border-gray-300 rounded" />
        <input name="graphicsCard" value={addlaptop.graphicsCard} onChange={(e)=>setAddLaptop({...addlaptop, graphicsCard: e.target.value})} placeholder="Graphics Card (optional)" className="w-full p-2 border border-gray-300 rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
          Add Laptop
        </button>
      </form>
    </div>
  );
}
