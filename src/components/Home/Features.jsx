import React from "react";
import { FaGlassCheers, FaBirthdayCake, FaRegFileAlt } from "react-icons/fa";

const Features = () => {
  return (
    <section className="bg-[#F5F1E6] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#181D12]/20 text-center px-6 border-b-1 border-b-[#181D12]/20">

        {/* Feature 1 */}
        <div className="flex flex-col items-center justify-center py-10 px-8">
          <FaGlassCheers className="text-[#1B3027] text-6xl mb-4" />
          <h3 className="text-[#1B3027] font-medium text-lg">Signature Cocktails</h3>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center justify-center py-10 px-8">
          <FaBirthdayCake className="text-[#1B3027] text-6xl mb-4" />
          <h3 className="text-[#1B3027] font-medium text-lg">Handmade Desserts</h3>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center justify-center py-10 px-8">
          <FaRegFileAlt className="text-[#1B3027] text-6xl mb-4" />
          <h3 className="text-[#1B3027] font-medium text-lg">Seasonal Menus</h3>
        </div>
      </div>
    </section>
  );
};

export default Features;
