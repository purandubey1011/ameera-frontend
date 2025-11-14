import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.20, // 👈 हर element 0.35 सेकंड के बाद आएगा
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const RestaurantBookingHero = () => {
  const BOOKING_LINK = "#";

  const handleBookingRedirect = () => {
    window.location.href = BOOKING_LINK;
  };

  return (
    <div>
      <Navbar />

      {/* Main animated container */}
      <motion.div
        className="bg-[#f9eadd] h-[90vh] flex flex-col items-center justify-center px-4 text-center"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-3xl md:text-4xl font-serif font-bold text-[#1f392a] mb-4 tracking-wide"
        >
          Book Your Table
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-[#1f392a] text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Reserve your perfect dining experience with just one click.
          Select your preferred time and enjoy a seamless booking process.
        </motion.p>

        {/* Button */}
        <motion.button
          variants={fadeUp}
          onClick={handleBookingRedirect}
          className="bg-[#1f392a] text-white px-12 py-3 text-lg font-medium rounded-sm hover:bg-[#14261c] duration-100"
        >
          Book Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default RestaurantBookingHero;
