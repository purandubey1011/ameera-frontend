import React from "react";
import { motion } from "framer-motion";

const Images = () => {
  const images = [
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg7.jpg?updatedAt=1763109992733",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg6.jpg?updatedAt=1763109992617",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg5.jpg?updatedAt=1763109992608",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg4.jpg?updatedAt=1763109992389",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg3.jpg?updatedAt=1763109992314",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg1.jpg?updatedAt=1763109992087",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg2.jpg?updatedAt=1763109991988",
  ];

  return (
    <section className="bg-[#fae9dd] md:py-8 py-2">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-1 md:px-4 md:gap-6 max-w-[100vw] mx-auto flex-nowrap">

          {images.map((img, index) => (
            <motion.div
              key={index}
              className="min-w-[70vw] md:min-w-[25vw] h-[390px] overflow-hidden rounded-none"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }} // 👈 scroll trigger
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Images;
