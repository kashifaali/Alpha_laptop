import React, { useEffect, useState } from 'react'
import Cards from '../../components/Cards'
import axios from 'axios';


export default function Hero() {

  const [laptops, setlaptops] = useState([]);

  useEffect(()=>{
    axios.get("/api/data")
    .then((response)=>{
      setlaptops(response.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
      <h1 className='text-black font-semibold mb-4'>New Laptops = {laptops.length}</h1>
      <hr className='text-gray-500 mb-3'/>
      
      {/* Grid for 3 cards in a row, centered on small screens */}
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:place-items-center">
      {laptops.map((laptop, index) => (
          <Cards key={index} laptop={laptop} />
        ))}
      </div>
      
     
    </>
  )
}
