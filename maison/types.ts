
export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
}

export interface GalleryImage {
  id: number;
  url: string;
  alt: string;
}

export interface CounterStat {
  id: number;
  label: string;
  target: number;
  suffix: string;
}

// Added Category interface
export interface Category {
  id: number;
  name: string;
  image: string;
  color: string;
}