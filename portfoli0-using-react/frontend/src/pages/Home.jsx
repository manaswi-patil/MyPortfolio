import React, { useRef } from "react";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Contact";
import resumePDF from "./../assets/Resume.pdf";
import profileImg from "./../assets/profileimg.png";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code2,
  Sparkles,
  Star,
} from "lucide-react";

const Home = () => {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const openResumePDF = () => {
    window.open(resumePDF, "_blank");
  };

  return (
    <>
      <div
        id="home-section"
        className="min-h-screen w-full relative overflow-hidden bg-slate-950"
      >
        {/* Subtle gradient background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900/60" />
          <div className="absolute inset-x-0 top-[-200px] h-[400px] bg-gradient-to-b from-sky-500/20 via-sky-400/10 to-transparent blur-3xl" />
          <div className="absolute inset-x-10 bottom-[-160px] h-[320px] bg-gradient-to-t from-slate-800/80 via-slate-900/60 to-transparent blur-3xl" />
        </div>

        {/* Diagonal split between image and text (desktop only) */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          {/* Darker side behind image */}
          <div
            className="absolute inset-y-0 left-0 w-3/5 bg-slate-950/80"
            style={{
              clipPath: "polygon(0 0, 75% 0, 55% 100%, 0% 100%)",
            }}
          />
          {/* Lighter side behind text */}
          <div
            className="absolute inset-y-0 right-0 w-3/5 bg-slate-900/40"
            style={{
              clipPath: "polygon(25% 0, 100% 0, 100% 100%, 45% 100%)",
            }}
          />
          {/* Diagonal partition line */}
          <div
            className="absolute left-1/2 top-[-10%] h-[120%] w-px bg-gradient-to-b from-sky-400/80 via-sky-300/40 to-transparent"
            style={{
              transform: "translateX(-50%) rotate(-10deg)",
              transformOrigin: "center",
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex items-center py-12 sm:py-16 lg:py-20 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left side - Profile Picture, darker side */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-sky-500/30 via-cyan-400/10 to-transparent blur-2xl opacity-70 group-hover:opacity-90 transition duration-500" />
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-slate-800 bg-slate-950/85 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
                  <img
                    src={profileImg}
                    alt="Manaswi M. Patil"
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-300/80">
                        Frontend Developer
                      </p>
                      <p className="text-sm font-medium text-sky-100">
                        React & JavaScript
                      </p>
                    </div>
                    <div className="flex gap-1.5">
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                      <span className="inline-flex h-2.5 w-2.5 rounded-full bg-sky-400/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Clean content for clients, lighter side */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-7 bg-slate-900/60 backdrop-blur-xl p-7 sm:p-8 rounded-3xl border border-slate-600/70 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/15 transition-all duration-300">
                    <Star className="w-4 h-4 mr-2 text-emerald-300" />
                    Open to opportunities & collaborations
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold sm:font-bold text-slate-50 tracking-tight leading-tight">
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300">
                      Manaswi M. Patil
                    </span>
                  </h1>

                  <h2 className="text-lg sm:text-xl md:text-2xl text-slate-200 flex items-center justify-center lg:justify-start gap-2">
                    <Code2 className="w-5 h-5 text-sky-400" />
                    Building clean, modern web experiences for your business
                  </h2>

                  <p className="text-sm sm:text-base text-slate-300/90 max-w-lg mx-auto lg:mx-0">
                    I help businesses turn ideas into simple, responsive web
                    experiences that look professional and are easy for
                    customers to use.
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-slate-900/70 border border-slate-600 text-slate-200">
                      Fast, responsive layouts
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-slate-900/70 border border-slate-600 text-slate-200">
                      Clear, simple UX
                    </span>
                    <span className="px-3 py-1 text-xs sm:text-sm rounded-full bg-slate-900/70 border border-slate-600 text-slate-200">
                      Built with React & JS
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={openResumePDF}
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-slate-950 bg-sky-400 rounded-xl overflow-hidden transition-all duration-300 hover:bg-sky-300 hover:shadow-lg hover:shadow-sky-500/30 hover:scale-105"
                  >
                    <span className="relative flex items-center text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      View Resume
                    </span>
                  </button>
                  <button
                    onClick={scrollToAbout}
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-slate-100 border border-slate-500/70 rounded-xl overflow-hidden transition-all duration-300 hover:bg-slate-900/60 hover:border-sky-400 hover:text-sky-200 hover:scale-105"
                  >
                    <span className="relative flex items-center text-sm">
                      Learn More
                      <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                {/* Social Links with modern design */}
                <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-3 sm:pt-4">
                  {[
                    {
                      icon: Github,
                      href: "https://github.com",
                      label: "GitHub",
                    },
                    {
                      icon: Linkedin,
                      href: "https://linkedin.com",
                      label: "LinkedIn",
                    },
                    {
                      icon: Mail,
                      href: "mailto:your.email@example.com",
                      label: "Email",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-2.5 sm:p-3 rounded-full border border-slate-600/70 text-slate-200 hover:border-sky-400 hover:text-sky-300 hover:bg-slate-900/70 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/20"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about-section" ref={aboutRef}>
        <About />
      </div>

      <div id="skills-section">
        <Skills />
      </div>

      <div id="projects-section">
        <Portfolio />
      </div>

      <div id="contact-section">
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Home;
