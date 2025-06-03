import React, { useState } from "react";
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaFigma,
  FaDocker,
  FaAws,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showProjects, setShowProjects] = useState(false);
  const [showPublications, setShowPublications] = useState(false);

  const handleViewProjects = () => {
    setShowProjects(true);
    setShowPublications(false);
  };

  const handleViewPublications = () => {
    setShowProjects(false);
    setShowPublications(true);
  };

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend Technologies",
      icon: <FaReact className="text-blue-500 text-3xl" />,
      description: "Modern web development frameworks and libraries",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        {
          name: "React.js",
          icon: <FaReact className="text-blue-500" />,
          level: "Advanced",
        },
        {
          name: "Next.js",
          icon: <FaReact className="text-blue-500" />,
          level: "Advanced",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-500" />,
          level: "Expert",
        },
        {
          name: "HTML5",
          icon: <FaCode className="text-orange-500" />,
          level: "Expert",
        },
        {
          name: "CSS3",
          icon: <FaCode className="text-blue-400" />,
          level: "Expert",
        },
      ],
    },
    {
      id: "backend",
      title: "Backend & Database",
      icon: <FaNodeJs className="text-green-500 text-3xl" />,
      description: "Server-side technologies and database management",
      gradient: "from-green-500 to-emerald-500",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-green-500" />,
          level: "Advanced",
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-gray-800" />,
          level: "Advanced",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-green-600" />,
          level: "Intermediate",
        },
      ],
    },
    {
      id: "version-control",
      title: "Version Control & Dev Tools",
      icon: <FaGitAlt className="text-orange-500 text-3xl" />,
      description: "Development workflow and collaboration tools",
      gradient: "from-orange-500 to-red-500",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt className="text-orange-500" />,
          level: "Advanced",
        },
        {
          name: "GitHub",
          icon: <FaGitAlt className="text-gray-800" />,
          level: "Advanced",
        },
        {
          name: "VS Code",
          icon: <FaCode className="text-blue-500" />,
          level: "Expert",
        },
        {
          name: "Docker",
          icon: <FaDocker className="text-blue-600" />,
          level: "Intermediate",
        },
      ],
    },
    {
      id: "ui-frameworks",
      title: "UI/Styling Frameworks",
      icon: <FaCode className="text-purple-500 text-3xl" />,
      description: "Modern UI frameworks and design tools",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-500" />,
          level: "Advanced",
        },
        {
          name: "Bootstrap",
          icon: <FaCode className="text-purple-500" />,
          level: "Advanced",
        },
        {
          name: "Material-UI",
          icon: <FaCode className="text-blue-500" />,
          level: "Intermediate",
        },
        {
          name: "Figma",
          icon: <FaFigma className="text-pink-500" />,
          level: "Intermediate",
        },
      ],
    },
    {
      id: "deployment",
      title: "Deployment & Hosting",
      icon: <FaAws className="text-orange-500 text-3xl" />,
      description: "Cloud platforms and deployment solutions",
      gradient: "from-yellow-500 to-orange-500",
      skills: [
        {
          name: "Vercel",
          icon: <FaAws className="text-black" />,
          level: "Advanced",
        },
      ],
    },
  ];

  const Modal = ({ isOpen, onClose, category }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 transform transition-all duration-300 scale-100">
          <div
            className={`sticky top-0 z-10 bg-gradient-to-r ${category?.gradient} p-6 flex justify-between items-center rounded-t-2xl`}
          >
            <div className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg shadow-md">
                {category?.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {category?.title}
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  {category?.description}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <FaTimes className="text-2xl" />
            </button>
          </div>
          <div className="p-8 bg-gray-50">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category?.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300 border border-gray-100 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800">
                            {skill.name}
                          </h4>
                          <span className="text-sm text-blue-600">
                            {skill.level}
                          </span>
                        </div>
                      </div>
                      <FaChevronDown className="text-gray-400 group-hover:text-blue-500 group-hover:translate-y-1 transition-transform duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a192f] py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Header */}
        <div className="text-center mb-6 md:mb-8 relative">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-2 tracking-tight">
            My Portfolio
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Check out my latest projects
          </p>
        </div>

        {/* Skills Section */}

        <Modal
          isOpen={selectedCategory !== null}
          onClose={() => setSelectedCategory(null)}
          category={selectedCategory}
        />

        {/* Education Section */}
        <div className="mt-12" id="education">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-6 tracking-tight">
            Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Masters */}
            <div className="bg-[#112240] rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 border border-[#64ffda]/20 hover:border-[#64ffda]/40">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#64ffda]/10 p-3 rounded-lg">
                  <FaCode className="text-[#64ffda] text-2xl" />
                </div>
                <span className="bg-[#64ffda]/10 px-3 py-1 rounded-full text-sm text-[#64ffda]">
                  2021-2023
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#64ffda]">
                Masters of Science
              </h3>
              <p className="text-gray-300 mb-2">Information Technology</p>
              <div className="h-1 w-20 bg-[#64ffda]/30 rounded-full mb-4"></div>
              <p className="text-sm text-gray-400">
                Advanced studies in IT with focus on modern technologies and
                research
              </p>
            </div>

            {/* Bachelors */}
            <div className="bg-[#112240] rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 border border-[#64ffda]/20 hover:border-[#64ffda]/40">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#64ffda]/10 p-3 rounded-lg">
                  <FaCode className="text-[#64ffda] text-2xl" />
                </div>
                <span className="bg-[#64ffda]/10 px-3 py-1 rounded-full text-sm text-[#64ffda]">
                  2018-2021
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#64ffda]">
                Bachelor of Science
              </h3>
              <p className="text-gray-300 mb-2">Information Technology</p>
              <div className="h-1 w-20 bg-[#64ffda]/30 rounded-full mb-4"></div>
              <p className="text-sm text-gray-400">
                Comprehensive study of IT fundamentals and practical
                applications
              </p>
            </div>

            {/* HSC */}
            <div className="bg-[#112240] rounded-xl p-6 text-white transform hover:scale-105 transition-all duration-300 border border-[#64ffda]/20 hover:border-[#64ffda]/40">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-[#64ffda]/10 p-3 rounded-lg">
                  <FaCode className="text-[#64ffda] text-2xl" />
                </div>
                <span className="bg-[#64ffda]/10 px-3 py-1 rounded-full text-sm text-[#64ffda]">
                  2017-2018
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-[#64ffda]">
                Higher Secondary
              </h3>
              <p className="text-gray-300 mb-2">Science Stream</p>
              <div className="h-1 w-20 bg-[#64ffda]/30 rounded-full mb-4"></div>
              <p className="text-sm text-gray-400">
                Foundation in science and mathematics with computer science
              </p>
            </div>
          </div>
        </div>

        {/* View More Section */}
        <div className="mt-12 text-center space-y-4">
          <h3 className="text-lg sm:text-xl font-semibold text-[#64ffda]">
            Want to see more?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleViewProjects}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                showProjects
                  ? "bg-[#64ffda] text-[#0a192f] shadow-lg shadow-[#64ffda]/20"
                  : "bg-[#112240] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]"
              }`}
            >
              View Projects
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  showProjects ? "rotate-180" : "group-hover:translate-y-1"
                }`}
              />
            </button>
            <button
              onClick={handleViewPublications}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 group ${
                showPublications
                  ? "bg-[#64ffda] text-[#0a192f] shadow-lg shadow-[#64ffda]/20"
                  : "bg-[#112240] text-[#64ffda] hover:bg-[#64ffda] hover:text-[#0a192f]"
              }`}
            >
              View Publications
              <FaChevronDown
                className={`ml-2 transition-transform duration-300 ${
                  showPublications ? "rotate-180" : "group-hover:translate-y-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Projects Section */}
        {showProjects && (
          <div className="mt-12" id="projects">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-6 tracking-tight">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* E-commerce Project */}
              <div className="group relative overflow-hidden rounded-2xl bg-[#112240] shadow-lg transition-all duration-300 hover:shadow-xl border border-[#64ffda]/20 hover:border-[#64ffda]/40">
                <div className="absolute inset-0 bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#64ffda]/10 p-3 rounded-xl">
                        <FaReact className="text-[#64ffda] text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#64ffda]">
                          E-commerce Web Application
                        </h3>
                        <p className="text-sm text-gray-400">
                          Full Stack Development
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Developed a fully functional e-commerce platform with
                    product listings, shopping cart, and secure checkout system.
                    Integrated user authentication, product search, and
                    real-time inventory updates.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm text-gray-400">Technologies:</span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Vercel
                    </span>
                  </div>
                </div>
              </div>

              {/* Portfolio Project */}
              <div className="group relative overflow-hidden rounded-2xl bg-[#112240] shadow-lg transition-all duration-300 hover:shadow-xl border border-[#64ffda]/20 hover:border-[#64ffda]/40">
                <div className="absolute inset-0 bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#64ffda]/10 p-3 rounded-xl">
                        <FaCode className="text-[#64ffda] text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#64ffda]">
                          Portfolio Website
                        </h3>
                        <p className="text-sm text-gray-400">
                          Frontend Development
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Designed and developed a personal portfolio website to
                    showcase web development projects, skills, and achievements.
                    Features responsive design with smooth animations and clean
                    layout.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm text-gray-400">Technologies:</span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>

              {/* Hotel Reservation Project */}
              <div className="group relative overflow-hidden rounded-2xl bg-[#112240] shadow-lg transition-all duration-300 hover:shadow-xl border border-[#64ffda]/20 hover:border-[#64ffda]/40">
                <div className="absolute inset-0 bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#64ffda]/10 p-3 rounded-xl">
                        <FaNodeJs className="text-[#64ffda] text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#64ffda]">
                          Hotel Reservation App
                        </h3>
                        <p className="text-sm text-gray-400">
                          Internship Project - Chocolate Stay Pvt. Ltd
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Developed part of a hotel reservation system with user
                    authentication and room availability checking. Features
                    include booking management and will include payment
                    integration in future updates.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm text-gray-400">Technologies:</span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      React.js
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      MongoDB
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Express.js
                    </span>
                  </div>
                </div>
              </div>

              {/* Landing Page Project */}
              <div className="group relative overflow-hidden rounded-2xl bg-[#112240] shadow-lg transition-all duration-300 hover:shadow-xl border border-[#64ffda]/20 hover:border-[#64ffda]/40">
                <div className="absolute inset-0 bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#64ffda]/10 p-3 rounded-xl">
                        <FaCode className="text-[#64ffda] text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#64ffda]">
                          Landing Page with Contact Form
                        </h3>
                        <p className="text-sm text-gray-400">
                          Full Stack Development
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Developed a responsive landing page with integrated Contact
                    Us form functionality. Features clean, modern design and
                    form submission handling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm text-gray-400">Technologies:</span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Next.js
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Tailwind CSS
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Vercel
                    </span>
                  </div>
                </div>
              </div>

              {/* AI Research Project */}
              <div className="group relative overflow-hidden rounded-2xl bg-[#112240] shadow-lg transition-all duration-300 hover:shadow-xl border border-[#64ffda]/20 hover:border-[#64ffda]/40 md:col-span-2">
                <div className="absolute inset-0 bg-[#64ffda]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-[#64ffda]/10 p-3 rounded-xl">
                        <FaCode className="text-[#64ffda] text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#64ffda]">
                          Learning Curve and Performance Monitoring using AI
                        </h3>
                        <p className="text-sm text-gray-400">
                          Research Project - Published in IJCST
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Developed a research project focused on using AI and ML
                    models to track student performance and learning curves in
                    online education. Published in Volume 11, Issue 3 of IJCST
                    (International Journal of Computer Science Trends and
                    Technology).
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm text-gray-400">Technologies:</span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Artificial Intelligence
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Research
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Publications Section */}
        {showPublications && (
          <div className="mt-12 mb-0" id="publications">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-6 tracking-tight">
              Publications
            </h2>
            <div className="bg-[#112240] rounded-2xl shadow-lg overflow-hidden border border-[#64ffda]/20">
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#64ffda] mb-4">
                    Learning Curve and Performance Monitoring of Students in
                    Online Education using Artificial Intelligence
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Artificial Intelligence
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Machine Learning
                    </span>
                    <span className="px-3 py-1 bg-[#64ffda]/10 text-[#64ffda] rounded-full text-sm">
                      Education Technology
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#64ffda] mb-2">
                      Authors
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300">
                      Nishigandha Patil, Manaswi Patil, Shraddha Kadam, R.
                      Srivaramangai
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#64ffda] mb-2">
                      Journal
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300">
                      International Journal of Computer Science Trends and
                      Technology (IJCST)
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      Volume 11, Issue 3, May–June 2023
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#64ffda] mb-2">
                      DOI
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300">
                      10.33144/23478578/IJCST-V11I3P23
                    </p>
                  </div>

                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#64ffda] mb-2">
                      Abstract
                    </h4>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      This paper explores the challenges of online education
                      during the COVID-19 pandemic, such as low attendance and
                      time management issues, and proposes the use of Artificial
                      Intelligence (AI) and Machine Learning (ML) models to
                      monitor student performance and learning curves. The study
                      demonstrates how predictive AI models can provide
                      instructors with insights into student progress, enabling
                      timely interventions to enhance learning outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
