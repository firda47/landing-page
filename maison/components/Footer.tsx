
import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#4A3728] text-white pt-24 pb-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="lg:col-span-1">
          <div className="flex flex-col mb-8">
            <span className="text-3xl font-serif font-bold tracking-tight text-white">Maison</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 -mt-1 font-semibold">de Pâtisserie</span>
          </div>
          <p className="text-white/60 leading-relaxed mb-8">
            Menghadirkan tradisi roti artisan dan pastry premium untuk menemani setiap momen berharga Anda.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#7D8471] hover:border-[#7D8471] transition-all"><Instagram size={18} /></a>
            <a href="https://facebook.com" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#7D8471] hover:border-[#7D8471] transition-all"><Facebook size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-10 text-[#7D8471]">Navigation</h4>
          <ul className="flex flex-col gap-4">
            <li><a href="#home" className="text-white/60 hover:text-white transition-colors">Home</a></li>
            <li><a href="#products" className="text-white/60 hover:text-white transition-colors">Our Products</a></li>
            <li><a href="#gallery" className="text-white/60 hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#about" className="text-white/60 hover:text-white transition-colors">About Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-10 text-[#7D8471]">Visit Us</h4>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-4 text-white/60">
              <MapPin className="text-[#7D8471] shrink-0" />
              <span>Jl. Artisan Boulangerie No. 45, Menteng, Jakarta Pusat</span>
            </li>
            <li className="flex gap-4 text-white/60">
              <Phone className="text-[#7D8471] shrink-0" />
              <a href="tel:+62211234567" className="hover:text-white">+62 21-1234-567</a>
            </li>
            <li className="flex gap-4 text-white/60">
              <Mail className="text-[#7D8471] shrink-0" />
              <a href="mailto:hello@maisonpatisserie.id" className="hover:text-white">hello@maisonpatisserie.id</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest mb-10 text-[#7D8471]">Hours</h4>
          <ul className="flex flex-col gap-4 text-white/60">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Mon - Fri</span>
              <span>07:00 - 20:00</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Saturday</span>
              <span>08:00 - 21:00</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>08:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-12 border-t border-white/10 text-center text-white/30 text-xs">
        <p>© 2024 Maison de Pâtisserie Artisan Bakery. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
