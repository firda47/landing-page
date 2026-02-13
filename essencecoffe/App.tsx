
import React, { useEffect, useState, useRef } from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Clock, 
  Phone,
  Menu,
  X
} from 'lucide-react';

/**
 * REUSABLE COMPONENTS
 */

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#story' },
    { name: 'Craft', href: '#craft' },
    { name: 'Experience', href: '#experience' },
    { name: 'Journal', href: '#journal' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-coffee-dark shadow-xl py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-white">
          ESSENCE<span className="text-gold-accent">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-sm uppercase tracking-widest hover:text-gold-accent transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-coffee-dark transform transition-transform duration-500 ease-in-out md:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } flex flex-col items-center justify-center space-y-8`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-2xl font-serif tracking-widest hover:text-gold-accent transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle, light = false }: { title: string, subtitle?: string, light?: boolean }) => (
  <div className="text-center mb-16 reveal">
    {subtitle && (
      <span className={`text-sm uppercase tracking-[0.3em] ${light ? 'text-gold-accent' : 'text-gold-accent'} block mb-4`}>
        {subtitle}
      </span>
    )}
    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${light ? 'text-white' : 'text-coffee-dark'}`}>
      {title}
    </h2>
  </div>
);

/**
 * MAIN APP
 */

export default function App() {
  const revealRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const currentRefs = revealRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 scale-105"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="animate-fade-up">
            <span className="text-gold-accent uppercase tracking-[0.5em] text-sm md:text-base mb-6 block">
              The Art of Slow Living
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-10 leading-tight">
              Crafted with <br /> Passion, Served <br /> with Heart
            </h1>
            <a 
              href="#story" 
              className="inline-flex items-center space-x-4 border border-white/30 text-white px-10 py-5 hover:bg-white hover:text-coffee-dark transition-all duration-500 group"
            >
              <span className="uppercase tracking-widest text-sm">Discover Our Craft</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* STORY SECTION */}
      <section id="story" className="py-24 md:py-32 bg-coffee-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="reveal" ref={addToRefs}>
            <SectionHeading title="A Journey in Every Sip" subtitle="Our Heritage" />
            <div className="space-y-6 text-coffee-mid leading-relaxed text-lg font-light">
              <p>
                Essence Coffee began with a simple belief: that coffee is more than just a beverage; it is a ritual, an invitation to slow down and savor the richness of the moment. We source our beans from small-scale farms that respect the earth and the hands that harvest them.
              </p>
              <p>
                Every roast is a masterpiece of precision, bringing out the unique notes of the terroir. From the misty highlands of Ethiopia to the volcanic soils of Sumatra, we bring the world's finest flavors directly to your cup in an atmosphere of refined elegance.
              </p>
            </div>
          </div>
          <div className="reveal" ref={addToRefs}>
            <div className="relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop" 
                alt="Coffee Brewing" 
                className="w-full h-[600px] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 border-8 border-gold-accent/20 pointer-events-none transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* CRAFT SECTION */}
      <section id="craft" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addToRefs} className="reveal">
            <SectionHeading title="Our Selection" subtitle="The Craft" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Espresso', desc: 'Intense and velvety signature blend.', img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=1974&auto=format&fit=crop' },
              { title: 'Manual Brew', desc: 'Precise extraction of single origins.', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2061&auto=format&fit=crop' },
              { title: 'Signature Blend', desc: 'Exclusive house profile roasts.', img: 'https://images.unsplash.com/photo-1506372023823-741c83b836fe?q=80&w=2070&auto=format&fit=crop' },
              { title: 'Cold Brew', desc: '12-hour steeped smooth refreshment.', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop' },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="group relative h-[500px] overflow-hidden reveal"
                ref={addToRefs}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <h3 className="text-2xl font-serif mb-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm tracking-widest uppercase text-gold-accent transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="relative py-48 md:py-64 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 parallax-bg"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=2064&auto=format&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white reveal" ref={addToRefs}>
          <SectionHeading title="A Sanctuary for the Senses" subtitle="The Experience" light />
          <p className="text-xl md:text-2xl font-light italic leading-relaxed">
            "We have designed every corner of Essence to be a haven of tranquility. From the soft ambient jazz to the aroma of freshly ground beans, your visit is a curate sensory experience that lingers long after the last drop."
          </p>
        </div>
      </section>

      {/* JOURNAL SECTION */}
      <section id="journal" className="py-24 md:py-32 bg-coffee-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div ref={addToRefs} className="reveal">
            <SectionHeading title="Notes from the Barista" subtitle="Journal" />
          </div>

          <div className="space-y-24">
            {[
              {
                date: "October 24, 2023",
                title: "The Alchemy of the Perfect Roast",
                content: "Discover the science and passion behind how we transform raw green beans into the deep, aromatic brown treasures that fuel your morning rituals.",
                img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop"
              },
              {
                date: "November 12, 2023",
                title: "Pour-Over: A Lesson in Patience",
                content: "In a world of instant gratifications, the manual pour-over remains a testament to the beauty of waiting. Learn about the variables that matter.",
                img: "https://i.pinimg.com/736x/5b/9f/52/5b9f5293193459245f75bf35124f5ab4.jpg"
              }
            ].map((article, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 reveal`}
                ref={addToRefs}
              >
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img 
                    src={article.img} 
                    alt={article.title} 
                    className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-1000 grayscale-[30%] hover:grayscale-0"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="text-xs uppercase tracking-[0.3em] text-gold-accent">{article.date}</span>
                  <h3 className="text-3xl font-serif text-coffee-dark hover:text-gold-accent cursor-pointer transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-coffee-mid font-light leading-loose text-lg border-l-2 border-gold-accent/20 pl-6 py-2">
                    {article.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 bg-coffee-dark text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal" ref={addToRefs}>
            <SectionHeading title="Connect With Us" subtitle="Get in Touch" light />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gold-accent shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Our Studio</h4>
                    <p className="text-white/60 font-light">Jalan Premium No. 88, Menteng, Jakarta Pusat, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="text-gold-accent shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Hours</h4>
                    <p className="text-white/60 font-light">Mon - Fri: 08:00 - 22:00</p>
                    <p className="text-white/60 font-light">Sat - Sun: 09:00 - 23:00</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-gold-accent shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Phone</h4>
                    <p className="text-white/60 font-light">+62 21 555 1234</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="text-gold-accent shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl mb-1">Email</h4>
                    <p className="text-white/60 font-light">hello@essencecoffee.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex space-x-6">
              <a href="#" className="p-4 border border-white/10 hover:border-gold-accent hover:text-gold-accent transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-4 border border-white/10 hover:border-gold-accent hover:text-gold-accent transition-all duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-4 border border-white/10 hover:border-gold-accent hover:text-gold-accent transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="reveal h-[500px] grayscale" ref={addToRefs}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.66642700962!2d106.824584!3d-6.175392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnMzEuNCJTIDEwNiw0OScyOC41IkU!5e0!3m2!1sen!2sid!4v1634567890123!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              className="border-4 border-white/5"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-2xl font-serif font-bold tracking-widest text-white mb-6">
            ESSENCE<span className="text-gold-accent">.</span>
          </p>
          <p className="text-white/40 text-sm uppercase tracking-[0.2em] mb-8">
            Established 2018 — Pure Quality In Every Bean
          </p>
          <p className="text-white/20 text-xs tracking-widest">
            &copy; {new Date().getFullYear()} ESSENCE COFFEE ROASTERY. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
