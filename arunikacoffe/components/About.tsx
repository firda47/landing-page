
import React from 'react';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            <Reveal>
              <div className="relative group">
                <div className="absolute -inset-4 border-2 border-amber-200 rounded-2xl group-hover:-inset-6 transition-all duration-500"></div>
                <img 
                  src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1961&auto=format&fit=crop" 
                  alt="Barista at work" 
                  className="rounded-xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                />
              </div>
            </Reveal>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 space-y-6">
            <Reveal delay={200}>
              <h4 className="text-amber-600 font-semibold tracking-widest uppercase text-sm">Cerita Kami</h4>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#3E2723] leading-tight">
                Lebih dari sekadar secangkir kopi.
              </h2>
            </Reveal>
            
            <Reveal delay={400}>
              <p className="text-gray-600 leading-relaxed text-lg">
                Di Arunika, kami percaya bahwa setiap biji kopi memiliki cerita unik yang layak untuk diceritakan. Berawal dari kecintaan kami akan kekayaan rempah Nusantara, kami berkelana mencari perkebunan terbaik untuk membawa cita rasa premium langsung ke hadapan Anda.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                Proses roasting kami dilakukan secara presisi untuk memastikan karakter asli dari setiap daerah asal (origin) tetap terjaga, memberikan sensasi rasa yang kompleks dan elegan bagi para penikmat kopi sejati.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="pt-6 flex gap-8">
                <div>
                  <h5 className="text-2xl font-serif font-bold text-amber-700">10+</h5>
                  <p className="text-sm text-gray-500">Origins</p>
                </div>
                <div>
                  <h5 className="text-2xl font-serif font-bold text-amber-700">100k+</h5>
                  <p className="text-sm text-gray-500">Happy Cups</p>
                </div>
                <div>
                  <h5 className="text-2xl font-serif font-bold text-amber-700">4</h5>
                  <p className="text-sm text-gray-500">Awards</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
