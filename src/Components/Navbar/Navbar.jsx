import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== "") {
      // Redirect to Google search with the search term in the same tab
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchTerm
      )}`;
      window.location.href = googleSearchUrl; // Open in the same tab
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <div className="nav h-[10vh] flex items-center justify-between bg-white rounded-lg  fixed top-0 left-0 w-full bg-white  z-50">
      {/* Logo Section */}
      <div className="nav-logo text-3xl font-extrabold text-black">
        Kashmir Tourism
      </div>

      {/* Menu Section */}
      <ul className="nav-menu flex space-x-8 text-lg text-slate-700 font-medium">
        <li>
          <Link
            to="/HomePage"
            className="hover:text-lime-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/AboutKashmir"
            className="hover:text-lime-400 transition duration-300 ease-in-out">
            Discover Kashmir
          </Link>
        </li>
        
        <li>
          <Link to="/TravelUpdates"
           className="hover:text-lime-400 transition duration-300 ease-in-out">
          Accomodations
          </Link>
        </li>

        {/* <li> 
        <Link to="/contactUs"
            className="hover:text-lime-400 transition duration-300 ease-in-out">
          Contact Us
         </Link>
        </li>

        <li> 
            <Link to="/SignUp"
           className="hover:text-lime-400 transition duration-300 ease-in-out">
         SignUp
         </Link>
        </li> */}
      </ul>

      {/* Search Section */}
      <div className="relative flex items-center space-x-4">
        <p
          id="search"
          className="text-white text-2xl cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out"
          onClick={handleSearchToggle}
        >
          <FontAwesomeIcon icon={faSearch} />
        </p>

        {searchOpen && (
          <div className="absolute top-full right-0 mt-2 bg-white p-2 rounded-lg shadow-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-l-lg p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
            <button
              onClick={handleSearchSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
            >
              Go
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
