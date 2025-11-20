import React, { useState } from "react";
import { motion } from "framer-motion";

const TasteOfAmeera = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Lunch",
      image:
        "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/more%20ameera%20img/A7403573.jpg",
    },
    {
      title: "Drinks",
      image:
        "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/taste%20of%20ameera/timg7.jpg?updatedAt=1763198518817",
    },
    {
      title: "Bottomless Options",
      image:
        "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/taste%20of%20ameera/timg3.jpg?updatedAt=1763198518828",
    },
    {
      title: "Dessert",
      image:
        "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/taste%20of%20ameera/timg1.jpg?updatedAt=1763198518756",
    },
    {
      title: "Drinks",
      image:
        "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/taste%20of%20ameera/timg4.jpg?updatedAt=1763198530104",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true,amount:.2 }}
      className="bg-[#F5F1E6] py-16 px-6 sm:px-12 lg:px-0 font-['Inter']"
    >
      {/* Heading */}
      <h2 className="text-center text-[#233123] text-3xl sm:text-4xl font-serif font-semibold mb-12">
        Visual Taste of Ameera’s
      </h2>

      {/* Image Row */}
      <div className="w-full flex md:flex-row flex-col justify-center items-center overflow-hidden rounded-none gap-[6px] px-0">
        {items.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.12,
            }}
            viewport={{ once: true }}
            className={`relative h-[400px] sm:h-[300px] overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
              activeIndex === index
                ? "flex-[1.5]"
                : activeIndex === null
                ? "flex-1"
                : "flex-[0.7]"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover brightness-90 transition-transform duration-700 ease-in-out hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-2xl sm:text-xl font-semibold">
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TasteOfAmeera;
