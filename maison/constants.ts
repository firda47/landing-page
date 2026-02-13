
import { Product, Testimonial, GalleryImage, CounterStat, Category } from './types';

export const SIGNATURE_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Butter Croissant',
    category: 'Viennoiserie',
    price: 'Rp 18.000',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    description: 'Renyah di luar, lembut di dalam dengan lapisan mentega Prancis murni.'
  },
  {
    id: 2,
    name: 'Chocolate Danish',
    category: 'Viennoiserie',
    price: 'Rp 22.000',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    description: 'Pastry berlapis dengan isian cokelat hitam premium yang meleleh.'
  },
  {
    id: 3,
    name: 'Almond Tart',
    category: 'Pâtisserie',
    price: 'Rp 35.000',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=600',
    description: 'Tart almond panggang dengan rasa kacang yang kaya dan tekstur renyah.'
  },
  {
    id: 4,
    name: 'Cinnamon Roll',
    category: 'Breads',
    price: 'Rp 25.000',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=600',
    description: 'Roti gulung kayu manis dengan cream cheese frosting yang creamy.'
  },
  {
    id: 5,
    name: 'Classic Sourdough',
    category: 'Breads',
    price: 'Rp 45.000',
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&q=80&w=600',
    description: 'Roti artisan fermentasi alami 24 jam dengan kulit yang renyah dan isi yang kenyal.'
  },
  {
    id: 6,
    name: 'Strawberry Mille Crepe',
    category: 'Cakes',
    price: 'Rp 42.000',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600',
    description: 'Lapisan crepe tipis dengan krim vanilla dan stroberi segar.'
  }
];

// Exporting BEST_SELLERS to fix the missing export error
export const BEST_SELLERS: Product[] = SIGNATURE_PRODUCTS.slice(0, 4);

// Exporting CATEGORIES to fix the missing export error
export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Viennoiserie',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    color: 'bg-orange-50'
  },
  {
    id: 2,
    name: 'Pâtisserie',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&q=80&w=600',
    color: 'bg-pink-50'
  },
  {
    id: 3,
    name: 'Artisan Breads',
    image: 'https://images.unsplash.com/photo-1585478259715-876a6a81fc08?auto=format&fit=crop&q=80&w=600',
    color: 'bg-yellow-50'
  },
  {
    id: 4,
    name: 'Cakes',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=600',
    color: 'bg-blue-50'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600', alt: 'Fresh Breads' },
  { id: 2, url: 'https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=600', alt: 'Kitchen Work' },
  { id: 3, url: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?auto=format&fit=crop&q=80&w=600', alt: 'Cupcakes' },
  { id: 4, url: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=600', alt: 'Artisan Pastry' },
  { id: 5, url: 'https://i.pinimg.com/736x/7e/35/61/7e3561a74c24039f87d3e59462047563.jpg', alt: 'Bakery Interior' },
  { id: 6, url: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80&w=600', alt: 'Cookies' }
];

export const STATS: CounterStat[] = [
  { id: 1, label: 'Customers Served', target: 15000, suffix: '+' },
  { id: 2, label: 'Bakery Products', target: 120, suffix: '+' },
  { id: 3, label: 'Years Experience', target: 8, suffix: '' },
  { id: 4, label: 'Store Locations', target: 3, suffix: '' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Arini Putri',
    content: 'Sourdough terbaik di kota ini! Teksturnya sangat autentik dan bikin ketagihan.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Wilson',
    content: 'Croissant ini mengingatkan saya pada Paris. Sangat bermentega dan renyah. Sangat direkomendasikan.',
    rating: 5
  },
  {
    id: 3,
    name: 'Maya Sari',
    content: 'Tempat favorit untuk pesan kue ulang tahun. Cantik dan rasanya tidak terlalu manis.',
    rating: 5
  }
];