import React from 'react';

const AboutAmeera = () => {
  return (
    <section className="bg-[#FFF2E6] py-24 px-6 md:px-16 lg:px-24 text-[#181D12]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="w-full md:w-[80%]">
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/image.png?updatedAt=1762852047307"
            alt="Chef cooking at Ameera’s"
            className="rounded-[20px] shadow-lg border-[8px] border-[#FFF3E9]"
          />
        </div>

        {/* Text Section */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-serif italic font-normal mb-6">
            About Ameera’s
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-4 text-gray-600">
            At Ameera’s, we celebrate heritage through a modern lens.
          
          
            Our kitchen pairs seasonal produce with classic techniques, while the bar
            reimagines timeless cocktails with house infusions and fragrant bitters.
          
         
            Come slow down, savour the details, and let our team take care of the rest.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAmeera;
