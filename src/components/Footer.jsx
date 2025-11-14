import React from "react";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001510] text-[#E3C28D] py-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 border border-[#E3C28D]/30 divide-y md:divide-y-0 md:divide-x divide-[#E3C28D]/30">
        
        {/* --- Logo + Socials --- */}
        <div className="flex flex-col items-center justify-between px-10 py-8">
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/logo%20ameera.png?updatedAt=1762856954788"
            alt="Ameera’s Logo"
            className="w-48 md:w-56 mb-8"
          />
          <div className="flex justify-center gap-6 text-2xl border-t border-[#E3C28D]/30 w-full pt-4">
            {[FaInstagram, FaYoutube, FaLinkedin, FaFacebook].map((Icon, i) => (
              <Icon
                key={i}
                className="cursor-pointer hover:scale-110 transition-transform"
              />
            ))}
          </div>
        </div>

        {/* --- Quick Links --- */}
        <div className="flex flex-col p-8 md:pl-10">
          <h3 className="font-semibold text-lg mb-4 tracking-wide">Quick Links</h3>
          <ul className="space-y-1">
            {[
              "Our Beers",
              "Our Brewery",
              "Find Our Beer",
              "Brewery Walk & Events",
              "About us",
              "Blog",
              "Contact us",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-[#E3C28D]/85 hover:text-[#E3C28D] text-[15px] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Brewery + Contact --- */}
        <div className="flex flex-col justify-between py-8 px-8">
          <div className="border-b border-[#E3C28D]/30 pb-5 mb-5">
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-2">
              <FiMapPin className="text-[#E3C28D]" /> Brewery
            </h3>
            <p className="text-[#E3C28D]/80 text-sm leading-relaxed">
              Sy No. 80, Industrial Plot bearing Block, 9 to 20, Sadahalli Main Rd,
              Settigere Village, Jala Hobli, Bengaluru, Karnataka 562157
            </p>
          </div>
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-2">
              <FiMail className="text-[#E3C28D]" /> Contact
            </h3>
            <p className="text-[#E3C28D]/90 text-sm">example@gmail.com</p>
            <p className="text-[#E3C28D]/90 text-sm mt-1">+91 564554422</p>
          </div>
        </div>

        {/* --- Enquiry Section --- */}
        <div className="flex flex-col justify-between p-8 md:pl-10">
          <div>
            <h3 className="text-[18px] md:text-xl font-semibold leading-snug mb-6 text-[#E3C28D]">
              Get in touch with us for enquiries and collaborations.
            </h3>
            <button className="px-6 py-3 bg-white text-[#07231C] font-semibold text-sm tracking-wide hover:bg-[#E3C28D] hover:text-black transition">
              Make An Enquiry
            </button>
          </div>
          <p className="text-xs md:text-sm text-[#E3C28D]/70 mt-10 border-t border-[#E3C28D]/30 pt-4 text-center md:text-left">
            All rights reserved 2025 | 2PB Brewing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
