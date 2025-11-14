import React from "react";

const Images = () => {
  const images = [
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg7.jpg?updatedAt=1763109992733",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg6.jpg?updatedAt=1763109992617",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg5.jpg?updatedAt=1763109992608",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg4.jpg?updatedAt=1763109992389",
    "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg3.jpg?updatedAt=1763109992314",
    'https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg1.jpg?updatedAt=1763109992087',
    'https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/imgg2.jpg?updatedAt=1763109991988',
    
  ];

  return (
    <section className="bg-[#fae9dd] md:py-8 py-2">
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-2 px-1 md:px-4 md:gap-6 max-w-[100vw] mx-auto flex-nowrap">
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[70vw] md:min-w-[25vw] h-[390px] overflow-hidden rounded-none"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Images;
