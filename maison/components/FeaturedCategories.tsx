
import React from 'react';
import { CATEGORIES } from '../constants';

const FeaturedCategories: React.FC = () => {
  return (
    <section id="categories" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-brush mb-4">Kategori Snack Favorit</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Pilih jenis kudapan favoritmu dari berbagai pilihan kategori kami yang beragam dan lezat.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {CATEGORIES.map((cat) => (
            <div 
              key={cat.id} 
              className="group cursor-pointer text-center"
            >
              <div className={`relative aspect-square rounded-3xl overflow-hidden mb-6 shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:-rotate-2 ${cat.color} p-1`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-black/20 transition-opacity z-10 flex items-center justify-center">
                  <span className="bg-white text-gray-800 px-4 py-2 rounded-full font-bold text-sm"></span>
                </div>
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-brush group-hover:text-[#2DD4BF] transition-colors">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
