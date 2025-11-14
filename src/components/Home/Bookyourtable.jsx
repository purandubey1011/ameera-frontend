import React from "react";
import { motion } from "framer-motion";

const Bookyourtable = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=992')",
      }}
    >
      {/* Overlay for dark fade */}
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }} // 👈 scroll trigger
      ></motion.div>

      {/* Border Frame */}
      <motion.div
        className="absolute inset-10 border border-white/60 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.4 }} // 👈 scroll trigger
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4 text-white">
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }} // 👈 scroll triggered
        >
          BOOK YOUR TABLE
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-8 font-medium"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          RESERVE YOUR TABLE NOW AND LET US SAVE YOU A SPOT. WHETHER IT’S A
          CASUAL HANGOUT OR A SPECIAL CELEBRATION, WE’VE GOT THE PERFECT TABLE
          WAITING FOR YOU.
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-white text-black font-semibold rounded-none shadow-md hover:bg-gray-200 transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Make The Reservation
        </motion.button>
      </div>
    </section>
  );
};

export default Bookyourtable;
