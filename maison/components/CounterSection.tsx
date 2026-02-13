
import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../constants';

const Counter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const end = target;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / end));
    
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-serif block mb-2">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const CounterSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#7D8471] text-white">
      <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {STATS.map((stat) => (
          <div key={stat.id}>
            <Counter target={stat.target} suffix={stat.suffix} />
            <p className="text-xs uppercase tracking-[0.2em] opacity-80 font-bold">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
