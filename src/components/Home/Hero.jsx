import { FaArrowRight } from "react-icons/fa";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Navbar from "../Navbar.jsx";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        opacity: 0,
        y: "6vh",
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.18,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20studio/falverraherobg_bW_iRkDIp_DVvaItENV.jpg"
          alt="Falverra Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div
          className="
            w-[85vw] mx-auto flex flex-col items-center justify-center text-center
            gap-[3vh]
          "
        >
          {/* Heading */}
          <h1
            className="
              hero-anim anton-regular text-white
              leading-[1] md:leading-[.9] tracking-normal md:tracking-[-5px]
              text-[5vh] md:text-8xl
              max-w-[100vw] md:max-w-[72vw]
            "
          >
            Cinematic Brand Films
  <br className="hidden md:block" />
  That Define Businesses
  <br className="hidden md:block" />
  For Decades
          </h1>

          {/* Sub Text */}
          <p
            className="
              hero-anim anton-regular text-white/80 font-medium
              leading-[1.45] md:leading-[1.4]
              text-[1.7vh] md:text-[2.6vh]
              max-w-[80vw] md:max-w-[40vw]
            "
          >
            High-end commercial ads, hero brand films & studio-grade UGC crafted by
            directors, DOPs, models & storytellers.
          </p>

          {/* CTA */}
          <div
            className="
              hero-anim flex flex-col md:flex-row
              gap-[1.8vh] md:gap-[2vh]
              mt-[1vh]
            "
          >
            <button
              className="
                flex items-center justify-center gap-[1vh]
                rounded-full bg-yellow-400 text-black
                font-bold anton-regular
                px-[4vh] py-[1.4vh]
                text-[1.9vh] md:text-[2vh]
                hover:bg-yellow-300 transition
              "
            >
              View Our Work
            </button>

            <button
              className="
                rounded-full border border-white/40 text-white
                font-bold anton-regular
                px-[4vh] py-[1.4vh]
                text-[1.9vh] md:text-[2vh]
                hover:bg-white/10 transition
              "
            >
              Request a Production Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
