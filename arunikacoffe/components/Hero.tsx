
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
            Experience the Art of <span className="text-amber-400">Premium Coffee</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl mb-10 max-w-xl opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
            Dari biji pilihan hingga cangkir Anda. Nikmati kesempurnaan rasa yang otentik di setiap tetesnya.
          </p>
          <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards]">
            <a 
              href="#featured" 
              className="inline-block px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xl"
            >
              Explore Our Coffee
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Scroll Down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-amber-400 to-transparent"></div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
