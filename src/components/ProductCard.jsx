import React from 'react';
import { motion as Motion } from 'framer-motion';

const ProductCard = ({ product, isPro, onOpenSpecs }) => {
  const currentPrice = Number(isPro ? product.pricePro : product.priceStandard) || 0;

  return (
    <Motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#161a23] rounded-3xl p-6 relative flex flex-col items-center cursor-pointer group shadow-xl transition-all duration-300 overflow-hidden"
      onClick={() => onOpenSpecs(product)}
    >
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      {/* Live Signal Indicator */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <span className="text-xs text-electricBlue font-semibold uppercase tracking-wider">Live</span>
        <div className="w-2.5 h-2.5 bg-electricBlue rounded-full shadow-[0_0_10px_#007AFF] animate-pulse-signal"></div>
      </div>

      <img 
        src={product.image} 
        alt={product.name} 
        className="w-40 h-40 object-cover my-6 transition-transform group-hover:scale-110 duration-500 rounded-2xl relative z-10 shadow-lg" 
      />

      <div className="text-center w-full mt-auto relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed font-sans">{product.description}</p>
        <div className="flex justify-between items-center mt-4 pt-4">
          <span className="text-2xl font-extrabold text-white">
            {currentPrice > 0 ? `₹${currentPrice.toLocaleString('en-IN')}` : 'Price on request'}
          </span>
          <button className="text-sm font-medium text-white px-5 py-2 rounded-full bg-[#0B0F19] group-hover:bg-[#3b82f6] shadow-md transition-all duration-300">
            View Details
          </button>
        </div>
      </div>
    </Motion.div>
  );
};

export default ProductCard;
