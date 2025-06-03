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
  FaArrowRight,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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
                      <FaArrowRight className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
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
    <div className="min-h-screen bg-[#1a365d] py-4 md:py-8">
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Header */}
        <div className="text-center mb-6 md:mb-8 relative w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#64ffda] mb-2 tracking-tight">
            My Skills
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 w-full">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="relative bg-[#2a4365] p-4 sm:p-6 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all duration-300 group"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#64ffda] rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#64ffda] rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content wrapper */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#64ffda]/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-[#64ffda]/20 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-sm sm:text-base font-medium text-gray-100 text-center">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 text-center mt-1">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={selectedCategory !== null}
          onClose={() => setSelectedCategory(null)}
          category={selectedCategory}
        />
      </div>
    </div>
  );
};

export default Skills;
