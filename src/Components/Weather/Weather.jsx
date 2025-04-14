import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState();
  const [inputCity, setInputCity] = useState(""); // For user input
  const apiKey = import.meta.env.VITE_API_URL;

  
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        console.log(`Fetching weather for: ${city}`); // Log the city being searched
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );

        // Log the API response to check the structure
        console.log(response.data);

        // Check if the response contains the necessary data
        if (response.data && response.data.current) {
          setWeatherData(response.data);
        } else {
          console.error("No weather data found for the city.");
          setWeatherData(null); // Reset in case of missing data
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null); // Reset on error
      }
    };

    fetchWeather();
  }, [city]);

  const handleCityChange = (e) => {
    setInputCity(e.target.value); // Update the input value
  };

  const handleCitySubmit = (e) => {
    e.preventDefault();
    if (inputCity.trim() !== "") {
      setCity(inputCity.toUpperCase()); // Update the city to fetch weather for
      setInputCity(""); // Clear input field
    }
  };

  return (
    <>
 




    <div>
      <h1 class="flex items-center justify-center text-3xl font-light  font-serif text-gray-800">
        Search weather conditions of your desired destinations
      </h1>

      {/* Input field for city */}
      <form
        onSubmit={handleCitySubmit}
        class="flex items-center justify-center items-center mt-[4vh]"
      >
        <input
          type="text"
          value={inputCity}
          onChange={handleCityChange}
          placeholder="Enter city name"
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Get Weather
        </button>
      </form>

      {/* Display weather data */}
      {weatherData ? (
        <div>
          <div class="flex items-center justify-center mt-[2vh] text-2xl font-light">
            <h1>Weather in {city}</h1>
            <img
              src={weatherData.current.condition.icon}
              alt={weatherData.current.condition.text}
              style={{ width: "50px", height: "50px" }}
            />

</div>
            <div class="flex flex-col items-center font-extralight">
              <p>Temperature: {weatherData.current.temp_c}°C</p>
              {/* <p>Weather: {weatherData.current.weather_descriptions[0]}</p> */}
              <p>Wind Speed: {weatherData.current.wind_mph} km/h</p>
              <p>Humidity: {weatherData.current.humidity}%</p>
              <p>Feels Like: {weatherData.current.feelslike_c}°C</p>
            </div>
          
        </div>
      ) : (
        <p></p>
      )}
    </div>
    </>
  );
};

export default Weather;
