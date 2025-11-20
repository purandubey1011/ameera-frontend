import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Emily Carter",
    role: "Happy Customer",
    quote:
      "Absolutely wonderful experience. The ambience feels warm and elegant, and the flavours reminded me of the fine dining spots in downtown Toronto. Will definitely visit again!",
    image:
      "https://imgs.search.brave.com/sTYBJiPfyTdUjD6aQi9E2zgXPiYCQHYryy-6DALe9WY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/YW5hZGEtZGF5LWNl/bGVicmF0aW9uLXdp/dGgtbWFwbGUtbGVh/Zi1zeW1ib2xfMjMt/MjE1MTQ0MDQ1MC5q/cGc_c2VtdD1haXNf/aXRlbXNfYm9vc3Rl/ZCZ3PTc0MA",
  },
  {
    name: "Ethan McKenzie",
    role: "Satisfied Guest",
    quote:
      "The service here was incredibly friendly, and the food had a rich, authentic taste. Reminded me of the restaurants in Vancouver’s waterfront district. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    name: "Olivia Martin",
    role: "Regular Visitor",
    quote:
      "Ameera has become my favourite spot in Calgary. Cozy atmosphere, beautiful presentation, and the flavours taste genuinely handcrafted. A perfect place for a weekend dinner.",
    image:
      "https://images.unsplash.com/photo-1664312557922-8fe1a7425425?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#0F2E28] text-white py-24 h-[85vh] md:h-[95vh]">
      {/* Large faded heading */}
      <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-[5vh] md:text-[8.5rem] font-extrabold text-white/6 tracking-widest uppercase pointer-events-none select-none">
        Testimonials
      </h2>

      {/* Decorative lines */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none top-60">
        <div className="w-[72%] h-[56%] relative">
          <div className="absolute left-0 right-0 top-8 border-t border-white/8" />
          <div className="absolute left-0 right-0 bottom-8 border-t border-white/8" />
          <div className="absolute top-0 bottom-0 left-8 border-l border-white/8" />
          <div className="absolute top-0 bottom-0 right-8 border-l border-white/8" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 top-20 md:top-60">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 justify-center">

          <div className="hidden md:block w-8 border-l border-white/6 h-40" />

          {/* ⬇️ Animated Content Wrapper */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-56 h-56 rounded-sm overflow-hidden shadow-lg">
                  <motion.img
                    key={testimonials[active].image}
                    src={testimonials[active].image}
                    alt={testimonials[active].name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="max-w-xl text-left text-[#E8D9B5]">
                <p className="italic text-base md:text-lg leading-relaxed">
                  “{testimonials[active].quote}”
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-white">{testimonials[active].name}</p>
                  <p className="text-xs text-[#C0B68B] mt-1">{testimonials[active].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="hidden md:block w-8 border-l border-white/6 h-40" />
        </div>

        <div className="hidden md:flex items-center justify-between mt-8">
          <div className="w-40 border-t border-white/8" />
          <div className="w-40 border-t border-white/8" />
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                i === active ? "bg-[#E8D9B5] scale-110" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
