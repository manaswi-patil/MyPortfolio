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
          ? "bg-slate-950/90 backdrop-blur-xl shadow-lg border-b border-slate-800"
          : "bg-gradient-to-r from-slate-950/80 via-slate-900/80 to-sky-500/30 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-tight text-sky-400 hover:text-sky-300 transition-all duration-300"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/10 border border-sky-500/40 text-sm font-bold">
              MP
            </span>
            <span className="hidden sm:inline text-sm font-medium uppercase tracking-[0.2em] text-slate-200/80">
              Portfolio
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center rounded-full p-2.5 text-slate-100 hover:text-sky-300 hover:bg-slate-900/60 border border-slate-700/70 focus:outline-none transition-all duration-300"
          >
            {isMenuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <li>
              <button
                onClick={() => handleNavigation("/", "home-section")}
                className={`group flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive("/") && !location.hash
                    ? "text-sky-300 bg-slate-900/80 shadow-md shadow-sky-500/20"
                    : "text-slate-200 hover:text-sky-300 hover:bg-slate-900/70"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border text-base transition-all duration-300 ${
                    isActive("/") && !location.hash
                      ? "bg-sky-500/20 border-sky-400 text-sky-300"
                      : "bg-slate-950/60 border-slate-700 text-slate-300 group-hover:bg-sky-500/10 group-hover:border-sky-400 group-hover:text-sky-300"
                  }`}
                >
                  <FaHome />
                </div>
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "about-section")}
                className={`group flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.hash === "#about-section"
                    ? "text-violet-200 bg-slate-900/80 shadow-md shadow-violet-500/20"
                    : "text-slate-200 hover:text-violet-200 hover:bg-slate-900/70"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border text-base transition-all duration-300 ${
                    location.hash === "#about-section"
                      ? "bg-violet-500/20 border-violet-400 text-violet-200"
                      : "bg-slate-950/60 border-slate-700 text-slate-300 group-hover:bg-violet-500/10 group-hover:border-violet-400 group-hover:text-violet-200"
                  }`}
                >
                  <FaUser />
                </div>
                <span>About</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "skills-section")}
                className={`group flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.hash === "#skills-section"
                    ? "text-emerald-200 bg-slate-900/80 shadow-md shadow-emerald-500/20"
                    : "text-slate-200 hover:text-emerald-200 hover:bg-slate-900/70"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border text-base transition-all duration-300 ${
                    location.hash === "#skills-section"
                      ? "bg-emerald-500/20 border-emerald-400 text-emerald-200"
                      : "bg-slate-950/60 border-slate-700 text-slate-300 group-hover:bg-emerald-500/10 group-hover:border-emerald-400 group-hover:text-emerald-200"
                  }`}
                >
                  <FaCode />
                </div>
                <span>Skills</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "projects-section")}
                className={`group flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.hash === "#projects-section"
                    ? "text-amber-200 bg-slate-900/80 shadow-md shadow-amber-500/20"
                    : "text-slate-200 hover:text-amber-200 hover:bg-slate-900/70"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border text-base transition-all duration-300 ${
                    location.hash === "#projects-section"
                      ? "bg-amber-500/20 border-amber-400 text-amber-200"
                      : "bg-slate-950/60 border-slate-700 text-slate-300 group-hover:bg-amber-500/10 group-hover:border-amber-400 group-hover:text-amber-200"
                  }`}
                >
                  <FaBriefcase />
                </div>
                <span>Portfolio</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("/", "contact-section")}
                className={`group flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  location.hash === "#contact-section"
                    ? "text-rose-200 bg-slate-900/80 shadow-md shadow-rose-500/20"
                    : "text-slate-200 hover:text-rose-200 hover:bg-slate-900/70"
                }`}
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full border text-base transition-all duration-300 ${
                    location.hash === "#contact-section"
                      ? "bg-rose-500/20 border-rose-400 text-rose-200"
                      : "bg-slate-950/60 border-slate-700 text-slate-300 group-hover:bg-rose-500/10 group-hover:border-rose-400 group-hover:text-rose-200"
                  }`}
                >
                  <FaEnvelope />
                </div>
                <span>Contact</span>
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
          <div className="px-3 pt-3 pb-4 space-y-1 bg-slate-950/95 border border-slate-800 rounded-2xl mt-3 shadow-2xl shadow-slate-950/70 backdrop-blur-xl">
            <button
              onClick={() => handleNavigation("/", "home-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                isActive("/") && !location.hash
                  ? "text-sky-300 bg-slate-900/80"
                  : "text-slate-200 hover:text-sky-300 hover:bg-slate-900/70"
              }`}
            >
              <FaHome className="text-lg" />
              <span>Home</span>
            </button>
            <button
              onClick={() => handleNavigation("/", "about-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.hash === "#about-section"
                  ? "text-violet-200 bg-slate-900/80"
                  : "text-slate-200 hover:text-violet-200 hover:bg-slate-900/70"
              }`}
            >
              <FaUser className="text-lg" />
              <span>About</span>
            </button>
            <button
              onClick={() => handleNavigation("/", "skills-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.hash === "#skills-section"
                  ? "text-emerald-200 bg-slate-900/80"
                  : "text-slate-200 hover:text-emerald-200 hover:bg-slate-900/70"
              }`}
            >
              <FaCode className="text-lg" />
              <span>Skills</span>
            </button>
            <button
              onClick={() => handleNavigation("/", "projects-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.hash === "#projects-section"
                  ? "text-amber-200 bg-slate-900/80"
                  : "text-slate-200 hover:text-amber-200 hover:bg-slate-900/70"
              }`}
            >
              <FaBriefcase className="text-lg" />
              <span>Portfolio</span>
            </button>
            <button
              onClick={() => handleNavigation("/", "contact-section")}
              className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                location.hash === "#contact-section"
                  ? "text-rose-200 bg-slate-900/80"
                  : "text-slate-200 hover:text-rose-200 hover:bg-slate-900/70"
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
