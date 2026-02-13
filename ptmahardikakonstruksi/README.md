# 🏗️ MAHARDIKA KONSTRUKSI - WEBSITE MULTI-PAGE

Website Company Profile konstruksi perumahan dengan desain modern, bold, dan visual yang kaya.

## ✨ FITUR UTAMA

### ✅ Yang Sudah Diperbaiki:
1. **Multi-page Navigation** - Setiap halaman terpisah (bukan one-page)
2. **Visual Elements Melimpah** - Banyak ilustrasi SVG di setiap halaman
3. **Kontras Warna Tinggi** - Font dan background tidak nabrak, mudah dibaca
4. **Home Page Simpel** - Hanya berisi informasi singkat dan preview
5. **Desain Bold & Profesional** - Typography kuat, warna berani, layout modern

### 🎨 Desain
- **Font**: Bebas Neue (display/heading) + Work Sans (body)
- **Warna**: Orange energik (#FF6B35), Navy gelap (#0D1B2A), Yellow accent (#FFD23F)
- **Style**: Industrial, bold, high-contrast, banyak visual

## 📁 STRUKTUR FILE

```
mahardika-konstruksi/
├── index.html      # Home page (overview singkat)
├── tentang.html    # Tentang perusahaan
├── layanan.html    # 3 Layanan detail
├── proyek.html     # 4 Portfolio proyek
├── kontak.html     # Form kontak + info
├── style.css       # Main stylesheet
├── script.js       # JavaScript interaktif
└── README.md       # Dokumentasi ini
```

## 🚀 CARA MENGGUNAKAN

1. **Download semua file** ke satu folder
2. **Buka index.html** di browser
3. **Navigasi** antar halaman menggunakan menu

### Atau gunakan Live Server:
- Buka VS Code
- Install extension "Live Server"
- Right-click index.html → Open with Live Server

## 📱 RESPONSIVE

Website fully responsive untuk:
- **Desktop** (>1024px) - Full layout
- **Tablet** (768px-1024px) - Adjusted grid
- **Mobile** (<768px) - Hamburger menu, single column

## 🎯 HALAMAN-HALAMAN

### 1. HOME (index.html)
- Hero section dengan judul bold
- Statistik perusahaan (350+ proyek, 10+ tahun, 98% kepuasan)
- Preview 3 layanan
- CTA section

### 2. TENTANG (tentang.html)
- Profil perusahaan lengkap
- Pengalaman & keahlian
- 3 nilai utama (Ketepatan Waktu, Kualitas, Tim Profesional)
- Visual SVG ilustrasi bangunan

### 3. LAYANAN (layanan.html)
- Pembangunan Rumah Baru (detail + fitur)
- Renovasi & Remodeling (detail + fitur)
- Desain & Bangun (detail + fitur)
- Setiap layanan punya ilustrasi SVG

### 4. PROYEK (proyek.html)
- 4 Portfolio proyek:
  * Residensi Bintaro Modern (2 lantai)
  * Renovasi Rumah BSD (renovasi total)
  * Rumah Tropis Bekasi (1 lantai)
  * Cluster Green Valley Depok (8 unit)
- Setiap proyek: lokasi, luas, durasi, tahun
- Ilustrasi SVG untuk setiap proyek

### 5. KONTAK (kontak.html)
- Formulir konsultasi lengkap
- Informasi kontak (alamat, telepon, email)
- Jam operasional
- Terintegrasi WhatsApp

## 🎨 KUSTOMISASI

### Mengubah Warna
Edit `style.css` bagian `:root`:
```css
:root {
    --color-primary: #FF6B35;        /* Warna utama */
    --color-secondary: #0D1B2A;      /* Warna gelap */
    --color-accent: #FFD23F;         /* Aksen kuning */
}
```

### Mengubah Font
Edit link Google Fonts di semua HTML:
```html
<link href="https://fonts.googleapis.com/css2?family=FONT-BARU&display=swap" rel="stylesheet">
```

### Mengubah Nomor WhatsApp
Edit `script.js` baris 65:
```javascript
const whatsappUrl = `https://wa.me/NOMOR-ANDA?text=...`;
```

## 💡 FITUR JAVASCRIPT

1. **Navbar Scroll Effect** - Navbar berubah saat scroll
2. **Hamburger Menu** - Menu mobile yang smooth
3. **Smooth Scroll** - Scroll halus antar section
4. **Form WhatsApp Integration** - Langsung ke WA saat submit
5. **Scroll Animations** - Elemen fade-in saat terlihat

## 🖼️ VISUAL ELEMENTS

Website ini menggunakan **banyak ilustrasi SVG** untuk:
- Hero section backgrounds
- Building silhouettes
- Service icons
- Project thumbnails
- Decorative elements

**Keuntungan SVG:**
- Scalable tanpa pecah
- File size kecil
- Mudah di-customize (ubah warna, size)
- Loading cepat

## ⚡ PERFORMA

- ✅ No external images (pakai SVG)
- ✅ Minimal dependencies (cuma Google Fonts)
- ✅ Clean code structure
- ✅ Fast loading time
- ✅ SEO friendly

## 🎓 UNTUK SISWA RPL

### Yang Bisa Dipelajari:
1. **HTML5 Semantik** - Struktur yang benar
2. **CSS Grid & Flexbox** - Layout modern
3. **CSS Variables** - Mudah maintain
4. **Responsive Design** - Mobile-first approach
5. **JavaScript DOM** - Interaktivitas
6. **SVG Graphics** - Vector graphics
7. **Form Handling** - WhatsApp integration
8. **Multi-page Navigation** - Proper site structure

### Best Practices:
- ✅ Semantic HTML tags
- ✅ CSS organization (variables, sections)
- ✅ JavaScript modular
- ✅ Responsive breakpoints
- ✅ Accessible design

## 📞 KONTAK PERUSAHAAN (CONTOH)

**PT Mahardika Konstruksi**
- Alamat: Jl. Raya Ciputat No. 45, Jakarta Selatan 12310
- Telepon: +62 812-8765-4321
- Email: info@mahardikakonstruksi.co.id

⚠️ **Note**: Data di atas adalah contoh untuk demo. Ganti dengan data perusahaan sebenarnya.

## 🔧 TROUBLESHOOTING

**Menu tidak berfungsi?**
- Pastikan `script.js` ter-load
- Cek console browser (F12) untuk error

**Tampilan berantakan?**
- Pastikan `style.css` terhubung
- Clear browser cache (Ctrl+Shift+R)

**WhatsApp tidak buka?**
- Ganti nomor di `script.js`
- Pastikan format: 62812xxx (tanpa +, spasi, dash)

## 📝 CHANGELOG

### Version 2.0 (Current)
- ✅ Multi-page design (pisah per halaman)
- ✅ Banyak visual elements (SVG)
- ✅ High contrast colors (mudah dibaca)
- ✅ Bold typography (Bebas Neue)
- ✅ Home page simplified (info singkat)

### Version 1.0 (Previous)
- ❌ One-page design (semua di index.html)
- ❌ Kurang visual
- ❌ Kontras warna rendah
- ❌ Typography generic

---

**Dibuat untuk pembelajaran siswa RPL** 🎓

Website ini free to use, modify, dan distribute untuk keperluan edukasi!

Semoga bermanfaat! 🚀
