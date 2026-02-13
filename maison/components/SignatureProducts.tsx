
import React from 'react';
import { SIGNATURE_PRODUCTS } from '../constants';
import { ShoppingBag } from 'lucide-react';

const SignatureProducts: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-[#F9F6F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Signature Products</h2>
          <div className="w-20 h-1 bg-[#7D8471] mx-auto mb-6"></div>
          <p className="text-gray-500 max-w-xl mx-auto">Dari oven kami ke tangan Anda. Pilihan produk paling dicintai oleh pelanggan kami.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SIGNATURE_PRODUCTS.map((item) => (
            <div key={item.id} className="group reveal">
              <div className="image-zoom-container relative mb-6 shadow-md group-hover:shadow-2xl transition-all duration-500">
                <img src={item.image} alt={item.name} className="w-full aspect-[4/5] object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full text-[#7D8471]">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-serif">{item.name}</h3>
                <span className="text-lg font-bold text-[#7D8471]">{item.price}</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{item.description}</p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureProducts;
