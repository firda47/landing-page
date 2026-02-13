
import { Product, BlogItem, Category } from './types';

export const CATEGORIES: Category[] = [
  {
    id: 1,
    title: 'Espresso Based',
    image: 'https://i.pinimg.com/1200x/a8/19/f8/a819f85ea056bf3dd5be18f48ca3e541.jpg'
  },
  {
    id: 2,
    title: 'Manual Brew',
    image: 'https://i.pinimg.com/736x/d9/4d/0f/d94d0fd0377ca83d1b01ab7e333b265d.jpg'
  },
  {
    id: 3,
    title: 'Signature Blend',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Cold Brew',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=600&auto=format&fit=crop'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Gayo Highland Reserve',
    description: 'Biji kopi pilihan dari dataran tinggi Gayo dengan note floral dan caramel.',
    price: 'Rp 85.000',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Velvet Flat White',
    description: 'Double shot espresso dengan susu yang di-steam sempurna hingga tekstur velvet.',
    price: 'Rp 45.000',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Nitro Cold Brew',
    description: 'Kopi yang diseduh dingin selama 18 jam dan diinfus nitrogen untuk sensasi creamy.',
    price: 'Rp 52.000',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=400&auto=format&fit=crop'
  }
];

export const BLOG_POSTS: BlogItem[] = [
  {
    id: 1,
    title: 'Seni Menyeduh di Rumah',
    excerpt: 'Tips rahasia untuk menciptakan secangkir kopi kualitas cafe di dapur Anda sendiri.',
    date: '15 Mar 2024',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Perjalanan Biji Kopi Kami',
    excerpt: 'Menelusuri jejak petani kopi lokal di pelosok Nusantara demi kualitas terbaik.',
    date: '10 Mar 2024',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Manfaat Kopi Bagi Kesehatan',
    excerpt: 'Bagaimana konsumsi kopi yang tepat dapat meningkatkan fokus dan metabolisme.',
    date: '05 Mar 2024',
    image: 'https://i.pinimg.com/1200x/31/52/ea/3152ea232672bc5d416042d8e832abcf.jpg'
  }
];
