import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaBars,
  FaTimes,
  FaUser,
  FaCode,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = 64;
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const handleNavigation = (path, sectionId) => {
    if (location.pathname !== path) {
      window.location.href = path;
    } else {
      scrollToSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        scrollToSection(sectionId);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a192f]/95 backdrop-blur-sm shadow-lg"
          : "bg-[#0a192f]"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold text-[#64ffda] hover:text-[#64ffda]/80 transition-all duration-300"
          >
            MP
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-[#64ffda] hover:text-[#64ffda]/80 focus:outline-none transition-all duration-300"
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <button
                onClick={() => handleNavigation("/", "home-section")}
                className={`group flex items-center space-x-2 relative text-sm font-medium transition-all duration-300 ${
                  isActive("/") && !location.hash
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                }`}
              >
                <FaHome
                  className={`text-lg group-hover:scale-110 transition-transform duration-300 ${
                    isActive("/") && !location.hash
                      ? "text-[#64ffda]"
                      : "text-gray-300 group-hover:text-[#64ffda]"
                  }`}
                />
                <span>Home</span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 transition-transform duration-300 ${
                    isActive("/") && !location.hash
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "about-section")}
                className={`group flex items-center space-x-2 relative text-sm font-medium transition-all duration-300 ${
                  location.hash === "#about-section"
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                }`}
              >
                <FaUser className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>About</span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 transition-transform duration-300 ${
                    location.hash === "#about-section"
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "skills-section")}
                className={`group flex items-center space-x-2 relative text-sm font-medium transition-all duration-300 ${
                  location.hash === "#skills-section"
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                }`}
              >
                <FaCode className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>Skills</span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 transition-transform duration-300 ${
                    location.hash === "#skills-section"
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "projects-section")}
                className={`group flex items-center space-x-2 relative text-sm font-medium transition-all duration-300 ${
                  location.hash === "#projects-section"
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                }`}
              >
                <FaBriefcase className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>Portfolio</span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 transition-transform duration-300 ${
                    location.hash === "#projects-section"
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "contact-section")}
                className={`group flex items-center space-x-2 relative text-sm font-medium transition-all duration-300 ${
                  location.hash === "#contact-section"
                    ? "text-[#64ffda]"
                    : "text-gray-300 hover:text-[#64ffda]"
                }`}
              >
                <FaEnvelope className="text-lg group-hover:scale-110 transition-transform duration-300" />
                <span>Contact</span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#64ffda] transform scale-x-0 transition-transform duration-300 ${
                    location.hash === "#contact-section"
                      ? "scale-x-100"
                      : "group-hover:scale-x-100"
                  }`}
                ></span>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-[#112240] rounded-lg mt-4 shadow-lg">
            <button
              onClick={() => handleNavigation("/", "home-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive("/") && !location.hash
                  ? "text-[#64ffda] bg-[#64ffda]/10"
                  : "text-gray-300 hover:text-[#64ffda] hover:bg-[#64ffda]/10"
              }`}
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavigation("/", "about-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.hash === "#about-section"
                  ? "text-[#64ffda] bg-[#64ffda]/10"
                  : "text-gray-300 hover:text-[#64ffda] hover:bg-[#64ffda]/10"
              }`}
            >
              <FaUser className="text-lg" />
              <span>About</span>
            </button>
            <button
              onClick={() => handleNavigation("/", "skills-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.hash === "#skills-section"
                  ? "text-[#64ffda] bg-[#64ffda]/10"
                  : "text-gray-300 hover:text-[#64ffda] hover:bg-[#64ffda]/10"
              }`}
            >
              <FaCode className="text-lg" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => handleNavigation("/", "projects-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.hash === "#projects-section"
                  ? "text-[#64ffda] bg-[#64ffda]/10"
                  : "text-gray-300 hover:text-[#64ffda] hover:bg-[#64ffda]/10"
              }`}
            >
              <FaBriefcase className="text-lg" />
              <span>Portfolio</span>
            </button>
            <button
              onClick={() => handleNavigation("/", "contact-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.hash === "#contact-section"
                  ? "text-[#64ffda] bg-[#64ffda]/10"
                  : "text-gray-300 hover:text-[#64ffda] hover:bg-[#64ffda]/10"
              }`}
            >
              <FaEnvelope className="text-lg" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
