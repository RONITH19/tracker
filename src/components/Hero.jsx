import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#161a23]" id="home">
      
      {/* Background Grid Lines Option */}
      <div 
        className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none"
        style={{
           backgroundImage: `linear-gradient(#3a4a5a 1px, transparent 1px), linear-gradient(90deg, #3a4a5a 1px, transparent 1px)`,
           backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-24 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-6 text-left"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-black text-white leading-[1.1] text-offset-shadow tracking-tight">
              Unlock the <br />
              Future of
            </h1>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mt-4">
              Discover the cutting-edge solutions that safeguard your vehicle and give you peace of mind. Our innovative GPS trackers and seamless mobile
            </p>
            
            <div className="pt-4">
              <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-white text-[#161a23] px-8 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-gray-100 transition-colors"
              >
                Learn More
              </motion.button>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5">
               <p className="text-xs text-gray-500 max-w-[200px] leading-relaxed">
                 Protect Your Ride with Our Advanced
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50, rotateX: 10, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] flex justify-center items-center perspective-1000"
          >
            {/* Mockup Isometric Image Graphic */}
            <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
               className="relative w-full h-full flex justify-end items-center"
               style={{ transformStyle: 'preserve-3d', transform: 'rotateZ(15deg) rotateX(10deg) scale(1.1)' }}
            >
              <img 
                src="/hero-mockup.png"
                alt="Mobile Tracking Interface"
                className="w-4/5 md:w-full object-contain rounded-3xl drop-shadow-[0_0_30px_rgba(0,122,255,0.3)] z-10"
              />
              {/* Optional: Add a second overlapping shape to simulate the UI screen pop-out from the user screenshot */}
              <div className="absolute inset-x-0 bottom-1/4 h-32 bg-gradient-to-t from-blue-500/20 to-transparent blur-3xl rounded-full"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
