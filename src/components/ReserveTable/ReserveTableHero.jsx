import React, { useState } from "react";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerParent = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const ReserveTableHero = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required.";
    else if (!/^[0-9]{10}$/.test(form.mobile.trim()))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";

    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email address.";

    if (!form.enquiry.trim()) newErrors.enquiry = "Enquiry is required.";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the highlighted errors.");
      return;
    }

    setLoading(true); // ⭐ START LOADING

    try {
      const response = await fetch(
        "https://ameera-backend.onrender.com/api/v1/form/contact-us",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setForm({
          name: "",
          mobile: "",
          email: "",
          company: "",
          enquiry: "",
        });
        setErrors({});
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Network error — please try again later.");
    }

    setLoading(false); // ⭐ STOP LOADING
  };

  return (
    <div>
      <Navbar />

      <div className="bg-[#f9eadd] min-h-[90vh] flex flex-col items-center justify-center py-8 px-4">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
        />

        {/* Title Animation */}
        <motion.div
          className="text-center max-w-2xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1f392a] mb-4">
            CONTACT & RESERVATIONS
          </h1>
          <p className="text-[#1f392a] text-base md:text-lg leading-relaxed">
            We’d love to host you. Whether it’s an intimate dinner, a
            celebration, or an evening for two we’ll make it unforgettable.
          </p>
          <p className="text-sm text-[#1f392a] mt-6">
            Fill out the form, and our team will get back to you as soon as
            possible!
          </p>
        </motion.div>

        {/* FORM with staggering */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-10 w-full max-w-lg space-y-5"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <motion.div variants={fadeUp} className="flex-1">
              <input
                type="text"
                name="name"
                placeholder="John Honai"
                value={form.name}
                onChange={handleChange}
                className={`w-full border px-4 py-3 text-[#1f392a] placeholder-[#1f392a]/70 bg-transparent focus:outline-none ${
                  errors.name
                    ? "border-[#b41c0e]"
                    : "border-[#1f392a]/50 focus:border-[#1f392a]"
                }`}
              />
              {errors.name && (
                <p className="text-[#b41c0e] text-xs mt-1">{errors.name}</p>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="flex-1">
              <input
                type="text"
                name="mobile"
                placeholder="Mobile"
                value={form.mobile}
                onChange={handleChange}
                className={`w-full border px-4 py-3 text-[#1f392a] placeholder-[#1f392a]/70 bg-transparent focus:outline-none ${
                  errors.mobile
                    ? "border-[#b41c0e]"
                    : "border-[#1f392a]/50 focus:border-[#1f392a]"
                }`}
              />
              {errors.mobile && (
                <p className="text-[#b41c0e] text-xs mt-1">{errors.mobile}</p>
              )}
            </motion.div>
          </div>

          {/* Email */}
          <motion.div variants={fadeUp}>
            <input
              type="email"
              name="email"
              placeholder="john@domain.com"
              value={form.email}
              onChange={handleChange}
              className={`w-full border px-4 py-3 text-[#1f392a] placeholder-[#1f392a]/70 bg-transparent focus:outline-none ${
                errors.email
                  ? "border-[#b41c0e]"
                  : "border-[#1f392a]/50 focus:border-[#1f392a]"
              }`}
            />
            {errors.email && (
              <p className="text-[#b41c0e] text-xs mt-1">{errors.email}</p>
            )}
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <input
              type="text"
              name="company"
              placeholder="Company/Restaurant/Pub/Individual"
              value={form.company}
              onChange={handleChange}
              className="w-full border border-[#1f392a]/50 bg-transparent px-4 py-3 text-[#1f392a] placeholder-[#1f392a]/70 focus:outline-none focus:border-[#1f392a]"
            />
          </motion.div>

          {/* Enquiry */}
          <motion.div variants={fadeUp}>
            <input
              type="text"
              name="enquiry"
              placeholder="Enquiring for?"
              value={form.enquiry}
              onChange={handleChange}
              className={`w-full border px-4 py-3 text-[#1f392a] placeholder-[#1f392a]/70 bg-transparent focus:outline-none ${
                errors.enquiry
                  ? "border-[#b41c0e]"
                  : "border-[#1f392a]/50 focus:border-[#1f392a]"
              }`}
            />
            {errors.enquiry && (
              <p className="text-[#b41c0e] text-xs mt-1">{errors.enquiry}</p>
            )}
          </motion.div>

          {/* Button */}
          <motion.div variants={fadeUp} className="text-center pt-4">
            <motion.button
              whileHover={!loading ? { scale: 1.05 } : {}}
              whileTap={!loading ? { scale: 0.95 } : {}}
              type="submit"
              disabled={loading}
              className={`bg-[#1f392a] text-white px-10 py-3 font-medium transition-all duration-200 flex items-center justify-center mx-auto
      ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#14261c]"}`}
            >
              {/* Loader or Text */}
              {loading ? (
                <motion.div
                  className="flex gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.span
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.span
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: 0.15,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.span
                    className="w-2 h-2 bg-white rounded-full"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 0.5,
                      repeat: Infinity,
                      delay: 0.3,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              ) : (
                "Submit"
              )}
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
};

export default ReserveTableHero;
