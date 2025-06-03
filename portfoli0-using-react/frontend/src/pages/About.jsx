import { useState } from "react";
import { PenTool, Code2, Settings, ChevronDown, Sparkles } from "lucide-react";

export default function AboutMeSection() {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <div className="min-h-screen bg-[#0d2340] py-4 md:py-8">
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Header */}
        <div className="text-center mb-6 md:mb-8 relative w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-2 tracking-tight">
            About Me
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Exploring the intersection of technology and creativity
          </p>
        </div>

        {/* Bio Section */}
        <div className="relative bg-[#112240] p-4 sm:p-6 md:p-8 mb-8 md:mb-12 rounded-xl shadow-lg transform hover:scale-[1.02] transition-transform duration-300 w-full overflow-hidden">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-t-2 border-l-2 border-[#64ffda] rounded-tl-xl"></div>
          <div className="absolute bottom-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 border-b-2 border-r-2 border-[#64ffda] rounded-br-xl"></div>

          {/* Content wrapper */}
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#64ffda] rounded-full flex items-center justify-center">
                <span className="text-lg sm:text-xl font-bold text-[#0d2340]">
                  MP
                </span>
              </div>
            </div>

            <div className="text-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-2">
                Manaswi Patil
              </h3>
              <p className="text-[#64ffda] font-medium">Frontend Developer</p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-[#64ffda] rounded-full"></div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pl-4 sm:pl-6">
                A dedicated tech enthusiast with a BSc IT and MSc IT background
                from University of Mumbai. Experienced in programming, database
                management, and AI, with a passion for innovation. Committed to
                lifelong learning and collaboration in problem-solving. Outside
                of tech, enjoys nature, photography, and writing. Ready to make
                a positive impact in the industry.
              </p>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 mt-4 sm:mt-6 justify-center">
              <span className="px-2 sm:px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-xs sm:text-sm">
                Programming
              </span>
              <span className="px-2 sm:px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-xs sm:text-sm">
                Database
              </span>
              <span className="px-2 sm:px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-xs sm:text-sm">
                AI
              </span>
              <span className="px-2 sm:px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-xs sm:text-sm">
                Innovation
              </span>
            </div>
          </div>
        </div>

        {/* Explore Button */}
        <button
          onClick={toggleServices}
          className="group relative inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12 font-medium tracking-wide text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
        >
          <span className="relative flex items-center">
            Explore Services
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-y-1 transition-transform duration-300" />
          </span>
        </button>

        {/* Services Section */}
        {showServices && (
          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
              {/* Design Card */}
              <div className="bg-[#1a2d4d] p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-[#64ffda]/10 rounded-full">
                    <PenTool className="w-5 h-5 sm:w-6 sm:h-6 text-[#64ffda]" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#64ffda] mb-3 sm:mb-4 text-center">
                  DESIGN
                </h3>
                <p className="text-sm sm:text-base text-gray-300 text-center">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>

              {/* Development Card */}
              <div className="bg-[#1a2d4d] p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 bg-[#64ffda]/10 rounded-full">
                    <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#64ffda]" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#64ffda] mb-3 sm:mb-4 text-center">
                  DEVELOPMENT
                </h3>
                <p className="text-sm sm:text-base text-gray-300 text-center">
                  I can design the site based on your needs and suggestions. I
                  can also design the site from scratch and consult you during
                  the job.
                </p>
              </div>
            </div>

            {/* Maintenance Card */}
            <div className="bg-[#1a2d4d] p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-[#64ffda]/10 rounded-full">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-[#64ffda]" />
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#64ffda] mb-3 sm:mb-4 text-center">
                MAINTENANCE
              </h3>
              <p className="text-sm sm:text-base text-gray-300 text-center">
                I can design the site based on your needs and suggestions. I can
                also design the site from scratch and consult you during the
                job.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
