import React, { useState } from "react";

function Tourist({ places }) {
  const [filteredPlaces, setFilteredPlaces] = useState(places);

  const filterPlaces = (category) => {
    if (category === "All") {
      setFilteredPlaces(places);
    } else {
      const filtered = places.filter((place) => place.category === category);
      setFilteredPlaces(filtered);
    }
  };

  return (
    <>
      <div className="my-[4vw] flex flex-col items-center justify-center">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => filterPlaces("All")}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            All
          </button>
          <button
            onClick={() => filterPlaces("Adventure")}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Adventure
          </button>
          <button
            onClick={() => filterPlaces("Garden")}
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
          >
            Garden
          </button>
          <button
            onClick={() => filterPlaces("Water")}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Water
          </button>
          <button
            onClick={() => filterPlaces("Spiritual")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Spiritual
          </button>
        </div>
      </div>

      {/* Filtered Places */}
      {/* Filtered Places as Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-[1vw] gap-8 px-6 my-10 " >
  
  {filteredPlaces.map((place) => (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 ">
    <a
      key={place.id}
      href={place.redirectLink}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105 w-[70%]"
       
    >
      <div className="relative" style={{height:"70%",width:"100%"}}>
      <img
        src={place.image}
        alt={place.name}
        className=" object-cover rounded-t-2xl"
         style={{height:
          "100%",
          width:"100%"
         }}
      />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-600 mb-2 font-serif">{place.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{place.description}</p>
      </div>
    </a>
    </div>
  ))}
</div>

    </>
  );
}

export default Tourist;
