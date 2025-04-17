import { useEffect, useState } from "react";

const HotelsList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched hotels:", data);
        setHotels(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <hr className="border-t-2 border-gray-300 mx-[10vw]" />
      <div className="px-20 py-10 max-w-7xl mx-auto space-y-6">
        {loading ? (
          <div>Loading hotels...</div>
        ) : (
          hotels.map((hotel) => (
            <div
              key={hotel._id}
              className="flex flex-col items-center md:flex-row border rounded-2xl shadow-md bg-white overflow-hidden h-50 hover:border-blue-500"
            >
              <img
                src={hotel.image || "default-image.jpg"}
                alt={hotel.name}
                className="mx-[1vw] my-[1vw] w-full md:w-1/3 h-auto border rounded-lg"
              />
              <div className="p-6 mt-[0vh] flex flex-col justify-between md:w-2/3">
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold text-black">
                      {hotel.name}{" "}
                      <span className="text-sm font-medium text-gray-500">
                        ({hotel.type || "Not Available"})
                      </span>
                    </h2>
                    <span className="text-blue-800 px-3 py-1 rounded text-sm font-medium">
                      ⭐ {hotel.ratings || "Not Rated"}
                    </span>
                  </div>
                  <p className="text-blue-500 font-medium text-sm mt-1">
                    {hotel.location || "Location Not Available"}
                  </p>
                  <p className="text-yellow-700 font-light mt-2">
                    {hotel.description || "Description Not Available"}
                  </p>
                </div>
                <div className="mt-8 flex justify-between items-center">
                  <span className="text-gray-800 text-2xl">
                    <span className="font-semibold">₹{hotel.price}</span>
                    {" + "}
                    <span className="font-thin text-sm">₹{hotel.taxes} taxes</span>
                  </span>
                </div>
                <p className="text-yellow-700 font-light mt-2">{hotel.Offer}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HotelsList;
