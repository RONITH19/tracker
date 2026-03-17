import React from 'react';
import { Shield, MapPin, Zap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#08121a] relative border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono tracking-widest text-[#8ce99a] uppercase mb-4">Our Heritage</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-semibold mb-6">Securing the World's Assets</h3>
          <p className="text-gray-400 max-w-2xl mx-auto font-sans leading-relaxed">
            At GlobalGuard Trackers, we believe that peace of mind is not a luxury, but a fundamental right. 
            Built on a foundation of military-grade encryption and satellite technology, our devices are trusted 
            by enterprise fleets, law enforcement, and discerning families worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-[#0a151f] p-8 rounded-2xl border border-white/5 hover:border-[#8ce99a]/30 transition-colors">
            <Shield className="w-10 h-10 text-[#8ce99a] mb-6" />
            <h4 className="text-xl font-serif text-white mb-3">Military-Grade Security</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">Every piece of data is encrypted with AES-256 protocols, ensuring your asset's location remains strictly in your hands.</p>
          </div>
          
          <div className="bg-[#0a151f] p-8 rounded-2xl border border-white/5 hover:border-[#8ce99a]/30 transition-colors">
            <MapPin className="w-10 h-10 text-[#8ce99a] mb-6" />
            <h4 className="text-xl font-serif text-white mb-3">Pinpoint Accuracy</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">Utilizing an overlapping network of GPS, GLONASS, and Galileo satellites, we guarantee tracking precision down to 3 meters globally.</p>
          </div>

          <div className="bg-[#0a151f] p-8 rounded-2xl border border-white/5 hover:border-[#8ce99a]/30 transition-colors">
            <Zap className="w-10 h-10 text-[#8ce99a] mb-6" />
            <h4 className="text-xl font-serif text-white mb-3">Zero-Latency Pings</h4>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">Experience fluid, real-time map tracking with sub-second update intervals over 5G and global LTE networks.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
