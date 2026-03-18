import React from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { X, Battery, Droplets, Radio } from 'lucide-react';

const TechSpecsPanel = ({ product, onClose }) => {
  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Slide-over Panel */}
          <Motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[400px] bg-charcoal border-l border-white/10 z-50 shadow-2xl flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <h2 className="text-2xl font-bold text-white tracking-wide">Tech Specs</h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
              {/* Product Info Header */}
              <div className="mb-8 text-center">
                <img src={product.image} alt={product.name} className="w-48 h-48 object-contain mx-auto mb-4 drop-shadow-xl rounded-lg" />
                <h3 className="text-xl font-bold text-electricBlue">{product.name}</h3>
              </div>

              {/* Specs List */}
              <div className="space-y-6">
                <div className="glassmorphism p-4 rounded-xl flex items-center space-x-4">
                  <div className="bg-electricBlue/20 p-3 rounded-lg text-electricBlue shrink-0">
                    <Battery size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">Battery Life</h4>
                    <p className="text-white font-semibold text-lg">{product.specs.battery}</p>
                  </div>
                </div>

                <div className="glassmorphism p-4 rounded-xl flex items-center space-x-4">
                  <div className="bg-electricBlue/20 p-3 rounded-lg text-electricBlue shrink-0">
                    <Droplets size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">Waterproof Rating</h4>
                    <p className="text-white font-semibold text-lg">{product.specs.waterproof}</p>
                  </div>
                </div>

                <div className="glassmorphism p-4 rounded-xl flex items-center space-x-4">
                  <div className="bg-electricBlue/20 p-3 rounded-lg text-electricBlue shrink-0">
                    <Radio size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">Connectivity Range</h4>
                    <p className="text-white font-semibold text-lg">{product.specs.range}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-white/10 bg-black/20">
              <a 
                href={`https://wa.me/919121142326?text=${encodeURIComponent(`Hi, I want to buy the ${product.name}. Please let me know the details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex justify-center items-center bg-[#25D366] text-white py-3 md:py-4 rounded-xl font-bold hover:bg-[#1ebe57] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.4)]"
              >
                Buy via WhatsApp
              </a>
            </div>
          </Motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TechSpecsPanel;
