import React from "react";
import { motion } from "framer-motion";

// Parent animation container
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      ease: "easeOut",
    },
  },
};

// Fade-up child animation
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutAmeera = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#FFF2E6] py-24 px-6 md:px-16 lg:px-24 text-[#181D12]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <motion.div
          variants={fadeUp}
          className="relative w-full md:w-[75%] h-[60vh] md:h-[80vh] overflow-hidden"
        >
          {/* Main Image */}
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg3.jpg?updatedAt=1763109992314"
            alt="Chef cooking at Ameera’s"
            className="w-full h-full object-cover"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Frame Image (overlapping) */}
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/frameaboutameera.png?updatedAt=1763204915799"
            alt="Decorative Frame"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div variants={fadeUp} className="text-left">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-serif italic font-normal mb-6"
          >
            About Ameera’s
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-relaxed mb-4 text-gray-600"
          >
            At Ameera’s, we celebrate heritage through a modern lens. Our
            kitchen pairs seasonal produce with classic techniques, while the
            bar reimagines timeless cocktails with house infusions and fragrant
            bitters. Come slow down, savour the details, and let our team take
            care of the rest.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutAmeera;
