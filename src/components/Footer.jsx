// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Left side */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Logo */}
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
            🎓
          </div>
          {/* Text */}
          <div>
            <h1 className="font-bold text-white text-sm md:text-base">
              NIT KURUKSHETRA
            </h1>
            <p className="text-gray-400 text-xs md:text-sm">
              An Institute of National Importance
            </p>
          </div>
        </div>

        {/* Right side links */}
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0 text-sm md:text-base">
          <a href="#" className="hover:text-white">Admission Policy</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Use</a>
          <a href="#" className="hover:text-white">Contact Support</a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-800 mt-4 py-4 text-xs text-gray-500 text-center md:text-left max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
        <span>© 2024 National Institute of Technology, Kurukshetra. All rights reserved.</span>
        <span className="mt-2 md:mt-0">Designed for Faculty Recruitment Portal</span>
      </div>
    </footer>
  );
}

export default Footer;
