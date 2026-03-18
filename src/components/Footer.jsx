import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] mt-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center space-x-3">
              <img src="/vikram-logo.svg" alt="Vikram GPS Tracker" className="h-8 w-8" />
              <div>
                <p className="text-lg font-bold text-white">Vikram GPS Tracker</p>
                <p className="text-sm text-gray-400">Real-time tracking for vehicles and safety.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a href="#home" className="text-sm text-gray-400 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">
              About
            </a>
            <a href="#products" className="text-sm text-gray-400 hover:text-white transition-colors">
              Products
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-10 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Vikram GPS Tracker. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

