import React from "react";

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
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Border Frame */}
      <div className="absolute inset-10 border border-white/60 pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4 text-white">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight">
          BOOK YOUR TABLE
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-8 font-medium">
          RESERVE YOUR TABLE NOW AND LET US SAVE YOU A SPOT. WHETHER IT’S A
          CASUAL HANGOUT OR A SPECIAL CELEBRATION, WE’VE GOT THE PERFECT TABLE
          WAITING FOR YOU.
        </p>
        <button className="px-6 py-3 bg-white text-black font-semibold rounded-none shadow-md hover:bg-gray-200 transition-all">
          Make The Reservation
        </button>
      </div>
    </section>
  );
};

export default Bookyourtable;
