
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A0F0D] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <a href="#home" className="text-3xl font-serif font-bold tracking-widest block mb-6">
              ARUNIKA<span className="text-amber-400">.</span>
            </a>
            <p className="text-white/40 mb-6 max-w-xs">
              Membawa kebahagiaan melalui secangkir kopi premium dari tanah Nusantara untuk dunia.
            </p>
            <div className="flex gap-4">
              {['instagram', 'facebook', 'twitter'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors">
                  <span className="sr-only">{icon}</span>
                  <div className="w-5 h-5 border border-white/20 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">Navigasi</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#categories" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#featured" className="hover:text-white transition-colors">Featured</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">Bantuan</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-amber-400">Berlangganan</h4>
            <p className="text-white/60 mb-4">Dapatkan info promo dan rilis biji kopi terbaru.</p>
            <div className="flex">
              <input type="email" placeholder="Email Anda" className="bg-white/5 border border-white/10 rounded-l-xl px-4 py-2 w-full focus:outline-none" />
              <button className="bg-amber-600 hover:bg-amber-500 rounded-r-xl px-4 py-2 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-sm">
            &copy; 2024 Arunika Coffee Roasters. All rights reserved.
          </p>
          <p className="text-white/20 text-sm">
            Designed with <span className="text-amber-600">❤</span> for Coffee Lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
