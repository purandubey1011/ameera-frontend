import React from "react";
import Navbar from "../Navbar";

const Menuhero = () => {
  // 👉 Add your Google Drive menu links here
  const DINING_MENU_LINK = "https://drive.google.com/file/d/1VuGbInbON6tBIZWj6kX-zlW0RILnOg1R/view?usp=drivesdk";
  const COCKTAIL_MENU_LINK = "#";

  const openMenu = (link) => {
    window.open(link, "_blank");
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

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#1f392a] mb-4 tracking-wide">
            Explore Our Menus
          </h1>

          {/* Paragraph */}
          <p className="text-[#1f392a]/90 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
            Discover a blend of flavors crafted by our culinary experts. From
            elegant dining selections to handcrafted cocktails— explore our
            menus and indulge in the Ameera’s experience.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Dining Menu Button */}
            <button
              onClick={() => openMenu(DINING_MENU_LINK)}
              className="bg-[#1f392a] text-white px-10 py-3 text-lg rounded-sm
                       hover:bg-[#14261c] transition-all duration-200 shadow-md font-medium"
            >
              View Dining Menu
            </button>

            {/* Cocktail Menu Button */}
            <button
            //   onClick={() => openMenu(COCKTAIL_MENU_LINK)}
              className="border border-[#1f392a] text-[#1f392a] px-10 py-3 text-lg rounded-sm
                       hover:bg-[#1f392a] hover:text-white transition-all duration-200 shadow-md font-medium"
            >
              View Cocktail Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menuhero;
