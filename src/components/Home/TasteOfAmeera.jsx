import React, { useState } from "react";

const TasteOfAmeera = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Lunch",
      image:
        "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=710",
    },
    {
      title: "Drinks",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Bottomless Options",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765",
    },
    {
      title: "Dessert",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    },
    {
      title: "Drinks",
      image:
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=722",
    },
  ];

  return (
    <div className="bg-[#F5F1E6] py-16 px-6 sm:px-12 lg:px-0 font-['Inter']">
      {/* Heading */}
      <h2 className="text-center text-[#233123] text-3xl sm:text-4xl font-serif font-semibold mb-12">
        Visual Taste of Ameera’s
      </h2>

      {/* Image Row */}
      <div className="w-full flex md:flex-row flex-col justify-center items-center overflow-hidden rounded-none gap-[6px] px-0">
        {items.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasteOfAmeera;
