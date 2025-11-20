import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const softFadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const FindUs = () => {
  return (
    <motion.div
      className="bg-[#1A322D] text-white py-16 px-6 md:px-20"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={softFadeUp}
          className="text-center md:text-left mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            Find Us
          </h2>
          <p className="text-[#c7d1cc] text-base">
            Reach out for bookings, inquiries, or personalized packages!
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          {/* Left */}
          <motion.div variants={container} className="space-y-6">
            <motion.div variants={softFadeUp}>
              <div className="flex items-center gap-3 text-lg mb-2">
                <FaMapMarkerAlt className="text-[#c7d1cc]" />
                <h3 className="font-semibold">Address</h3>
              </div>
              <p className="text-[#c7d1cc] leading-relaxed ml-7">
                959 Derry Rd E Unit 3, Mississauga, ON L5T 2J8, Canada <br />
                <a
                  href="https://maps.app.goo.gl/rb7voARwe6cfWQi5A"
                  target="_blank"
                  className="italic underline text-white hover:text-[#dcdcdc]"
                >
                  Click Map
                </a>
              </p>
            </motion.div>

            <hr className="border-[#c7d1cc]/30" />

            <motion.div variants={softFadeUp}>
              <div className="flex items-center gap-3 text-lg mb-2">
                <FaEnvelope className="text-[#c7d1cc]" />
                <h3 className="font-semibold">Email Us</h3>
              </div>
              <p className="ml-7 text-[#c7d1cc]">
                <a
                  href="mailto:reservations@ameeras.ca"
                  className="underline hover:text-[#dcdcdc]"
                >
                  reservations@ameeras.ca
                </a>
                <br />
                <span className="italic text-sm">(click-to-mail)</span>
              </p>
            </motion.div>

            <hr className="border-[#c7d1cc]/30" />

            <motion.div
              variants={softFadeUp}
              className="flex items-center gap-4"
            >
              <p className="font-semibold font-serif">Follow Us :</p>
              <div className="flex items-center gap-4 text-[#c7d1cc]">
                <a
                  href="#"
                  className="hover:text-white border-2 p-2 rounded-full"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="hover:text-white border-2 p-2 rounded-full"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:text-white border-2 p-2 rounded-full"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:text-white border-2 p-2 rounded-full"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div variants={container} className="space-y-8">
            <motion.div variants={softFadeUp}>
              <div className="flex items-center gap-3 text-lg mb-2">
                <FaClock className="text-[#c7d1cc]" />
                <h3 className="font-semibold">Operating Hours</h3>
              </div>
              <p className="text-[#c7d1cc] ml-7 leading-relaxed">
                Wednesday—Tuesday: 5:00 PM - 2:00 AM <br />
              </p>
            </motion.div>

            <hr className="border-[#c7d1cc]/30" />

            <motion.div variants={softFadeUp}>
              <div className="flex items-center gap-3 text-lg mb-2">
                <FaPhoneAlt className="text-[#c7d1cc]" />
                <h3 className="font-semibold">Contact Details</h3>
              </div>
              <p className="text-[#c7d1cc] ml-7">
                <a
                  href="tel:+19427888881"
                  className="underline hover:text-[#dcdcdc]"
                >
                  +1 942-788-8881
                </a>
                <br />
                <span className="italic text-sm">(click-to-call)</span>
              </p>
            </motion.div>

            <hr className="border-[#c7d1cc]/30" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FindUs;
