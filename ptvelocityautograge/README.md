# VELOCITY AUTO GARAGE - Company Profile Website

## 📋 Deskripsi Project
Website Company Profile profesional untuk bengkel mobil modern "Velocity Auto Garage" yang dibuat menggunakan HTML, CSS, dan JavaScript murni (Vanilla JS) tanpa framework.

## 🎯 Fitur Utama

### ✅ 7 Halaman Lengkap
1. **index.html** - Homepage dengan hero section, statistik, layanan preview, testimonial, dan promo
2. **about.html** - Tentang perusahaan, tim mekanik, nilai-nilai, dan sertifikasi
3. **services.html** - Detail semua layanan dengan FAQ accordion interaktif
4. **pricing.html** - Paket harga transparan dengan metode pembayaran
5. **booking.html** - Form booking online dengan validasi lengkap
6. **gallery.html** - Galeri foto dengan modal preview dan navigasi
7. **contact.html** - Form kontak, info lokasi, dan Google Maps integration

### 🎨 Desain & UI/UX
- Modern, clean, dan profesional
- Color scheme: Navy Blue (#0A2647), Light Blue (#2C74B3), White
- Typography: Google Fonts (Poppins)
- Fully responsive (Mobile, Tablet, Desktop)
- Smooth animations dan transitions
- Hover effects dan micro-interactions
- Professional gradient effects

### ⚡ Fitur Interaktif JavaScript
1. **Navigation**
   - Sticky navbar dengan efek scroll
   - Mobile hamburger menu
   - Active link indicator
   - Smooth scroll

2. **Animations**
   - Fade-in on scroll reveal
   - Counter animation untuk statistik
   - Parallax effects
   - Loading animations

3. **Forms**
   - Form validation (booking & contact)
   - Real-time error checking
   - Success/error notifications
   - WhatsApp integration

4. **Gallery**
   - Modal lightbox
   - Keyboard navigation (arrow keys, ESC)
   - Next/Previous controls
   - Image zoom effect

5. **FAQ Accordion**
   - Smooth expand/collapse
   - Single item active state
   - Icon rotation animation

6. **Additional Features**
   - Scroll to top button
   - WhatsApp floating button
   - Date picker validation
   - Phone number validation (Indonesian format)
   - License plate validation

## 📁 Struktur File

```
velocity-auto-garage/
│
├── index.html          # Homepage
├── about.html          # Tentang Kami
├── services.html       # Layanan
├── pricing.html        # Harga
├── booking.html        # Booking Online
├── gallery.html        # Galeri
├── contact.html        # Kontak
├── style.css           # Main stylesheet (22KB)
├── script.js           # Main JavaScript (15KB)
└── README.md           # Dokumentasi ini
```

## 🎨 Color Palette

```css
Primary Navy:    #0A2647
Primary Blue:    #144272
Accent Blue:     #205295
Light Blue:      #2C74B3
White:           #FFFFFF
Light Gray:      #F5F7FA
Gray:            #E8EDF2
Dark Gray:       #64748B
Text Dark:       #1E293B
Success:         #10B981
Warning:         #F59E0B
Danger:          #EF4444
```

## 🖼️ Image Sources
Semua gambar menggunakan URL online dari:
- **Unsplash** (https://unsplash.com) - Automotive & workshop images
- **Random User** (https://randomuser.me) - Team member avatars dan testimonials

## 📱 Responsive Breakpoints

```css
Desktop:  > 968px
Tablet:   577px - 968px
Mobile:   < 576px
```

## 🚀 Cara Menggunakan

### Option 1: Langsung Buka di Browser
1. Download semua file (9 files)
2. Pastikan semua file berada dalam satu folder
3. Double click `index.html`
4. Website siap digunakan!

### Option 2: Local Server (Recommended)
```bash
# Jika punya Python 3
python -m http.server 8000

# Atau gunakan Live Server di VS Code
# Install extension "Live Server" lalu klik "Go Live"
```

Buka browser: `http://localhost:8000`

## ✨ Fitur-Fitur Khusus

### 1. Form Validation
- **Booking Form**: Validasi nama, telepon (format Indonesia), nomor polisi, tanggal (tidak boleh masa lalu)
- **Contact Form**: Validasi email format, semua field required
- Notifikasi success/error dengan auto-hide

### 2. Interactive Gallery
- Click gambar untuk preview full screen
- Navigation: Next/Previous buttons
- Keyboard shortcuts: Arrow Left/Right, ESC
- Smooth transitions

### 3. FAQ Accordion
- Click to expand/collapse
- Auto-close other items
- Smooth animation
- Icon rotation

### 4. Statistics Counter
- Animated counting from 0
- Triggered when scroll into view
- Only runs once per page load

### 5. WhatsApp Integration
- Floating WhatsApp button
- Auto-fill message dari form booking
- Format pesan profesional

## 🎯 Target Audience
- Pemilik mobil pribadi
- Fleet kendaraan operasional
- Pengusaha transportasi
- Keluarga dengan multiple cars

## 💼 Business Features

### Layanan yang Ditawarkan:
1. Servis Berkala (dari Rp 350.000)
2. Tune Up & Engine Service (dari Rp 800.000)
3. Servis AC Mobil (dari Rp 450.000)
4. Spooring & Balancing (dari Rp 250.000)
5. Ganti Oli Express (dari Rp 200.000)
6. General Repair & Maintenance

### Paket Harga:
- **Paket Basic**: Rp 350.000 (servis dasar + cuci)
- **Paket Premium**: Rp 750.000 (servis lengkap + tune up) ⭐ Paling Populer
- **Paket Lengkap**: Rp 1.200.000 (full service + garansi extended)

### Keunggulan Kompetitif:
- ✅ Mekanik Bersertifikat ASE
- ✅ Garansi Servis 30 Hari
- ✅ Harga Transparan
- ✅ Peralatan Modern
- ✅ Ruang Tunggu Nyaman
- ✅ Booking Online

## 🔧 Teknologi yang Digunakan

### HTML5
- Semantic elements
- Form elements with validation attributes
- Meta tags untuk SEO
- Accessibility attributes (aria-label, alt text)

### CSS3
- CSS Variables (custom properties)
- Flexbox & CSS Grid
- Transitions & Animations
- Media Queries
- Pseudo-elements & Pseudo-classes
- Gradient backgrounds
- Box shadows
- Border radius

### JavaScript (Vanilla)
- DOM Manipulation
- Event Listeners
- Form Validation
- Intersection Observer API
- Local Storage (optional)
- Dynamic content generation
- Animation triggers
- Modal management

### External Libraries
- **Google Fonts**: Poppins font family
- **Font Awesome 6.4.0**: Icons
- **Google Maps**: Embedded map di contact page

## 📊 Performance

- **Optimized Images**: Using responsive image URLs
- **Minimal JS**: ~15KB unminified
- **CSS Optimization**: Using CSS variables for consistency
- **Fast Load Time**: < 2 seconds on normal connection
- **No jQuery**: Pure vanilla JavaScript
- **No Framework**: Lightweight, no Bootstrap/Tailwind overhead

## 🌐 Browser Compatibility

✅ Chrome (Recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Opera
⚠️ IE11 (Limited support - modern CSS not fully supported)

## 📝 Customization Guide

### Mengubah Warna
Edit di `style.css` bagian `:root`:
```css
:root {
    --primary-navy: #0A2647;  /* Ubah sesuai brand */
    --light-blue: #2C74B3;     /* Ubah sesuai brand */
}
```

### Mengubah Font
Edit di `<head>` section semua HTML files:
```html
<!-- Ganti Poppins dengan font pilihan -->
<link href="https://fonts.googleapis.com/css2?family=FONT_NAME&display=swap" rel="stylesheet">
```

### Mengubah Konten
- **Teks**: Edit langsung di file HTML
- **Gambar**: Ganti URL di `src` attribute
- **Harga**: Edit di `pricing.html`
- **Layanan**: Edit di `services.html`
- **Kontak**: Edit di `contact.html`

### Mengubah WhatsApp Number
Cari dan ganti `6281234567890` dengan nomor WhatsApp Anda di:
- `index.html`
- Semua file HTML lainnya
- `script.js`

## 🎓 Learning Points (Untuk Siswa RPL)

### HTML Best Practices ✅
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h6)
- Accessible forms with labels
- Meta tags untuk SEO
- Clean code structure

### CSS Best Practices ✅
- CSS Variables untuk maintainability
- Mobile-first responsive design
- BEM-like naming convention
- Organized sections dengan komentar
- Reusable utility classes

### JavaScript Best Practices ✅
- Commented code sections
- Function modularity
- Event delegation
- Error handling
- Performance optimization (Intersection Observer)

## 🐛 Known Issues & Limitations

1. **Booking System**: Saat ini simulasi (tampil notification), belum terhubung backend
2. **Contact Form**: Simulasi pengiriman, perlu backend untuk real submission
3. **Search Function**: Belum diimplementasikan
4. **Multi-language**: Saat ini hanya Bahasa Indonesia
5. **Dark Mode**: Belum tersedia (bisa ditambahkan)

## 🔮 Future Enhancements

- [ ] Backend integration (PHP/Node.js)
- [ ] Database untuk booking system
- [ ] Email notification
- [ ] SMS reminder
- [ ] Customer dashboard
- [ ] Payment gateway integration
- [ ] Live chat support
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Blog/artikel otomotif
- [ ] Customer reviews system
- [ ] Loyalty program

## 📞 Support & Contact

Jika ada pertanyaan tentang code atau ingin request fitur tambahan:
- **Email**: developer@example.com
- **GitHub**: github.com/username
- **WhatsApp**: +62 xxx-xxxx-xxxx

## 📄 License

This project is created for educational purposes (Tugas RPL).
Feel free to use and modify for learning purposes.

---

## 🙏 Credits

- **Developer**: [Your Name]
- **Project Type**: School Project (RPL)
- **Framework**: Vanilla JavaScript (No Framework)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)
- **Images**: Unsplash, Random User API

---

## ⭐ Catatan Penting

1. **Jangan hapus komentar di code** - Berguna untuk pembelajaran
2. **Backup file asli** sebelum modifikasi
3. **Test di berbagai browser** sebelum submit
4. **Perhatikan file structure** - Semua file harus satu folder
5. **Cek responsive** di mobile & tablet

---

**Made with ❤️ for Education Purpose**

*Last Updated: February 2024*
*Version: 1.0.0*
