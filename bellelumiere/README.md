# Belle Lumière - Website Company Profile Kosmetik

Website company profile profesional untuk perusahaan kosmetik Belle Lumière yang modern, responsif, dan interaktif.

## 📋 Deskripsi Proyek

Belle Lumière adalah website company profile multi-page untuk perusahaan kosmetik premium Indonesia. Website ini dirancang dengan desain bersih, profesional, dan menggunakan konten realistis (bukan placeholder/dummy).

## 🌟 Fitur Utama

### 1. **Multi-Page Navigation**
- Homepage dengan hero section dan preview konten
- About Us - profil perusahaan, visi & misi
- Products - katalog produk dengan filter kategori
- Articles - listing artikel kecantikan
- Article Detail - halaman terpisah untuk setiap artikel
- Contact - form kontak dan informasi perusahaan

### 2. **Desain Responsif**
- Fully responsive untuk desktop, tablet, dan mobile
- Breakpoints optimal untuk berbagai ukuran layar
- Mobile-first navigation dengan hamburger menu

### 3. **Interaktivitas**
- Smooth scrolling
- Hover effects pada card dan button
- Animasi scroll-triggered
- Filter produk dengan JavaScript
- Form validation
- Sticky navbar

### 4. **Konten Realistis**
- Artikel lengkap dengan konten nyata tentang skincare dan makeup
- Produk dengan deskripsi, harga, dan rating
- Informasi perusahaan yang detail
- Tim profesional dengan bio

## 📁 Struktur File

```
belle-lumiere-website/
├── index.html              # Homepage
├── about.html              # Tentang Kami
├── products.html           # Katalog Produk
├── articles.html           # Listing Artikel
├── article-detail-1.html   # Artikel: Rutinitas Skincare Pagi
├── article-detail-2.html   # Artikel: Manfaat Vitamin C
├── article-detail-3.html   # Artikel: Tutorial Makeup Natural
├── contact.html            # Halaman Kontak
├── styles.css             # Main stylesheet
├── script.js              # JavaScript untuk interaktivitas
└── README.md              # Dokumentasi
```

## 🎨 Warna Brand

```css
Primary Color:   #D4A5A5  (Rose Pink)
Secondary Color: #9B6B6B  (Dusty Rose)
Accent Color:    #E8C4C4  (Light Pink)
Dark Color:      #2C2C2C  (Charcoal)
Light Color:     #FFFFFF  (White)
Gray Background: #F5F5F5  (Light Gray)
```

## 📄 Halaman Detail

### 1. Homepage (index.html)
- Hero section dengan call-to-action
- Preview tentang perusahaan
- Keunggulan produk (6 feature cards)
- 3 artikel terbaru
- Footer dengan informasi lengkap

### 2. About Us (about.html)
- Kisah perusahaan
- Filosofi brand
- Visi & Misi
- Nilai-nilai perusahaan (6 values)
- Tim inti (3 orang)

### 3. Products (products.html)
- Filter berdasarkan kategori (Skincare, Makeup, Body Care, Hair Care)
- 16 produk dengan informasi lengkap:
  - Gambar produk
  - Kategori
  - Nama produk
  - Deskripsi
  - Rating
  - Harga
  - Badge (Best Seller/New)

### 4. Articles (articles.html)
- 9 artikel dalam bentuk card
- Setiap card berisi:
  - Gambar featured
  - Kategori
  - Judul
  - Excerpt
  - Metadata (tanggal, penulis)
  - Link ke detail artikel

### 5. Article Detail (article-detail-1.html, 2, 3)
**Artikel 1: 7 Langkah Rutinitas Skincare Pagi**
- Panduan lengkap morning skincare routine
- Tips dari ahli dermatologi
- Rekomendasi produk Belle Lumière

**Artikel 2: Manfaat Vitamin C**
- Penjelasan detail tentang vitamin C dalam skincare
- Cara penggunaan yang benar
- Kombinasi dengan bahan aktif lain

**Artikel 3: Tutorial Makeup Natural**
- Step-by-step makeup natural
- Tips untuk hasil tahan lama
- Teknik aplikasi profesional

### 6. Contact (contact.html)
- Form kontak dengan validasi
- Informasi kontak lengkap:
  - Alamat
  - Telepon & WhatsApp
  - Email
  - Jam operasional
- Social media links
- Google Maps embed
- FAQ section (6 pertanyaan umum)

## 💻 Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Styling dan animasi
  - Flexbox & Grid Layout
  - CSS Variables untuk konsistensi
  - Media queries untuk responsivitas
  - Transitions & animations
- **JavaScript (Vanilla)** - Interaktivitas
  - Mobile menu toggle
  - Smooth scrolling
  - Scroll animations
  - Form validation
  - Product filtering
  - Back to top button

## 🚀 Cara Menggunakan

1. **Download/Clone semua file** ke dalam satu folder
2. **Buka index.html** di browser untuk melihat homepage
3. **Navigasi** menggunakan menu untuk mengakses halaman lain
4. **Responsivitas** dapat dites dengan resize browser atau menggunakan DevTools

## 📱 Responsiveness Breakpoints

```css
Desktop:  > 968px
Tablet:   641px - 968px
Mobile:   ≤ 640px
```

## ✨ Fitur JavaScript

### 1. **Sticky Navbar**
- Navbar mengecil saat scroll
- Box shadow yang dinamis

### 2. **Mobile Menu**
- Hamburger menu untuk mobile
- Smooth slide animation
- Auto close saat klik di luar

### 3. **Product Filter**
- Filter produk berdasarkan kategori
- Smooth transition saat filter

### 4. **Form Validation**
- Validasi field required
- Email format validation
- Success message

### 5. **Scroll Animations**
- Fade in saat element masuk viewport
- Intersection Observer API

### 6. **Back to Top Button**
- Muncul saat scroll > 500px
- Smooth scroll ke atas

## 🎯 Best Practices

1. **SEO Friendly**
   - Semantic HTML tags
   - Proper heading hierarchy
   - Alt text untuk images
   - Meta descriptions ready

2. **Performance**
   - Optimized images (CDN usage)
   - Minimal JavaScript
   - CSS yang efficient

3. **Accessibility**
   - ARIA labels
   - Keyboard navigation support
   - Color contrast yang baik

4. **Professional Content**
   - Konten realistis dan berkualitas
   - Tidak ada placeholder text
   - Informasi yang relevan

## 📝 Customization

### Mengubah Warna Brand
Edit variable di `styles.css`:
```css
:root {
    --primary-color: #D4A5A5;
    --secondary-color: #9B6B6B;
    /* dst... */
}
```

### Menambah Produk
1. Copy struktur HTML product card
2. Ubah konten (gambar, nama, harga, dll)
3. Set attribute `data-category` untuk filter

### Menambah Artikel
1. Buat file `article-detail-X.html`
2. Copy struktur dari artikel yang ada
3. Ubah konten artikel
4. Tambahkan card di `articles.html`
5. Link ke halaman detail yang baru

## 🔧 Pengembangan Lanjutan

Fitur yang bisa ditambahkan:
- Shopping cart functionality
- User login/register
- Product search
- Newsletter subscription
- Customer reviews
- Live chat support
- Multi-language support
- Blog pagination
- Product quick view
- Wishlist feature

## 📞 Support & Contact

Untuk pertanyaan atau bantuan:
- Email: info@bellelumiere.co.id
- WhatsApp: +62 812 3456 7890
- Instagram: @bellelumiere.id

## 📄 License

© 2026 Belle Lumière. All rights reserved.

---

**Dibuat dengan ❤️ untuk Belle Lumière**
*Website Company Profile Kosmetik Premium Indonesia*
