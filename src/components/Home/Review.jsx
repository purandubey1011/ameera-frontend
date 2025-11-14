import React from 'react';

const Review = () => {
  return (
    <section className="bg-[#1B3027] text-[#F5F1E6] py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Stats Section */}
        <div className="relative grid grid-cols-2">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1.4px] bg-[#F5F1E6]/30 -translate-x-1/2"></div>
          {/* Horizontal Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[1.8px] bg-[#F5F1E6]/30 -translate-y-1/2"></div>

          <div className="flex flex-col items-center justify-center py-12 px-6">
            <h3 className="text-5xl font-semibold mb-2">2</h3>
            <p className="text-lg tracking-wide">Michelin Stars</p>
          </div>
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <h3 className="text-5xl font-semibold mb-2">6</h3>
            <p className="text-lg tracking-wide">Total Chefs</p>
          </div>
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <h3 className="text-5xl font-semibold mb-2">1000+</h3>
            <p className="text-lg tracking-wide">Served Customers</p>
          </div>
          <div className="flex flex-col items-center justify-center py-12 px-6">
            <h3 className="text-5xl font-semibold mb-2">200+</h3>
            <p className="text-lg tracking-wide">Served Dishes</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-[33vw] md:h-[50vh] w-full overflow-hidden ">
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/review.jpg?updatedAt=1762852892531"
            alt="Customer dining at Ameera’s"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Review;