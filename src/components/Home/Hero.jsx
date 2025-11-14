import React from "react";
import { FaStar } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

// Parent container animation
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15, // how fast next item appears
      ease: "easeOut",
    },
  },
};

// Children animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/ammerahero.jpg?updatedAt=1762848859123')",
      }}
    >
      {/* Background Zoom Animation */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #181D1200 50%, #181D12 100%)",
        }}
      ></motion.div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content with stagger */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col justify-center md:justify-end items-center md:items-start min-h-screen px-10 md:px-24 md:pb-24 pb-10"
      >
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl md:text-8xl font-serif font-semibold mb-3"
        >
          Ameera’s
        </motion.h1>

        {/* Decorative Line Vector */}
        <motion.div
          variants={fadeUp}
          className="absolute top-[54vh] left-[10vw] -z-10"
        >
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/lineVector.png?updatedAt=1762851425377"
            alt=""
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={fadeUp} className="text-lg md:text-xl font-normal mb-10">
          Intimate flavours. Timeless hospitality.
        </motion.p>

        {/* Button */}
        <motion.button
          variants={fadeUp}
          onClick={() => navigate("/booking")}
          className="bg-white text-black px-6 py-3 text-sm font-normal hover:bg-amber-400 hover:text-black rounded-lg"
        >
          Reserve Your Table
        </motion.button>

        {/* Ratings */}
        <motion.div
          variants={fadeUp}
          className="flex items-center mt-12 space-x-3"
        >
          <IoIosPeople className="text-3xl text-amber-400" />
          <div>
            <p className="text-sm font-semibold">Our Happy Customers</p>
            <div className="flex items-center space-x-1 text-sm">
              <FaStar className="text-amber-400" />
              <span>4.8/5 (Good Ratings)</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
