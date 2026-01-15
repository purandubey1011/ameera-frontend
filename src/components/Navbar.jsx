import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-30">
      {/* Global alignment system */}
      <div className="w-[85vw] mx-auto py-[2.6vh]">
        <div className="flex items-center justify-between">
          
          {/* Logo (unchanged size) */}
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/b9tt0xvd7/Falverra/falverra%20studio/falverralogo_l3xkZ3DAH.png"
              alt="Falverra Logo"
              className="h-[5.2vh] w-auto object-contain"
            />
            {/* <div className="bg-black/55 ab"></div> */}
          </div>

          {/* Right Side: Nav + Button */}
          <div className="hidden md:flex items-center gap-[4vh]">
            
            {/* Nav Items */}
            <nav className="flex items-center gap-[3.8vh] anton-regular">
              <a className="text-white/95 text-[1.9vh] font-medium hover:text-white transition">
                Work
              </a>

              <a className="flex items-center gap-[0.7vh] text-white/95 text-[1.9vh] font-medium hover:text-white transition">
                Services
                <FaChevronDown className="text-[1.45vh]" />
              </a>

              <a className="text-white/95 text-[1.9vh] font-medium hover:text-white transition">
                Heavy Production
              </a>

              <a className="text-white/95 text-[1.9vh] font-medium hover:text-white transition">
                About
              </a>
            </nav>

            {/* CTA Button (outline only) */}
            <button className="rounded-full border border-yellow-400 text-yellow-400 font-medium px-[3.2vh] py-[1.35vh] text-[1.75vh] hover:bg-yellow-400 hover:text-black transition anton-regular">
              Request Quote
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
