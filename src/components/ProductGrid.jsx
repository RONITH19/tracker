import React, { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Vehicle Tracker V2',
    description: 'Real-time precise location for cars and motorcycles.',
    priceStandard: 129,
    pricePro: 179,
    image: 'https://images.unsplash.com/photo-1605342411874-55e1c02abfbd?auto=format&fit=crop&q=80&w=400&h=400',
    specs: { battery: '6 months', waterproof: 'IP68', range: 'Global (4G LTE)' }
  },
  {
    id: 2,
    name: 'Personal Micro Base',
    description: 'Ultra-compact wearable for personal safety.',
    priceStandard: 89,
    pricePro: 119,
    image: 'https://images.unsplash.com/photo-1594897034375-7195f2425ac2?auto=format&fit=crop&q=80&w=400&h=400',
    specs: { battery: '14 days', waterproof: 'IP67', range: 'Global (4G LTE)' }
  },
  {
    id: 3,
    name: 'Pet Collar Pro',
    description: 'Lightweight safety tracker for dogs and cats.',
    priceStandard: 59,
    pricePro: 89,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400&h=400',
    specs: { battery: '30 days', waterproof: 'IP68', range: 'Local (Bluetooth + 4G hybrid)' }
  },
  {
    id: 4,
    name: 'Fleet Hub Enterprise',
    description: 'Multi-vehicle sync with advanced diagnostics.',
    priceStandard: 249,
    pricePro: 349,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=400&h=400',
    specs: { battery: 'Hardwired', waterproof: 'IPX5', range: 'Global Satellite + 5G' }
  }
];

const ProductGrid = ({ onOpenSpecs }) => {
  const [isPro, setIsPro] = useState(false);

  return (
    <section className="py-24 relative bg-[#13161c]" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 font-bold text-offset-shadow-light">Elite Tracking Arsenal</h2>
            <p className="text-gray-400 max-w-xl font-sans">Choose standard features for everyday security or upgrade to Pro for millisecond pings and satellite fallback.</p>
          </div>

          {/* Comparison Toggle */}
          <div className="mt-8 md:mt-0 flex items-center bg-black/40 p-1.5 rounded-full border border-white/10 shrink-0">
            <button 
              onClick={() => setIsPro(false)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${!isPro ? 'bg-electricBlue text-white shadow-[0_0_15px_#007AFF]' : 'text-gray-400 hover:text-white'}`}
            >
              Standard
            </button>
            <button 
              onClick={() => setIsPro(true)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isPro ? 'bg-electricBlue text-white shadow-[0_0_15px_#007AFF]' : 'text-gray-400 hover:text-white'}`}
            >
              Pro
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} isPro={isPro} onOpenSpecs={onOpenSpecs} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
