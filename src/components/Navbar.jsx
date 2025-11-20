import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === "/";
  const navbarBg = isHome
    ? "bg-transparent absolute"
    : "bg-[#1A322D] relative shadow-md";

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${navbarBg} top-0 left-0 w-full flex justify-between items-center px-8 py-5 z-50 text-white`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2 z-50">
        <Link to="/">
          <img
            src="https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/more%20ameera%20img/Ameeras.png"
            alt="Ameera Logo"
            className="h-18"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-sm uppercase font-semibold">
        <Link to="/" className="hover:text-amber-400 transition-colors">
          Home
        </Link>
        <Link to="/booking" className="hover:text-amber-400 transition-colors">
          Booking
        </Link>
        <Link
          to="/reserve-table"
          className="hover:text-amber-400 transition-colors"
        >
          Contact Us
        </Link>
      </ul>

      {/* Desktop Button */}
      <Link
        to={"/menu"}
        className="hidden md:block border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        View Menu
      </Link>

      {/* Mobile Hamburger Icon */}
      <div
        className="md:hidden text-3xl cursor-pointer z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Mobile Menu With Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full h-full bg-[#1A322D] flex flex-col items-center justify-center space-y-8 text-lg font-semibold uppercase"
          >
            {/* Staggered links */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
              }}
              className="flex flex-col items-center space-y-8"
            >
              {["Home", "Contact Us", "Booking"].map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <Link
                    to={
                      item === "Home"
                        ? "/"
                        : item === "Contact Us"
                        ? "/reserve-table"
                        : "/booking"
                    }
                    className="hover:text-amber-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  to={"/menu"}
                  onClick={() => setMenuOpen(false)}
                  className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
                >
                  View Menu
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
