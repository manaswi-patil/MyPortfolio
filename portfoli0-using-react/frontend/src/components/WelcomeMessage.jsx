import React, { useState, useEffect } from "react";

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Message will disappear after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 animate-slideDown">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 px-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-bold animate-fadeIn">
            Welcome to My Portfolio
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
