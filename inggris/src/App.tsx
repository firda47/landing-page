/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Clock, 
  Award, 
  MessageSquare, 
  PhoneCall,
  ChevronRight,
  Star
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Program', href: '#programs' },
    { name: 'Keunggulan', href: '#why-us' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-primary/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-white font-serif text-2xl font-bold tracking-tighter">
          LINGUIST<span className="text-accent">PRO</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-white/80 hover:text-accent transition-colors font-medium text-sm uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/6281234567890?text=Halo%20LinguistPro,%20saya%20ingin%20tanya%20tentang%20kursus%20Bahasa%20Inggris." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent hover:bg-white text-primary px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105"
          >
            Daftar Sekarang
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary border-t border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/6281234567890" 
                className="bg-accent text-primary p-4 rounded-xl font-bold text-center"
              >
                Daftar Sekarang
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-primary flex items-center overflow-hidden">
      {/* Background Large Typography */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="text-[20vw] font-black text-outline uppercase leading-none opacity-20 whitespace-nowrap">
          ENGLISH COURSE
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
            Premium Learning Experience
          </span>
          <h2 className="text-white text-6xl md:text-8xl font-serif font-bold leading-[1.1] mb-6">
            Master English <br />
            <span className="italic text-accent">With Confidence.</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Tingkatkan kemampuan bahasa Inggris Anda dengan metode interaktif dan pengajar profesional. Siap menghadapi tantangan global.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="#programs" 
              className="bg-white text-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent hover:text-white transition-all duration-300 group"
            >
              Lihat Program <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/6281234567890" 
              className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300"
            >
              Konsultasi Gratis
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden md:block relative"
        >
          <div className="aspect-[4/5] bg-secondary rounded-3xl overflow-hidden relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000" 
              alt="Student Learning" 
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="flex items-center gap-4 mb-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-primary bg-accent"></div>
                  ))}
                </div>
                <span className="text-white text-sm font-medium">500+ Siswa Aktif</span>
              </div>
              <p className="text-white/80 text-xs uppercase tracking-widest font-bold">Terpercaya Sejak 2015</p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent rounded-full blur-3xl opacity-50"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
              Lebih Dari Sekadar <br />
              <span className="text-secondary">Tempat Kursus.</span>
            </h2>
            <p className="text-primary/70 text-lg mb-8 leading-relaxed">
              LinguistPro hadir untuk mendefinisikan ulang cara Anda belajar bahasa Inggris. Kami percaya bahwa bahasa bukan hanya soal tata bahasa, tapi soal koneksi dan ekspresi diri. Dengan kurikulum yang disesuaikan dengan kebutuhan industri modern, kami membantu Anda mencapai potensi maksimal.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-soft rounded-2xl border border-primary/5">
                <Clock className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2">Sejak 2015</h4>
                <p className="text-sm text-primary/60">Berpengalaman lebih dari 8 tahun mencetak lulusan kompeten.</p>
              </div>
              <div className="p-6 bg-soft rounded-2xl border border-primary/5">
                <Users className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2">Small Class</h4>
                <p className="text-sm text-primary/60">Maksimal 8 siswa per kelas untuk fokus belajar yang optimal.</p>
              </div>
              <div className="p-6 bg-soft rounded-2xl border border-primary/5">
                <Award className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2">Hybrid Learning</h4>
                <p className="text-sm text-primary/60">Fleksibilitas belajar tatap muka maupun online dari mana saja.</p>
              </div>
              <div className="p-6 bg-soft rounded-2xl border border-primary/5">
                <CheckCircle2 className="text-secondary mb-4" size={32} />
                <h4 className="font-bold text-xl mb-2">Native Tutors</h4>
                <p className="text-sm text-primary/60">Bimbingan langsung dari pengajar penutur asli dan lokal bersertifikasi.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                alt="Classroom" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary p-10 rounded-3xl shadow-xl hidden lg:block">
              <div className="text-white text-5xl font-serif font-bold mb-1">98%</div>
              <div className="text-accent text-sm font-bold uppercase tracking-widest">Kepuasan Siswa</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Programs = () => {
  const programs = [
    {
      title: "Kids Class",
      age: "Usia 6-12 Tahun",
      desc: "Belajar bahasa Inggris dengan cara yang menyenangkan melalui permainan, lagu, dan aktivitas kreatif.",
      features: ["Phonics & Vocabulary", "Interactive Games", "Creative Projects"],
      color: "bg-white"
    },
    {
      title: "Teen Class",
      age: "Usia 13-18 Tahun",
      desc: "Mempersiapkan remaja untuk komunikasi akademik dan sosial dengan kurikulum yang relevan.",
      features: ["Academic Writing", "Public Speaking", "Exam Preparation"],
      color: "bg-secondary text-white"
    },
    {
      title: "Adult Class",
      age: "Usia 19+ Tahun",
      desc: "Fokus pada komunikasi profesional, karir, dan persiapan tes internasional seperti IELTS/TOEFL.",
      features: ["Business English", "IELTS/TOEFL Prep", "Daily Conversation"],
      color: "bg-white"
    }
  ];

  return (
    <section id="programs" className="py-24 bg-soft">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Our Programs</span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-primary">Pilih Program Terbaikmu</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(30, 58, 138, 0.1)" }}
              className={`p-10 rounded-3xl border border-primary/5 transition-all duration-300 ${program.color} group`}
            >
              <h3 className="text-3xl font-serif font-bold mb-2">{program.title}</h3>
              <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold mb-6 ${program.color.includes('secondary') ? 'bg-white/20 text-white' : 'bg-secondary/10 text-secondary'}`}>
                {program.age}
              </span>
              <p className={`mb-8 ${program.color.includes('secondary') ? 'text-white/70' : 'text-primary/60'}`}>
                {program.desc}
              </p>
              <ul className="space-y-4 mb-10">
                {program.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <CheckCircle2 size={18} className={program.color.includes('secondary') ? 'text-accent' : 'text-secondary'} />
                    {f}
                  </li>
                ))}
              </ul>
              <a 
              href="https://wa.me/6281234567890?text=Halo%20LinguistPro,%20saya%20ingin%20tanya%20tentang%20kursus%20Bahasa%20Inggris." 

                className={`w-full py-4 rounded-xl font-bold text-center block transition-all duration-300 ${program.color.includes('secondary') ? 'bg-accent text-primary hover:bg-white' : 'bg-primary text-white hover:bg-secondary'}`}
              >
                Daftar Kelas
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const reasons = [
    {
      icon: <Users className="text-accent" size={40} />,
      title: "Professional Tutors",
      desc: "Pengajar berpengalaman dengan sertifikasi internasional (CELTA/TESOL)."
    },
    {
      icon: <MessageSquare className="text-accent" size={40} />,
      title: "Interactive Method",
      desc: "Metode belajar yang mengutamakan partisipasi aktif siswa, bukan sekadar teori."
    },
    {
      icon: <Clock className="text-accent" size={40} />,
      title: "Flexible Schedule",
      desc: "Pilihan waktu belajar yang fleksibel, cocok untuk pelajar maupun pekerja."
    },
    {
      icon: <Award className="text-accent" size={40} />,
      title: "Speaking Focus",
      desc: "Fokus utama pada kemampuan berbicara agar Anda lebih percaya diri."
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/20 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Why Choose Us</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              Investasi Terbaik <br />
              Untuk <span className="italic text-accent">Masa Depanmu.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-lg">
              Kami tidak hanya mengajarkan bahasa, kami membangun kepercayaan diri Anda untuk melangkah lebih jauh di kancah internasional.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-primary bg-secondary flex items-center justify-center overflow-hidden">
                    <img src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Avatar" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-accent mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-sm font-bold">4.9/5 Rating dari Alumni</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 transition-colors duration-300"
              >
                <div className="mb-6">{reason.icon}</div>
                <h4 className="text-xl font-bold mb-3">{reason.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Andini Putri",
      role: "Mahasiswa",
      text: "Belajar di LinguistPro sangat seru! Tutornya asik dan materinya gampang dimengerti. Sekarang saya jauh lebih pede ngomong bahasa Inggris."
    },
    {
      name: "Budi Santoso",
      role: "Marketing Manager",
      text: "Program Adult Class sangat membantu karir saya. Fokus pada Business English membuat presentasi saya di depan klien asing jadi lebih lancar."
    },
    {
      name: "Rizky Ramadhan",
      role: "Siswa SMA",
      text: "Persiapan IELTS di sini mantap banget. Strategi yang diajarkan sangat efektif. Akhirnya saya dapat skor yang saya targetkan!"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-4 block">Testimonial</span>
          <h2 className="text-5xl font-serif font-bold text-primary">Apa Kata Mereka?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 bg-soft rounded-3xl border border-primary/5 relative"
            >
              <div className="absolute top-8 right-10 text-secondary/10">
                <MessageSquare size={60} fill="currentColor" />
              </div>
              <p className="text-primary/70 italic mb-8 relative z-10 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">
                  {t.name[0]}
                </div>
                <div>
                  <h5 className="font-bold text-primary">{t.name}</h5>
                  <p className="text-xs text-primary/50 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto bg-secondary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Siap Memulai Perjalanan <br />
            Bahasa Inggrismu?
          </h2>
          <p className="text-white/70 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Dapatkan konsultasi gratis dan penempatan level hari ini. Bergabunglah dengan ratusan siswa sukses lainnya.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="https://wa.me/6281234567890?text=Halo%20LinguistPro,%20saya%20ingin%20tanya%20tentang%20kursus%20Bahasa%20Inggris." 
              className="bg-accent text-primary px-10 py-5 rounded-full font-bold text-xl flex items-center gap-3 hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <PhoneCall size={24} /> Hubungi via WhatsApp
            </a>
            <div className="text-white/50 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-accent" />
              <span>Respon Cepat & Ramah</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <a href="#" className="text-white font-serif text-3xl font-bold tracking-tighter mb-6 block">
              LINGUIST<span className="text-accent">PRO</span>
            </a>
            <p className="text-white/50 max-w-md leading-relaxed">
              Lembaga kursus bahasa Inggris premium yang berfokus pada pengembangan kemampuan komunikasi dan kepercayaan diri siswa untuk menghadapi tantangan global.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Navigasi</h5>
            <ul className="space-y-4">
              <li><a href="#about" className="text-white/60 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#programs" className="text-white/60 hover:text-white transition-colors">Program Kursus</a></li>
              <li><a href="#why-us" className="text-white/60 hover:text-white transition-colors">Keunggulan</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 uppercase tracking-widest text-accent">Alamat</h5>
            <p className="text-white/60 leading-relaxed">
              Jl. Pendidikan No. 123, <br />
              Kec. Kebayoran Baru, <br />
              Jakarta Selatan, 12110
            </p>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2026 LinguistPro English Course. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="bg-soft selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <WhyUs />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
