
import React from 'react';
import { Sparkles } from 'lucide-react';

const PromoBanner: React.FC = () => {
  return (
    <section id="promo" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="relative bg-[#F87171] rounded-[3rem] p-12 overflow-hidden shadow-2xl">
          {/* Brush Textures Simulation */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="bg-white/20 p-4 rounded-3xl mb-8 animate-pulse">
              <Sparkles className="text-white" size={40} />
            </div>
            <h2 className="text-4xl md:text-6xl font-brush text-white mb-6">PROMO AKHIR BULAN!</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl font-semibold italic">
              "Beli 3 Gratis 1 untuk semua varian Cookies Premium. Khusus member SnackBoom! minggu ini."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="bg-white text-[#F87171] px-10 py-5 rounded-2xl font-extrabold text-xl hover:scale-105 transition-transform shadow-xl">
                Klaim Promo Sekarang
              </button>
              <div className="flex items-center justify-center gap-2 text-white font-bold">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
                Tersedia untuk 50 orang pertama hari ini
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
