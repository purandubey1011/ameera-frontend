import React from 'react';
import { motion } from 'framer-motion';

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
        <motion.div variants={fadeUp} className="w-full md:w-[80%]">
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/image.png?updatedAt=1762852047307"
            alt="Chef cooking at Ameera’s"
            className="rounded-[20px] shadow-lg border-[8px] border-[#FFF3E9]"
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
            At Ameera’s, we celebrate heritage through a modern lens.  
            Our kitchen pairs seasonal produce with classic techniques, while the bar
            reimagines timeless cocktails with house infusions and fragrant bitters.  
            Come slow down, savour the details, and let our team take care of the rest.
          </motion.p>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default AboutAmeera;
