import React, { useRef, useState, useEffect } from "react";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "./Contact";
import resumePDF from "./../assets/Resume.pdf";
import profileImg from "./../assets/profileimg.png";
import bgImg1 from "./../assets/bgimg.jpg";
import bgImg2 from "./../assets/bgimg2.jpg";
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
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const backgroundImages = [bgImg1, bgImg2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
        className="min-h-screen w-full relative overflow-hidden"
      >
        {/* Background Image Carousel with Pop Effect */}
        <div className="absolute inset-0">
          {backgroundImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-1000 transform ${
                currentBgIndex === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transformOrigin: "center",
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>

        {/* Overlay for better content visibility */}
        <div className="absolute inset-0 bg-[#0a192f]/80 transition-opacity duration-1000"></div>

        {/* Modern geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGMwIDIuMjA5LTEuNzkxIDQtNCA0cy00LTEuNzkxLTQtNCAxLjc5MS00IDQtNCA0IDEuNzkxIDQgNHoiIGZpbGw9IiMxZDI5NTAiLz48L2c+PC9zdmc+')] opacity-10"></div>
          </div>

          {/* Floating Technology Icons - Responsive positioning */}
          {[
            {
              icon: "⚛️",
              name: "React",
              color: "#64ffda",
              size: "text-2xl sm:text-3xl",
              position: { left: "5%", top: "15%" },
              smPosition: { left: "10%", top: "20%" },
            },
            {
              icon: "▲",
              name: "Next.js",
              color: "#64ffda",
              size: "text-xl sm:text-2xl",
              position: { left: "85%", top: "25%" },
              smPosition: { left: "85%", top: "30%" },
            },
            {
              icon: "JS",
              name: "JavaScript",
              color: "#64ffda",
              size: "text-xl sm:text-2xl",
              position: { left: "15%", top: "75%" },
              smPosition: { left: "20%", top: "80%" },
            },
            {
              icon: "🌐",
              name: "HTML",
              color: "#64ffda",
              size: "text-xl sm:text-2xl",
              position: { left: "75%", top: "65%" },
              smPosition: { left: "80%", top: "70%" },
            },
            {
              icon: "🎨",
              name: "CSS",
              color: "#64ffda",
              size: "text-xl sm:text-2xl",
              position: { left: "25%", top: "35%" },
              smPosition: { left: "30%", top: "40%" },
            },
            {
              icon: "⚛️",
              name: "React",
              color: "#64ffda",
              size: "text-2xl sm:text-3xl",
              position: { left: "65%", top: "85%" },
              smPosition: { left: "70%", top: "85%" },
            },
            {
              icon: "▲",
              name: "Next.js",
              color: "#64ffda",
              size: "text-xl sm:text-2xl",
              position: { left: "45%", top: "10%" },
              smPosition: { left: "40%", top: "15%" },
            },
            {
              icon: "JS",
              name: "JavaScript",
              color: "#64ffda",
              size: "text-xl sm:text-2xl",
              position: { left: "90%", top: "45%" },
              smPosition: { left: "90%", top: "50%" },
            },
          ].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="absolute opacity-20 hover:opacity-40 transition-opacity duration-300 hidden sm:block"
              style={{
                left: tech.smPosition.left,
                top: tech.smPosition.top,
                animation: `float ${
                  20 + Math.random() * 10
                }s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `rotate(${Math.random() * 360}deg)`,
                textShadow: "0 2px 4px rgba(100,255,218,0.1)",
                zIndex: 1,
              }}
            >
              <div className="flex flex-col items-center gap-1">
                <div
                  className={`${tech.size} font-bold`}
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <div
                  className="text-xs sm:text-sm font-medium"
                  style={{ color: tech.color }}
                >
                  {tech.name}
                </div>
              </div>
            </div>
          ))}

          {/* Simplified gradient orbs - Responsive sizing */}
          <div
            className="absolute top-1/4 -left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob"
            style={{ zIndex: 0 }}
          ></div>
          <div
            className="absolute top-1/3 -right-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-blob animation-delay-2000"
            style={{ zIndex: 0 }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-screen flex items-center py-8 sm:py-12 md:py-16 lg:py-20 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left side - Profile Picture with unique modern design */}
            <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
              <div className="relative group perspective-1000">
                {/* Floating elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#64ffda] via-purple-500 to-[#64ffda] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-gradient"></div>

                {/* Main profile container with 3D effect */}
                <div className="relative transform transition-transform duration-700 group-hover:rotate-y-10">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl bg-[#0a192f]/30 backdrop-blur-md">
                    {/* Profile image with parallax effect */}
                    <div className="w-full h-full overflow-hidden relative">
                      <img
                        src={profileImg}
                        alt="Manaswi M. Patil"
                        className="w-full h-full object-cover object-center transform transition-all duration-700 group-hover:scale-110"
                      />
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Floating tech stack badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {[
                        { icon: "⚛️", name: "React", color: "#61DAFB" },
                        { icon: "▲", name: "Next.js", color: "#000000" },
                        { icon: "JS", name: "JavaScript", color: "#F7DF1E" },
                      ].map((tech, index) => (
                        <div
                          key={tech.name}
                          className="px-3 py-1.5 bg-white/10 backdrop-blur-md text-white text-xs rounded-full transform transition-all duration-300 hover:scale-110 hover:bg-white/20 group/tech"
                          style={{
                            animationDelay: `${index * 200}ms`,
                            animation: `float ${
                              3 + index
                            }s infinite ease-in-out`,
                          }}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-sm">{tech.icon}</span>
                            <span className="hidden sm:inline font-medium">
                              {tech.name}
                            </span>
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Animated bottom info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a192f]/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <span className="text-white text-sm font-medium">
                          Frontend Developer
                        </span>
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-[#64ffda] animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse animation-delay-300"></div>
                          <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse animation-delay-600"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#64ffda] rounded-tl-lg opacity-50"></div>
                  <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#64ffda] rounded-br-lg opacity-50"></div>

                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#64ffda] rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 -translate-y-2"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#64ffda] rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 translate-y-2"></div>
                </div>
              </div>
            </div>

            {/* Right side - Content with modern design */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-6 backdrop-blur-md bg-[#0a192f]/30 p-8 rounded-3xl border border-[#64ffda]/10 shadow-xl">
                <div className="inline-block">
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#64ffda]/10 text-[#64ffda] border border-[#64ffda]/20 hover:bg-[#64ffda]/20 transition-all duration-300">
                    <Star className="w-4 h-4 mr-2" />
                    Available for Work
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-purple-500">
                      Manaswi M. Patil
                    </span>
                  </h1>

                  <h2 className="text-xl sm:text-2xl text-gray-300 flex items-center justify-center lg:justify-start gap-2">
                    <Code2 className="w-5 h-5 text-[#64ffda]" />
                    Frontend Developer
                  </h2>

                  <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                    Passionate about creating beautiful and functional web
                    experiences. Specializing in React, JavaScript, and modern
                    web technologies.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button
                    onClick={openResumePDF}
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-[#0a192f] bg-[#64ffda] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#64ffda]/90 hover:shadow-lg hover:shadow-[#64ffda]/20 hover:scale-105"
                  >
                    <span className="relative flex items-center text-sm">
                      <Download className="w-4 h-4 mr-2" />
                      View Resume
                    </span>
                  </button>
                  <button
                    onClick={scrollToAbout}
                    className="group relative inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide text-[#64ffda] border border-[#64ffda] rounded-xl overflow-hidden transition-all duration-300 hover:bg-[#64ffda]/10 hover:scale-105"
                  >
                    <span className="relative flex items-center text-sm">
                      Learn More
                      <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>

                {/* Social Links with modern design */}
                <div className="flex gap-4 justify-center lg:justify-start pt-4">
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
                      className="group relative p-3 rounded-xl border border-[#64ffda]/20 text-[#64ffda] hover:bg-[#64ffda]/10 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#64ffda]/10"
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
