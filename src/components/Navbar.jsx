import React, { useState, useEffect } from 'react';
import { Mountain, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#161a23]/95 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5' : 'bg-[#161a23]/40 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-white" />
            <span className="text-xl font-bold tracking-tight text-white drop-shadow-sm">GlobalGuard Trackers</span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#home" className="text-xs font-mono uppercase tracking-widest text-[#3b82f6]">Home</a>
            <a href="#about" className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer">About</a>
            <a href="#products" className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer">Products</a>
            <a href="#contact" className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a>
            <a href="https://maps.google.com/?q=GlobalGuard+Trackers+Store" target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-widest text-[#25D366] hover:text-white transition-colors cursor-pointer flex items-center space-x-1">
              <span>Find Us</span>
            </a>
            <button className="border border-[#145a32] text-[#8ce99a] bg-[#0c2f1f] px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest hover:bg-[#145a32] hover:text-white transition-colors">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#8ce99a] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-[#161a23]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl origin-top animate-in slide-in-from-top-4 duration-300">
            <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col">
              <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-sm font-mono uppercase tracking-widest text-[#3b82f6] hover:bg-white/5">Home</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-sm font-mono uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5">About</a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-sm font-mono uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5">Products</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-sm font-mono uppercase tracking-widest text-gray-400 hover:text-white hover:bg-white/5">Contact</a>
              <a href="https://maps.google.com/?q=GlobalGuard+Trackers+Store" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-sm font-mono uppercase tracking-widest text-[#25D366] hover:text-white hover:bg-white/5">Find Us</a>
              <button className="w-full mt-4 border border-[#145a32] text-[#8ce99a] bg-[#0c2f1f] px-6 py-3 rounded-lg text-sm font-mono uppercase tracking-widest hover:bg-[#145a32] hover:text-white transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
