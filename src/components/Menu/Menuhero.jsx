import React from "react";
import { motion } from "framer-motion";
import Navbar from "../Navbar";

const Menuhero = () => {
  const DINING_MENU_LINK =
    "https://drive.google.com/file/d/1VuGbInbON6tBIZWj6kX-zlW0RILnOg1R/view?usp=drivesdk";
  const COCKTAIL_MENU_LINK =
    "https://drive.google.com/file/d/14Bw5t2sv5T-pu821h5MBa2wv1WBV7OFH/view?usp=drivesdk";

  const openMenu = (link) => {
    window.open(link, "_blank");
  };

  // Stagger Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div>
      <Navbar />

      <div
        className="relative h-[90vh] flex flex-col items-center justify-center px-6 text-center bg-cover bg-[center_40%] bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/menubg.jpg?updatedAt=1763108238048')",
        }}
      >
        {/* Soft Overlay */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Animated Content */}
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-serif font-bold text-[#1f392a] mb-4 tracking-wide"
          >
            Explore Our Menus
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[#1f392a]/90 text-base md:text-lg max-w-2xl mb-10 leading-relaxed"
          >
            Discover a blend of flavors crafted by our culinary experts. From
            elegant dining selections to handcrafted cocktails — explore our
            menus and indulge in the Ameera’s experience.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => openMenu(DINING_MENU_LINK)}
              className="bg-[#1f392a] text-white px-10 py-3 text-lg rounded-sm
                         hover:bg-[#14261c]  duration-100 shadow-md font-medium"
            >
              View Dining Menu
            </button>

            <button
              onClick={() => openMenu(COCKTAIL_MENU_LINK)}
              className="border border-[#1f392a] text-[#1f392a] px-10 py-3 text-lg rounded-sm
             hover:bg-[#1f392a] hover:text-white duration-100 shadow-md font-medium"
            >
              View Cocktail Menu
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menuhero;
