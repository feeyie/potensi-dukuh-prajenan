// ============================================================
// DATA KEGIATAN MASYARAKAT DUKUH PRAJENAN
// Digunakan di halaman index.html bagian #kegiatan
// ============================================================

const kegiatanData = [
  {
    id: 1,
    title: "Kerja Bakti Lingkungan",
    desc: "Gotong royong membersihkan saluran irigasi, jalan dukuh, dan fasilitas umum secara bergiliran per RT.",
    category: "sosial", // kategori untuk filter: pkk, kesehatan, keagamaan, pemuda
    schedule: "Rutin",
    tag: "Sosial",
    tagClass: "tag-oranye",
    // icon SVG inline (opsional, bisa juga pakai FontAwesome)
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 32L27 10" stroke="#AD5E2C" stroke-width="2" stroke-linecap="round"/><path d="M27 10c3-2 6-1 7 2s-1 6-3 7L18 30" stroke="#AD5E2C" stroke-width="2" stroke-linecap="round"/><path d="M11 34l3-4" stroke="#AD5E2C" stroke-width="2" stroke-linecap="round"/></svg>`
  },
  {
    id: 2,
    title: "Posyandu Balita & Jiwa",
    desc: "Sejak tahun ini dipusatkan di gedung posyandu. Prajenan merupakan Pos 2 dari 5 pos posyandu se-Desa Baturan.",
    category: "kesehatan",
    schedule: "Sebulan Sekali, Sabtu",
    tag: "Kesehatan",
    tagClass: "tag-biru",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 32c-8-5.5-13-10-13-16a7 7 0 0113-3 7 7 0 0113 3c0 6-5 10.5-13 16z" stroke="#3B717C" stroke-width="2" stroke-linejoin="round"/><path d="M14 17h4l2-4 3 7 2-3h4" stroke="#3B717C" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>`
  },
  {
    id: 3,
    title: "TPA (Taman Pendidikan Al-Qur'an)",
    desc: "Pendidikan mengaji untuk anak-anak dukuh, dilaksanakan tiga kali sepekan.",
    category: "keagamaan",
    schedule: "Rabu · Sabtu · Minggu",
    tag: "Keagamaan",
    tagClass: "tag-hijau",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 12c-3-2-8-2-11 0v18c3-2 8-2 11 0M20 12c3-2 8-2 11 0v18c-3-2-8-2-11 0" stroke="#5B7C3B" stroke-width="2" stroke-linejoin="round"/><path d="M20 12v18" stroke="#5B7C3B" stroke-width="1.4"/></svg>`
  },
  {
    id: 4,
    title: "Pengajian",
    desc: "Dalam sepekan berjalan tiga kelompok pengajian berbeda secara bergilir sebagai sarana silaturahmi warga.",
    category: "keagamaan",
    schedule: "Rutin Mingguan",
    tag: "Keagamaan",
    tagClass: "tag-hijau",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 30V19l11-8 11 8v11" stroke="#5B7C3B" stroke-width="2" stroke-linejoin="round"/><path d="M17 30v-8h6v8" stroke="#5B7C3B" stroke-width="2" stroke-linejoin="round"/><path d="M20 11V7m-3 3a3 3 0 016 0" stroke="#5B7C3B" stroke-width="1.6" stroke-linecap="round"/></svg>`
  },
  {
    id: 5,
    title: "Karawitan",
    desc: "Latihan kesenian karawitan rutin di rumah Pak Lurah, arah selatan dari perempatan kedua, sisi kiri jalan.",
    category: "seni",
    schedule: "Tiap Sabtu",
    tag: "Seni",
    tagClass: "tag-oranye",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="10" stroke="#AD5E2C" stroke-width="2"/><circle cx="20" cy="20" r="4" stroke="#AD5E2C" stroke-width="1.6"/><path d="M20 8v2M20 30v2M8 20h2M30 20h2" stroke="#AD5E2C" stroke-width="1.6" stroke-linecap="round"/></svg>`
  },
  {
    id: 6,
    title: "PKK dan Arisan Ibu-Ibu",
    desc: "Arisan simpan pinjam dan senam rutin ibu-ibu; Kelompok Wanita Tani (KWT) yang pernah berjalan saat ini vakum.",
    category: "sosial",
    schedule: "Rutin",
    tag: "sosial",
    tagClass: "tag-oranye",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="12" r="3.4" stroke="#AD5E2C" stroke-width="1.8"/><path d="M9 26c0-5 3-8 5-8s5 3 5 8" stroke="#AD5E2C" stroke-width="1.8" stroke-linecap="round"/><circle cx="27" cy="12" r="3.4" stroke="#AD5E2C" stroke-width="1.8"/><path d="M22 26c0-5 3-8 5-8s5 3 5 8" stroke="#AD5E2C" stroke-width="1.8" stroke-linecap="round"/></svg>`
  },
  {
    id: 7,
    title: "Senam Ibu-Ibu",
    desc: "Arisan simpan pinjam dan senam rutin ibu-ibu; Kelompok Wanita Tani (KWT) yang pernah berjalan saat ini vakum.",
    category: "sosial",
    schedule: "Rutin",
    tag: "sosial",
    tagClass: "tag-oranye",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="12" r="3.4" stroke="#AD5E2C" stroke-width="1.8"/><path d="M9 26c0-5 3-8 5-8s5 3 5 8" stroke="#AD5E2C" stroke-width="1.8" stroke-linecap="round"/><circle cx="27" cy="12" r="3.4" stroke="#AD5E2C" stroke-width="1.8"/><path d="M22 26c0-5 3-8 5-8s5 3 5 8" stroke="#AD5E2C" stroke-width="1.8" stroke-linecap="round"/></svg>`
  },
  {
    id: 8,
    title: "Karang Taruna Pemuda",
    desc: "Arisan simpan pinjam dan senam rutin ibu-ibu; Kelompok Wanita Tani (KWT) yang pernah berjalan saat ini vakum.",
    category: "sosial",
    schedule: "Rutin",
    tag: "sosial",
    tagClass: "tag-oranye",
    icon: `<svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="14" cy="12" r="3.4" stroke="#AD5E2C" stroke-width="1.8"/><path d="M9 26c0-5 3-8 5-8s5 3 5 8" stroke="#AD5E2C" stroke-width="1.8" stroke-linecap="round"/><circle cx="27" cy="12" r="3.4" stroke="#AD5E2C" stroke-width="1.8"/><path d="M22 26c0-5 3-8 5-8s5 3 5 8" stroke="#AD5E2C" stroke-width="1.8" stroke-linecap="round"/></svg>`
  }
];

// Jika ingin menambahkan jadwal rutin (untuk tabel di bagian bawah), bisa dibuat terpisah
const jadwalRutin = [
  { kegiatan: "Posyandu Balita & Jiwa", jadwal: "Sabtu (sebulan sekali)" },
  { kegiatan: "TPA", jadwal: "Rabu · Sabtu · Minggu" },
  { kegiatan: "Karawitan", jadwal: "Setiap Sabtu, di rumah Pak Lurah" },
  { kegiatan: "Pengajian", jadwal: "3 kelompok bergilir per minggu" },
  { kegiatan: "Bank Sampah (botol & kardus)", jadwal: "Rutin, digerakkan ibu-ibu RT 05 — jadwal pasti menyusul" }
];