
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import Reveal from './Reveal';

const ProductCard: React.FC<{ product: any, delay: number }> = ({ product, delay }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Reveal delay={delay}>
      <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 p-4">
        <div className="relative overflow-hidden rounded-2xl mb-6">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-90"
          >
            <svg 
              className={`w-5 h-5 transition-colors ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        <div className="px-2 pb-2">
          <h3 className="text-xl font-serif font-bold text-[#3E2723] mb-2">{product.name}</h3>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-amber-700 font-bold text-lg">{product.price}</span>
            
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <section id="featured" className="py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <Reveal>
            <h4 className="text-amber-600 font-semibold tracking-widest uppercase text-sm mb-2">Editor's Choice</h4>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3E2723]">Produk Unggulan Kami</h2>
          </Reveal>
          <Reveal delay={200}>
            <a href="#" className="text-amber-800 font-medium border-b-2 border-amber-200 hover:border-amber-800 transition-all pb-1">
              Lihat Semua Menu
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
