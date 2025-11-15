import React from "react";
import { motion } from "framer-motion";

const Review = () => {
  return (
    <section className="bg-[#1B3027] text-[#F5F1E6] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Stats Section */}
        <motion.div
          className="relative grid grid-cols-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1.7px] bg-[#F5F1E6]/30 -translate-x-1/2"></div>
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[1.7px] bg-[#F5F1E6]/30 -translate-y-1/2"></div>

          {[
            { num: "2", label: "Michelin Stars" },
            { num: "6", label: "Total Chefs" },
            { num: "1000+", label: "Served Customers" },
            { num: "200+", label: "Served Dishes" },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center py-12 px-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl font-semibold mb-2">{item.num}</h3>
              <p className="text-md text-center md:text-lg tracking-wide">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-[33vw] md:h-[50vh] w-full overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/review.jpg?updatedAt=1762852892531"
            alt="Customer dining at Ameera’s"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Review;
