
import React from 'react';
import { BLOG_POSTS } from '../constants';
import Reveal from './Reveal';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-[#3E2723] mb-4">Coffee Journal</h2>
          <p className="text-gray-500 max-w-lg mx-auto">Update terbaru, tips menyeduh, dan cerita di balik setiap biji kopi kami.</p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Reveal key={post.id} delay={index * 200}>
              <article className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-2xl mb-6 shadow-md">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-amber-900 tracking-wider">
                    {post.date}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#3E2723] mb-3 group-hover:text-amber-700 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center text-amber-800 font-semibold group-hover:gap-2 transition-all">
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
