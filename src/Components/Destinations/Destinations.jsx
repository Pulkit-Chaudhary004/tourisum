import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/destinations') // assuming same endpoint
      .then(response => {
        setHotels(response.data);
      })
      .catch(error => {
        console.error('Error fetching hotels:', error);
      });
  }, []);

  return (
    <div className="p-2 mt-[6vh]">
    <h1 className="text-5xl font-bold text-sky-900 playfair-display font-bold mb-0 text-sky-900 mt-[10vh] mx-[22vw] ">Hotels in Kashmir</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[10vh]">
      {hotels.map((hotel, index) => (
        <div key={index} className="p-4 bg-white shadow-md rounded-xl">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-2xl font-semibold text-blue-800">{hotel.name}</h2>
          <p className="text-gray-700">{hotel.location}</p>
          <p className="mt-2 text-sm text-gray-600">
            Facilities: {hotel.facilities.join(", ")}
          </p>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default Hotels;
