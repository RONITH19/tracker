import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { fetchProductsFromGoogleSheetCsv } from '../lib/productsFromGoogleSheetCsv';
import { getProductsCsvUrl, getProductsRefreshMs } from '../config/productsSheet';

const LOCAL_CATALOG = '/products-catalog.csv';

const ProductGrid = ({ onOpenSpecs }) => {
  const [isPro, setIsPro] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const csvUrl = getProductsCsvUrl();
    let cancelled = false;

    const loadLocalCatalog = () =>
      fetchProductsFromGoogleSheetCsv(`${LOCAL_CATALOG}?_=${Date.now()}`);

    const applyFetched = (fetched) => {
      if (cancelled) return;
      if (Array.isArray(fetched) && fetched.length > 0) setProducts(fetched);
    };

    const load = async () => {
      const bust = csvUrl.includes('?') ? `&_=${Date.now()}` : `?_=${Date.now()}`;
      const urlWithBust = `${csvUrl}${bust}`;

      try {
        const sheet = await fetchProductsFromGoogleSheetCsv(urlWithBust);
        if (sheet?.length) {
          applyFetched(sheet);
          return;
        }
      } catch {
        /* fall through to local catalog */
      }
      try {
        const local = await loadLocalCatalog();
        applyFetched(local);
      } catch (err) {
        console.warn('Failed to load products CSV:', err);
      }
    };

    load();
    const intervalMs = getProductsRefreshMs();
    const id = window.setInterval(load, intervalMs);

    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  return (
    <section className="py-24 relative bg-[#13161c]" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 font-bold text-offset-shadow-light">Vikram GPS Tracker Products</h2>
            <p className="text-gray-400 max-w-xl font-sans">Standard for everyday tracking. Pro for faster pings and advanced connectivity.</p>
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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isPro={isPro}
              onOpenSpecs={onOpenSpecs}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
