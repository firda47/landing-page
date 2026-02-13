
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F9F6F2]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800" 
                alt="Baker at Work" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block max-w-xs border border-gray-100">
              <p className="text-sm font-bold text-[#7D8471] uppercase tracking-widest mb-2">Artisan Focus</p>
              <p className="text-gray-600 text-sm leading-relaxed">Setiap roti kami dibuat secara handmade dengan dedikasi penuh terhadap kualitas dan rasa.</p>
            </div>
          </div>

          <div className="reveal">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">Membawa Tradisi Prancis <br /> <span className="italic text-[#7D8471]">ke Meja Anda</span></h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Maison de Pâtisserie didirikan atas dasar kecintaan kami pada seni pembuatan roti tradisional. Kami hanya menggunakan mentega Prancis terbaik, tepung organik, dan ragi alami yang kami rawat setiap harinya.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Kami percaya bahwa kualitas tidak bisa diburu-buru. Itulah mengapa setiap produk kami membutuhkan waktu hingga 48 jam dari awal pengerjaan hingga siap Anda nikmati.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-xl mb-2">Pure Ingredients</h4>
                <p className="text-sm text-gray-500">Hanya bahan mentah kualitas tertinggi tanpa bahan pengawet.</p>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Daily Fresh</h4>
                <p className="text-sm text-gray-500">Dipanggang setiap pagi hari sebelum fajar menyingsing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
