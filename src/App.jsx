import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AboutSection from './components/AboutSection';
import LiveMapSimulator from './components/LiveMapSimulator';
import TechSpecsPanel from './components/TechSpecsPanel';
import ContactSection from './components/ContactSection';
import TransformSection from './components/TransformSection';
import RedefineSection from './components/RedefineSection';
import Footer from './components/Footer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCloseSpecs = () => setSelectedProduct(null);
  const handleOpenSpecs = (product) => setSelectedProduct(product);

  return (
    <div className="min-h-screen bg-charcoal">
      <Navbar />
      <main>
        <Hero />
        <TransformSection />
        <RedefineSection />
        <AboutSection />
        <ProductGrid onOpenSpecs={handleOpenSpecs} />
        <LiveMapSimulator />
        <ContactSection />
      </main>
      <TechSpecsPanel product={selectedProduct} onClose={handleCloseSpecs} />
      <Footer />
    </div>
  );
}

export default App;
