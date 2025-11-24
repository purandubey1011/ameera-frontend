import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "ThisisInderjeet",
    role: "Family Vacation Guest",
    quote:
      "Taste of Delhi in the Heart of Mississauga. I recently visited Ameera’s and it was an amazing experience from start to finish. We ordered the noodles, cauliflower Manchurian, and the mini aloo tikki sliders—and every dish was delicious. The aloo tikki sliders especially stood out: perfectly crispy, flavorful, and honestly one of my favorites of the night. The service was great as well. The food arrived promptly, and the staff was friendly and attentive throughout the evening. The only area for improvement would be the hookah service—no one came around to replenish the coal, so it would be nice to have someone assigned to regularly check on that. That said, the hookah itself was smooth and enjoyable.",
    
      image:
      "https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_1280.jpg",
    className: "scale-100",
  },

  {
    name: "Sadiya 6069",
    role: "Verified Google Reviewer",
    quote:
      "Absolutely stunning spot. Outside it doesn’t look like much until you walk down the stairs and it feels like a secret cave. The decor is stunning and very intimate. Food was decent and the presentation of each dish was beautiful. We enjoyed their banana leaf fish masala and butter chicken. They also have shisha. Overall a very nice new spot in Mississauga!",
    image:
      "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/more%20ameera%20img/shrutireview2.png",
      className: "scale-140",
  },

  {
    name: "Jaspreet Kaur",
    role: "Family Guest",
    quote:
      "I had a wonderful experience at Ameera’s. Loved the drink — great presentation and incredible taste. The food was authentic and full of rich flavors, especially the curries and freshly baked naan. The staff were friendly, attentive, and made the dining experience very pleasant. The atmosphere was warm and welcoming. Highly recommend to anyone craving authentic Indian cuisine. Their Tres Leches dessert is an absolute must-try!",
    image:
      "https://imgs.search.brave.com/D0_fslMeV_Y5KP9-EPuiq5wIx1IwgzVTdqpjqVS3oO0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjA5/OTgyMTM0Mi9waG90/by9ncmF0ZWZ1bC15/b3VuZy1tYW4taW5o/YWxpbmctYW5kLWZl/ZWxpbmctcnVyYWwt/c21lbGwtb24tYmFs/Y29ueS1mYXJtLWlu/bi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VnVQTUtPcGhM/Wk16RXBxdktfZW0z/MVZhYVFNanBnQ25i/dGhZSGt5VGZGVT0",
  },

  {
    name: "David Magar",
    role: "Couple Stay Guest",
    quote:
      "We had an amazing experience thanks to Simran! She was incredibly friendly, knowledgeable, and so informative. We especially loved the fire play she did on the Ruby Sangria cocktail — such a fun touch! We came to celebrate our friend’s birthday and the atmosphere, food, and overall vibe were perfect. Thank you, Simran, for making our night even more special!",
    image:
      "https://cdn.pixabay.com/photo/2021/06/28/18/54/man-6372430_1280.jpg",
  },

  {
    name: "Gavy Dhillon",
    role: "Family Vacation Guest",
    quote:
      "Absolutely love this place! The vibe is super chill, the hookah hits smooth, and the staff (Jashan) are always friendly and attentive. The music sets the perfect mood — not too loud, just right for conversations. Tried a few flavors and every one was top quality. Definitely my go-to hookah spot in town!",
    image:
      "https://ik.imagekit.io/b9tt0xvd7/Falverra/ameera/more%20ameera%20img/lastone.png",
    className: "scale-125",
  },
];




export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#0F2E28] text-white py-24 min-h-screen">


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

      <div className="relative z-10 max-w-4xl mx-auto px-6 top-20 md:top-50">
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
                    className={`w-full h-full object-cover ${testimonials[active].className || ""}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="max-w-xl text-left text-[#E8D9B5]">
                <p className="italic text-base md:text-lg leading-relaxed md:w-[45vw]">
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
        <div className="flex justify-center gap-4 mt-6 md:mt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3  rounded-full transition-all duration-200 ${
                i === active ? "bg-[#E8D9B5] scale-110" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
