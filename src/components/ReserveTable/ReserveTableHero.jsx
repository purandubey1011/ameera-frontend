import React, { useState } from "react";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReserveTableHero = () => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    enquiry: "",
  });

  const [errors, setErrors] = useState({});

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error as user types
  };

  // ✅ Validation Logic
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

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the highlighted errors.");
      return;
    }

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
        setForm({ name: "", mobile: "", email: "", company: "", enquiry: "" });
        setErrors({});
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      toast.error("Network error — please try again later.");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="bg-[#f9eadd] min-h-[90vh] flex flex-col items-center justify-center py-8 px-4">
        {/* Toast Container */}
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar />

        {/* Title */}
        <div className="text-center max-w-2xl">
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
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-10 w-full max-w-lg space-y-5">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
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
            </div>

            <div className="flex-1">
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
            </div>
          </div>

          {/* Email */}
          <div>
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
          </div>

          {/* Company */}
          <input
            type="text"
            name="company"
            placeholder="Company/Restaurant/Pub/Individual"
            value={form.company}
            onChange={handleChange}
            className="w-full border border-[#1f392a]/50 bg-transparent px-4 py-3 text-[#1f392a] placeholder-[#1f392a]/70 focus:outline-none focus:border-[#1f392a]"
          />

          {/* Enquiry */}
          <div>
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
          </div>

          {/* Submit */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-[#1f392a] text-white px-10 py-2 font-medium hover:bg-[#14261c] transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReserveTableHero;
