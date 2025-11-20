import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiMapPin } from "react-icons/fi";
import { FaInstagram, FaYoutube, FaLinkedin, FaFacebook } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="bg-[#001510] text-[#E3C28D] py-8">
      <motion.div
        variants={staggerParent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 border border-[#E3C28D]/30 divide-y md:divide-y-0 md:divide-x divide-[#E3C28D]/30"
      >
        {/* --- Logo + Socials --- */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center justify-between px-10 py-8"
        >
          <motion.img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/more%20ameera%20img/Ameeras.png"
            alt="Ameera Logo"
            className="w-48 md:w-56 mb-8"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <div className="flex justify-center gap-6 text-2xl border-t border-[#E3C28D]/30 w-full pt-4">
            {[FaInstagram, FaYoutube, FaLinkedin, FaFacebook].map(
              (Icon, idx) => (
                <motion.div
                  whileHover={{ scale: 1.25 }}
                  whileTap={{ scale: 0.95 }}
                  key={idx}
                >
                  <Icon className="cursor-pointer" />
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* --- Quick Links --- */}
        <motion.div variants={fadeUp} className="flex flex-col p-8 md:pl-10">
          <h3 className="font-semibold text-lg mb-4 tracking-wide">
            Quick Links
          </h3>
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
              <motion.li key={i} variants={fadeUp} className="list-none">
                <a
                  href="#"
                  className="text-[#E3C28D]/85 hover:text-[#E3C28D] text-[15px] transition-colors"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* --- Brewery + Contact --- */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-between py-8 px-8"
        >
          <div className="border-b border-[#E3C28D]/30 pb-5 mb-5">
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-2">
              <FiMapPin className="text-[#E3C28D]" /> Brewery
            </h3>
            <p className="text-[#E3C28D]/80 text-sm leading-relaxed">
              959 Derry Rd E Unit 3, Mississauga, ON L5T 2J8, Canada
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-semibold text-lg mb-2">
              <FiMail className="text-[#E3C28D]" /> Contact
            </h3>

            {/* Click to Mail */}
            <p className="text-[#E3C28D]/90 text-sm">
              <a
                href="mailto:reservations@ameeras.ca"
                className="underline hover:text-[#f3dcb0]"
              >
                reservations@ameeras.ca
              </a>
            </p>

            {/* Click to Call */}
            <p className="text-[#E3C28D]/90 text-sm mt-1">
              <a
                href="tel:+19427888881"
                className="underline hover:text-[#f3dcb0]"
              >
                +1 942-788-8881
              </a>
            </p>
          </div>
        </motion.div>

        {/* --- Enquiry --- */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-between p-8 md:pl-10"
        >
          <div>
            <h3 className="text-[18px] md:text-xl font-semibold leading-snug mb-6 text-[#E3C28D]">
              Get in touch with us for enquiries and collaborations.
            </h3>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-[#07231C] font-semibold text-sm tracking-wide hover:bg-[#E3C28D] hover:text-black transition"
            >
             <a href="/reserve-table">Make An Enquiry</a> 
            </motion.button>
          </div>

          <p className="text-xs md:text-sm text-[#E3C28D]/70 mt-10 border-t border-[#E3C28D]/30 pt-4 text-center md:text-left">
            All rights reserved 2025 | 2PB Brewing
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
