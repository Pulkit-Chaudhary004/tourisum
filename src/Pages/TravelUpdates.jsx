import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import InfoTravel from '../Components/InfoTravel/InfoTravel';
import Weather from '../Components/Weather/Weather';
// import Destinations from '../Components/Destinations/Destinations';
import HotelsList from '../Components/HotelsList/HotelsList';
import Footer from '../Components/Footer/Footer';

const TravelUpdates = () => {
  return (
    <>
    <div className="p-6">
      <Navbar />
      <InfoTravel/>

      {/* <Destinations/> */}
      <HotelsList />
      <Weather />
      <Footer
          article="https://the-shooting-star.com/what-no-one-tells-you-about-visiting-kashmir/"
          facebook="https://www.facebook.com/login/"
          twitter="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
          google="https://myaccount.google.com/?nlr=1"
          instagram="https://www.instagram.com/accounts/login/?hl=en"
          linkedin="https://www.linkedin.com/in/chaudharypulkit/"
          github="https://github.com/"
        />

    </div>
    </>
  );
};

export default TravelUpdates;
