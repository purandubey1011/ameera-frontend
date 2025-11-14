import React from "react";
import Navbar from "../Navbar";

const RestaurantBookingHero = () => {
  // 👉 Your third-party booking link here
  const BOOKING_LINK = "#";

  const handleBookingRedirect = () => {
    window.location.href = BOOKING_LINK;
  };

  return (
    <div>
      <Navbar />

      <div className="bg-[#f9eadd] h-[90vh] flex flex-col items-center justify-center px-4 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1f392a] mb-4 tracking-wide">
          Book Your Table
        </h1>

        {/* Paragraph */}
        <p className="text-[#1f392a] text-base md:text-lg max-w-xl mb-10 leading-relaxed">
          Reserve your perfect dining experience with just one click.  
          Select your preferred time and enjoy a seamless booking process.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleBookingRedirect}
          className="bg-[#1f392a] text-white px-12 py-3 text-lg font-medium 
                     rounded-sm hover:bg-[#14261c] transition-all duration-200"
        >
          Book Now
        </button>

      </div>
    </div>
  );
};

export default RestaurantBookingHero;
