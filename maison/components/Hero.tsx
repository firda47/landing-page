
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center parallax-bg"
      style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1920")' }}
    >
      <div className="text-center text-white px-6">
        <div className="overflow-hidden mb-4">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.5em] animate-fade-in-down">Est. 2016 • Artisan Bakery</p>
        </div>
        <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight animate-fade-in-up">
          Freshly Baked <br /> <span className="italic">Artisan Pastries</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 font-light">
          Kami menghidupkan tradisi roti artisan setiap pagi dengan bahan-bahan premium dan sentuhan tangan profesional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#products" 
            className="bg-[#7D8471] hover:bg-[#6A7160] text-white px-10 py-4 rounded-full font-bold transition-all hover:scale-105"
          >
            Explore Our Menu
          </a>
          <a 
            href="#about" 
            className="bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold transition-all"
          >
            Visit Our Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
