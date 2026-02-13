
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Bakery Gallery</h2>
          <p className="text-gray-500">Melihat lebih dekat kesibukan dan kreasi di dapur kami.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id} 
              className="image-zoom-container cursor-pointer reveal"
              onClick={() => setSelectedImage(img.url)}
            >
              <img src={img.url} alt={img.alt} className="w-full aspect-square object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged" 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
