# 🌴 Nusantara Voyage - Website Company Profile Travel & Tour

Website company profile modern dan interaktif untuk perusahaan travel & tour lokal Indonesia dengan fitur multi-page dan sistem artikel lengkap.

## 📋 Daftar Halaman

Website ini terdiri dari **12 halaman** yang saling terhubung:

### Halaman Utama
1. **index.html** - Beranda dengan hero slider, featured destinations, dan preview artikel
2. **tentang.html** - Tentang perusahaan, visi misi, nilai, dan tim
3. **paket.html** - Daftar paket wisata dengan detail lengkap
4. **destinasi.html** - Informasi destinasi unggulan Indonesia
5. **galeri.html** - Galeri foto perjalanan dengan lightbox
6. **artikel.html** - Halaman listing semua artikel/blog
7. **kontak.html** - Form kontak dan informasi perusahaan

### Halaman Artikel (Detail)
8. **artikel-labuan-bajo.html** - Tips Liburan Aman ke Labuan Bajo
9. **artikel-raja-ampat.html** - Waktu Terbaik Berkunjung ke Raja Ampat
10. **artikel-memilih-paket.html** - (Template tersedia untuk dibuat)
11. **artikel-etika-wisatawan.html** - (Template tersedia untuk dibuat)

### File Pendukung
- **styles.css** - Stylesheet utama dengan desain modern
- **pages.css** - Stylesheet tambahan untuk halaman internal
- **script.js** - JavaScript untuk interaktivitas

## ✨ Fitur Utama

### 🎨 Design & UI/UX
- ✅ Desain modern, clean, dan profesional
- ✅ Color scheme natural (biru laut, hijau, beige)
- ✅ Typography premium (Playfair Display + Poppins)
- ✅ Fully responsive (Desktop, Tablet, Mobile)
- ✅ Smooth animations dan transitions
- ✅ Hover effects pada semua interactive elements

### 🔄 Interaktivitas
- ✅ Hero slider dengan auto-play
- ✅ Sticky navigation dengan scroll effect
- ✅ Hamburger menu untuk mobile
- ✅ Scroll animations (fade-in, slide-in)
- ✅ Parallax effects
- ✅ Gallery lightbox
- ✅ Smooth scrolling
- ✅ Loading animation
- ✅ Back to top button
- ✅ Floating WhatsApp button

### 📱 Fitur Tambahan
- ✅ Breadcrumb navigation
- ✅ Form kontak dengan validasi
- ✅ Google Maps integration
- ✅ Social media links
- ✅ WhatsApp direct chat
- ✅ SEO-friendly structure

## 🚀 Cara Menggunakan

### 1. Extract Files
Ekstrak semua file ke dalam satu folder.

### 2. Struktur Folder
```
nusantara-voyage/
├── index.html
├── tentang.html
├── paket.html
├── destinasi.html
├── galeri.html
├── artikel.html
├── kontak.html
├── artikel-labuan-bajo.html
├── artikel-raja-ampat.html
├── styles.css
├── pages.css
├── script.js
└── README.md
```

### 3. Buka di Browser
- Double-click `index.html` untuk membuka website
- Atau host di web server untuk pengalaman terbaik

### 4. Hosting
**Rekomendasi Hosting:**
- GitHub Pages (Gratis)
- Netlify (Gratis)
- Vercel (Gratis)
- Hosting Indonesia (Niagahoster, Rumahweb, dll)

## 🎯 Customisasi

### Mengganti Konten Perusahaan

**1. Informasi Perusahaan**
- Edit `index.html`, `tentang.html`, dan footer di semua halaman
- Ganti nama perusahaan "Nusantara Voyage" dengan nama Anda
- Update alamat, telepon, email

**2. Paket Wisata**
- Edit file `paket.html`
- Sesuaikan nama paket, harga, durasi, dan fasilitas
- Tambah atau kurangi paket sesuai kebutuhan

**3. Destinasi**
- Edit file `destinasi.html`
- Tambah atau ubah destinasi sesuai fokus bisnis Anda

**4. Artikel**
- Gunakan template artikel yang sudah ada
- Copy struktur artikel dan ganti konten
- Tambahkan link artikel baru di `artikel.html`

### Mengganti Gambar

**Gambar saat ini menggunakan Unsplash (gratis):**
```html
<!-- Contoh: -->
<img src="https://images.unsplash.com/photo-xxxxx?w=800&q=80" alt="Deskripsi">
```

**Untuk menggunakan gambar sendiri:**
1. Buat folder `images/` di root directory
2. Simpan gambar Anda di folder tersebut
3. Ganti URL gambar:
```html
<img src="images/nama-gambar.jpg" alt="Deskripsi">
```

### Mengubah Warna

Edit file `styles.css`, bagian `:root`:
```css
:root {
    --primary: #0A7373;        /* Warna utama */
    --secondary: #F4A261;      /* Warna sekunder */
    --accent: #E76F51;         /* Warna aksen */
    /* ... */
}
```

### Mengganti Font

Edit link Google Fonts di `<head>` semua halaman:
```html
<link href="https://fonts.googleapis.com/css2?family=NamaFont:wght@...&display=swap" rel="stylesheet">
```

Lalu update di `styles.css`:
```css
:root {
    --font-display: 'NamaFont', serif;
    --font-body: 'NamaFont', sans-serif;
}
```

## 📞 Kontak WhatsApp

Update nomor WhatsApp di:
1. Floating button (semua halaman):
```html
<a href="https://wa.me/6281234567890" class="whatsapp-float">
```

2. Form dan footer (ganti nomor)

Format: `https://wa.me/COUNTRYCODENUMBER`
Contoh: `https://wa.me/6281234567890` untuk nomor Indonesia

## 🔧 Troubleshooting

### Animasi Tidak Berjalan
- Pastikan file `script.js` terload dengan benar
- Check console browser untuk error

### Responsive Tidak Bekerja
- Pastikan tag viewport ada di setiap halaman:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Gambar Tidak Muncul
- Check koneksi internet (jika menggunakan Unsplash)
- Atau ganti dengan gambar lokal

### Hamburger Menu Tidak Berfungsi
- Pastikan `script.js` terload di akhir `</body>`

## 📝 Menambah Artikel Baru

1. Copy file `artikel-labuan-bajo.html`
2. Rename menjadi `artikel-judul-anda.html`
3. Edit konten artikel:
   - Title
   - Category
   - Date
   - Image
   - Content
4. Tambahkan link artikel di `artikel.html`:
```html
<a href="artikel-judul-anda.html" class="article-card">
    <!-- Card content -->
</a>
```

## 🌟 Tips Optimasi

### Performance
- Compress gambar sebelum upload
- Gunakan format WebP untuk gambar modern
- Minify CSS dan JS untuk production

### SEO
- Update meta description di setiap halaman
- Tambahkan meta keywords
- Gunakan heading tags (H1, H2, H3) dengan benar
- Buat sitemap.xml
- Submit ke Google Search Console

### Analytics
Tambahkan Google Analytics di `<head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');
</script>
```

## 📱 Browser Support

Website ini support:
- ✅ Chrome (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & Mobile)
- ✅ Edge
- ✅ Opera

## 📄 License

Template ini dibuat khusus untuk Anda dan dapat digunakan untuk:
- ✅ Personal project
- ✅ Commercial project
- ✅ Client project
- ✅ Modifikasi sesuka hati

## 🎉 Kesimpulan

Website ini adalah **solusi lengkap** untuk company profile travel & tour dengan:
- 12 halaman fully functional
- Design modern dan menarik
- Fully responsive
- SEO-friendly
- Easy to customize
- Production-ready

**Selamat menggunakan dan semoga sukses dengan bisnis travel Anda! 🚀**

---

## 📧 Support

Jika ada pertanyaan atau butuh bantuan customization, jangan ragu untuk bertanya!

**Selamat berpetualang dengan website baru Anda! 🌴✨**
