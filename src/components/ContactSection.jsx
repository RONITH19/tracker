import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#0B0F19] relative text-gray-100 border-t border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 text-center text-offset-shadow-light">Get in Touch</h2>
          <p className="text-gray-400 font-sans text-lg">Need help with your booking? Our team is here to assist you 24/7</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-16 px-4">
           <a 
             href="https://wa.me/919121142326" 
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 py-3 rounded text-base font-semibold transition-colors flex items-center justify-center space-x-2 shadow-md w-full sm:w-auto"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.46-1.761-1.633-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp Chat</span>
           </a>
           
           <a 
             href="tel:+918978934266" 
             className="bg-[#e43a3e] hover:bg-[#d12f33] text-white px-8 py-3 rounded text-base font-semibold transition-colors flex items-center justify-center space-x-2 shadow-md w-full sm:w-auto"
           >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
           </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Phone Support Card */}
          <div className="bg-[#161a23] border border-[#2a303c] text-center p-10 rounded-xl shadow-lg hover:border-[#3b82f6]/50 transition-colors group">
             <div className="bg-[#3b82f6]/10 text-[#3b82f6] w-14 h-14 rounded-xl flex justify-center items-center mx-auto mb-6 group-hover:bg-[#3b82f6]/20 transition-colors">
                <Phone className="w-6 h-6" />
             </div>
             <h3 className="text-white font-bold text-lg mb-2">Phone Support</h3>
             <p className="text-gray-400 mb-1">+91 89789 34266</p>
             <p className="text-gray-500 text-sm">24/7 Customer Support</p>
          </div>

          {/* Service Area Card */}
          <div className="bg-[#161a23] border border-[#2a303c] text-center p-10 rounded-xl shadow-lg hover:border-[#25D366]/50 transition-colors group">
             <div className="bg-[#25D366]/10 text-[#25D366] w-14 h-14 rounded-xl flex justify-center items-center mx-auto mb-6 group-hover:bg-[#25D366]/20 transition-colors">
                <MapPin className="w-6 h-6" />
             </div>
             <h3 className="text-white font-bold text-lg mb-2">Service Area</h3>
             <p className="text-gray-400 mb-1">Hyderabad</p>
             <p className="text-gray-500 text-sm">All Areas Covered</p>
          </div>

          {/* Working Hours Card */}
          <div className="bg-[#161a23] border border-[#2a303c] text-center p-10 rounded-xl shadow-lg hover:border-orange-500/50 transition-colors group">
             <div className="bg-orange-500/10 text-orange-500 w-14 h-14 rounded-xl flex justify-center items-center mx-auto mb-6 group-hover:bg-orange-500/20 transition-colors">
                <Clock className="w-6 h-6" />
             </div>
             <h3 className="text-white font-bold text-lg mb-2">Working Hours</h3>
             <p className="text-gray-400 mb-1">Mon-Sun: 6:00 AM - 11:00 PM</p>
             <p className="text-gray-500 text-sm">Customer Support: 24/7</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
