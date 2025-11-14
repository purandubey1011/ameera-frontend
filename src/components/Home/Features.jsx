import React from "react";
import { FaGlassCheers, FaBirthdayCake, FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Features = () => {
  const items = [
    { icon: <FaGlassCheers />, label: "Signature Cocktails" },
    { icon: <FaBirthdayCake />, label: "Handmade Desserts" },
    { icon: <FaRegFileAlt />, label: "Seasonal Menus" },
  ];

  return (
    <section className="bg-[#F5F1E6] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#181D12]/20 text-center px-6 border-b-1 border-b-[#181D12]/20">

        {items.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center py-10 px-8"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            <div className="text-[#1B3027] text-6xl mb-4">
              {item.icon}
            </div>

            <h3 className="text-[#1B3027] font-medium text-lg">
              {item.label}
            </h3>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Features;
