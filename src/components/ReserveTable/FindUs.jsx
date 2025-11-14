import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaFacebookF, FaInstagram,FaTwitter, FaLinkedinIn, FaPhoneAlt, FaClock } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="bg-[#1A322D] text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">
            Find Us
          </h2>
          <p className="text-[#c7d1cc] text-base">
            Reach out for bookings, inquiries, or personalized packages!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Address */}
            <div >
              <div className="flex items-center gap-3 text-lg mb-2">
                <FaMapMarkerAlt className="text-[#c7d1cc]" />
                <h3 className="font-semibold">Address</h3>
              </div>
              <p className="text-[#c7d1cc] leading-relaxed ml-7">
                123 Example Street, Toronto, ON M4B 1B3. <br />
                <a
                  href="#"
                  className="italic underline text-white hover:text-[#dcdcdc]"
                >
                  Click Map
                </a>
              </p>
            </div>
            <hr className="border-[#c7d1cc]/30" />

            {/* Email */}
            <div>
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
            </div>
            <hr className="border-[#c7d1cc]/30" />

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <p className="font-semibold font-serif">Follow Us :</p>
              <div className="flex items-center gap-4 text-[#c7d1cc]">
                <a href="#" className="hover:text-white border-2 p-2 rounded-full">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-white border-2 p-2 rounded-full">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-white border-2 p-2 rounded-full">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-white border-2 p-2 rounded-full">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Operating Hours */}
            <div>
              <div className="flex items-center gap-3 text-lg mb-2">
                <FaClock className="text-[#c7d1cc]" />
                <h3 className="font-semibold">Operating Hours</h3>
              </div>
              <p className="text-[#c7d1cc] ml-7 leading-relaxed">
                Tuesday—Sunday: 12:00 PM — 11:00 PM <br />
                Closed on Mondays
              </p>
            </div>
            <hr className="border-[#c7d1cc]/30" />

            {/* Contact Details */}
            <div>
              <div className="flex items-center gap-3 text-lg mb-2">
                <FaPhoneAlt className="text-[#c7d1cc]" />
                <h3 className="font-semibold">Contact Details</h3>
              </div>
              <p className="text-[#c7d1cc] ml-7">
                <a
                  href="tel:+14165551234"
                  className="underline hover:text-[#dcdcdc]"
                >
                  +1 (416) 555-1234
                </a>
                <br />
                <span className="italic text-sm">(click-to-call)</span>
              </p>
            </div>
            <hr className="border-[#c7d1cc]/30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
