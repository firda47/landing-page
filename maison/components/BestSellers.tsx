
import React from 'react';
import { BEST_SELLERS } from '../constants';
import ProductCard from './ProductCard';
import { Product } from '../types';

interface BestSellersProps {
  onAddToCart: (p: Product) => void;
}

const BestSellers: React.FC<BestSellersProps> = ({ onAddToCart }) => {
  return (
    <section id="products" className="py-24 bg-[#FDF5E6] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-brush mb-4">Snack Terlaris Minggu Ini</h2>
            <p className="text-gray-500 max-w-lg">Varian snack paling banyak dicari dan dinikmati oleh para pelanggan setia SnackBoom! Jangan sampai kehabisan.</p>
          </div>
          <a href="#" className="font-bold text-[#FB923C] flex items-center gap-2 hover:gap-4 transition-all">
          <span>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BEST_SELLERS.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
