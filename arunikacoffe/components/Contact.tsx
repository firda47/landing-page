
import React from 'react';
import Reveal from './Reveal';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#3E2723] text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Hubungi Kami</h2>
              <p className="text-white/70 text-lg mb-12">
                Punya pertanyaan atau ingin melakukan reservasi? Tim kami siap melayani Anda dengan sepenuh hati.
              </p>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={200} className="flex gap-6">
                <div className="w-12 h-12 bg-amber-600/20 flex items-center justify-center rounded-xl shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Lokasi</h4>
                  <p className="text-white/60">Jl. Senopati No. 45, Kebayoran Baru, Jakarta Selatan</p>
                </div>
              </Reveal>

              <Reveal delay={300} className="flex gap-6">
                <div className="w-12 h-12 bg-amber-600/20 flex items-center justify-center rounded-xl shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Jam Operasional</h4>
                  <p className="text-white/60">Setiap Hari: 08.00 - 22.00 WIB</p>
                </div>
              </Reveal>

              <Reveal delay={400} className="flex gap-6">
                <div className="w-12 h-12 bg-amber-600/20 flex items-center justify-center rounded-xl shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Email</h4>
                  <p className="text-white/60">hello@arunika.coffee</p>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:w-1/2">
            <Reveal delay={500} className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-serif font-bold mb-6">Kirim Pesan</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Nama Lengkap</label>
                    <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Email</label>
                    <input type="email" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Pesan</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors resize-none"></textarea>
                </div>
                <button className="w-full bg-amber-600 hover:bg-amber-500 py-4 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg flex items-center justify-center gap-2">
                  <span>Kirim Pesan</span>
                </button>
                <div className="pt-4">
                  <a 
                    href="https://wa.me/6281234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-3"
                  >
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.888-11.891 3.176 0 6.161 1.237 8.406 3.484 2.246 2.248 3.482 5.234 3.482 8.407 0 6.557-5.332 11.892-11.887 11.892-2.01 0-3.988-.508-5.742-1.472l-6.246 1.689zm5.889-3.344l.362.214c1.553.921 3.328 1.408 5.151 1.408 5.452 0 9.888-4.435 9.888-9.888 0-2.64-1.028-5.122-2.895-6.99s-4.35-2.894-6.993-2.894c-5.451 0-9.887 4.435-9.887 9.887 0 1.933.565 3.816 1.636 5.432l.235.356-.99 3.614 3.703-.929zM17.65 14.8c-.305-.153-1.808-.892-2.088-.994-.279-.101-.482-.153-.685.153-.203.305-.787.994-.965 1.2-.177.203-.355.229-.66.077-.305-.153-1.286-.474-2.449-1.512-.9-.803-1.507-1.795-1.685-2.1-.177-.305-.019-.47.133-.621.137-.136.305-.355.457-.533.153-.178.203-.305.305-.508.101-.203.051-.381-.025-.533-.076-.153-.685-1.65-.939-2.261-.247-.6-.501-.52-.685-.529-.178-.008-.381-.01-.584-.01s-.533.076-.812.381c-.279.305-1.066 1.041-1.066 2.54s1.091 2.946 1.244 3.149c.153.203 2.148 3.28 5.203 4.602.726.315 1.291.504 1.733.644.73.232 1.394.199 1.92.121.585-.087 1.808-.737 2.062-1.448.254-.711.254-1.321.178-1.448-.076-.127-.279-.203-.584-.356z"/></svg>
                    <span>Hubungi Via WhatsApp</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
