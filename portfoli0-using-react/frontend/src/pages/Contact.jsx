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
    <div className="min-h-screen bg-[#112240] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Header */}
        <div className="text-center mb-6 md:mb-8 relative">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-2 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Let's discuss your project
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 bg-[#0a192f] text-gray-300 rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 bg-[#0a192f] text-gray-300 rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] transition-all duration-300"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm sm:text-base font-medium text-gray-300 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 bg-[#0a192f] text-gray-300 rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm sm:text-base font-medium text-gray-300 mb-1"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 bg-[#0a192f] text-gray-300 rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] transition-all duration-300"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm sm:text-base font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 bg-[#0a192f] text-gray-300 rounded-lg focus:ring-2 focus:ring-[#64ffda] focus:border-[#64ffda] transition-all duration-300"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-[#64ffda] text-[#0a192f] rounded-lg hover:bg-[#64ffda]/90 focus:outline-none focus:ring-2 focus:ring-[#64ffda] focus:ring-offset-2 focus:ring-offset-[#112240] transition-all duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
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
