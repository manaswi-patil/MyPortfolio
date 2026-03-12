import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const API_URL =
        import.meta.env.VITE_API_URL || "http://localhost:5000/api/contact";
      const res = await axios.post(API_URL, formData);

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form data
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        error.response?.data?.message ||
          "Something went wrong. Please try again later.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#64ffda] mb-2">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 mb-3 tracking-tight">
            Get in touch
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Have a project in mind, a question, or just want to say hi? Fill out
            the form and I’ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Form card */}
          <div className="bg-[#112240] border border-[#233554] rounded-2xl shadow-xl shadow-black/30 p-5 sm:p-7 md:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-100 mb-4">
              Send me a message
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              I usually respond within 24–48 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                      <FaUser className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 sm:pr-4 py-2.5 border border-gray-600/70 bg-[#0b1b30] text-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                      <FaEnvelope className="h-4 w-4" />
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 sm:pr-4 py-2.5 border border-gray-600/70 bg-[#0b1b30] text-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Phone number
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                      <FaPhone className="h-4 w-4" />
                    </span>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 sm:pr-4 py-2.5 border border-gray-600/70 bg-[#0b1b30] text-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-300 mb-1.5"
                  >
                    Address
                  </label>
                  <div className="relative">
                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-500">
                      <FaMapMarkerAlt className="h-4 w-4" />
                    </span>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 sm:pr-4 py-2.5 border border-gray-600/70 bg-[#0b1b30] text-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-1.5"
                >
                  Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-3 sm:px-3.5 py-2.5 border border-gray-600/70 bg-[#0b1b30] text-gray-200 text-sm rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] outline-none transition-all duration-200 resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#64ffda] text-[#0a192f] text-sm sm:text-base font-semibold rounded-lg shadow-md shadow-[#64ffda]/30 hover:bg-[#64ffda]/90 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:ring-offset-2 focus:ring-offset-[#0a192f] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane className="h-4 w-4" />
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact info side panel */}
          <div className="bg-gradient-to-b from-[#112240] to-[#020c1b] border border-[#233554] rounded-2xl p-5 sm:p-7 md:p-8 flex flex-col gap-5">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
              Prefer another way?
            </h3>
            <p className="text-sm text-gray-400">
              You can also reach out directly using the details below. I’m
              always open to discussing new projects, collaborations, or just
              chatting about web development.
            </p>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a192f] text-[#64ffda]">
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Email
                  </p>
                  <p className="font-medium text-gray-200 break-all">
                    yourmail@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a192f] text-[#64ffda]">
                  <FaPhone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Phone
                  </p>
                  <p className="font-medium text-gray-200">
                    +00 0000 000 000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#0a192f] text-[#64ffda]">
                  <FaMapMarkerAlt className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-gray-400">
                    Location
                  </p>
                  <p className="font-medium text-gray-200">
                    Your City, Your Country
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 text-xs text-gray-500">
              I respect your privacy. Your details will only be used to respond
              to your inquiry and will not be shared.
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Contact;
