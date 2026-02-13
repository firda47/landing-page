
import React from 'react';
import { CATEGORIES } from '../constants';
import Reveal from './Reveal';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#3E2723] mb-4">Pilih Karakter Kopi Anda</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => (
            <Reveal key={cat.id} delay={index * 150}>
              <div className="group relative h-80 overflow-hidden rounded-2xl cursor-pointer shadow-lg">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-amber-900/90 transition-all duration-500"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white font-serif text-2xl font-bold translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {cat.title}
                  </h3>
                  <div className="w-0 group-hover:w-full h-0.5 bg-amber-400 transition-all duration-500 mt-2"></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
