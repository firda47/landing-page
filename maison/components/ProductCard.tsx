
import React from 'react';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-400 transition-colors">
          <Heart size={20} />
        </button>
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute bottom-4 left-4">
          <span className="bg-[#2DD4BF] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight h-14 overflow-hidden">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-6 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <div>
            <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider">Harga</span>
            <span className="text-2xl font-brush text-[#FB923C]">
              {/* Corrected: product.price is a string that already includes 'Rp' and formatting */}
              {product.price}
            </span>
          </div>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-[#2DD4BF] hover:bg-[#14B8A6] text-white p-3 rounded-2xl transition-all hover:scale-110 active:scale-90 shadow-lg shadow-teal-100"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;