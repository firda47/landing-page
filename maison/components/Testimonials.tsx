
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Customer Stories</h2>
          <p className="text-gray-500">Mendengar dari mereka yang telah merasakan kelezatan kami.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-[#F9F6F2] p-10 rounded-[2rem] relative reveal group hover:bg-[#7D8471] hover:text-white transition-all duration-500">
              <Quote className="text-[#7D8471]/10 group-hover:text-white/10 absolute top-8 right-8" size={60} />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="text-[#FB923C]" />
                ))}
              </div>
              <p className="text-lg italic mb-8 relative z-10">"{t.content}"</p>
              <h4 className="font-bold text-sm uppercase tracking-widest">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
