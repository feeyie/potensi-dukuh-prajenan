// ===== DATA UMKM DUKUH PRAJENAN =====
const umkmData = [
    { nama: "Suryadi", jenis: "Pengepul Barang Bekas/Rosokan", pengelola: "Perorangan", modal: 1000000, omset: 500000, rt: "RT 05", sektor: "Dagang & Sembako" },
    { nama: "Anna Ganefi", jenis: "Ayam Goreng", pengelola: "Perorangan", modal: 40000000, omset: 20000000, rt: "RT 05", sektor: "Kuliner" },
    { nama: "Sundari", jenis: "Warung Makanan", pengelola: "Perorangan", modal: 500000, omset: 1000000, rt: "RT 05", sektor: "Kuliner" },
    { nama: "Sumarni", jenis: "Ayam Goreng", pengelola: "Perorangan", modal: 40000000, omset: 30000000, rt: "RT 05", sektor: "Kuliner" },
    { nama: "Sakiman Warsito", jenis: "Ayam Goreng", pengelola: "Perorangan", modal: 1000000, omset: 2500000, rt: "RT 05", sektor: "Kuliner" },
    { nama: "Wiwik Hartati", jenis: "Ayam Goreng", pengelola: "Perorangan", modal: 500000, omset: 1500000, rt: "RT 05", sektor: "Kuliner" },
    { nama: "Mawarti", jenis: "Jualan Sayur", pengelola: "Perorangan", modal: 1000000, omset: 3000000, rt: "RT 05", sektor: "Dagang & Sembako" },
    { nama: "Hayah Sudar Anjar Janah", jenis: "Warung Kelontong", pengelola: "Perorangan", modal: 10000000, omset: 2000000, rt: "RT 05", sektor: "Dagang & Sembako" },
    { nama: "Sumartini", jenis: "Warung Kelontong", pengelola: "Perorangan", modal: 10000000, omset: 2000000, rt: "RT 05", sektor: "Dagang & Sembako" },
    { nama: "Aji Priambada", jenis: "Angkringan", pengelola: "Perorangan", modal: 2000000, omset: 3000000, rt: "RT 05", sektor: "Kuliner" },
    { nama: "Yunanto", jenis: "Pangkalan Gas Elpiji", pengelola: "Perorangan", modal: 7000000, omset: 21000000, rt: "RT 05", sektor: "Dagang & Sembako" },
    { nama: "Budi Santoso", jenis: "Ayam Goreng", pengelola: "Perorangan", modal: 700000, omset: 2000000, rt: "RT 05", sektor: "Kuliner" },
    { nama: "Samsi", jenis: "Dagang Beras", pengelola: "Perorangan", modal: 5000000, omset: 15000000, rt: "RT 05", sektor: "Dagang & Sembako" },
    { nama: "Sunarti", jenis: "Penjahit", pengelola: "Perorangan", modal: 1500000, omset: 3000000, rt: "RT 05", sektor: "Jasa" },
    { nama: "Sumarti", jenis: "Penjahit", pengelola: "Perorangan", modal: 1500000, omset: 3000000, rt: "RT 05", sektor: "Jasa" },
    { nama: "Titik Rahayu", jenis: "Ayam Goreng", pengelola: "Perorangan", modal: 10000000, omset: 20000000, rt: "RT 06", sektor: "Kuliner" },
    { nama: "Anastasia Anita", jenis: "Jasa Paket", pengelola: "Perorangan", modal: 5000000, omset: 15000000, rt: "RT 06", sektor: "Jasa" },
    { nama: "Warsi Hadi S", jenis: "Ayam Potong", pengelola: "Perorangan", modal: 5000000, omset: 2500000, rt: "RT 06", sektor: "Peternakan & Produksi" },
    { nama: "Sarmi Ranto", jenis: "Warung Kelontong", pengelola: "Perorangan", modal: 1000000, omset: 3000000, rt: "RT 06", sektor: "Dagang & Sembako" },
    { nama: "Welastri", jenis: "Jualan Sayur", pengelola: "Perorangan", modal: 5000000, omset: 3000000, rt: "RT 06", sektor: "Dagang & Sembako" },
    { nama: "Wahyu Setyo W.", jenis: "Jual Sayur", pengelola: "Perorangan", modal: 15000000, omset: 17000000, rt: "RT 06", sektor: "Dagang & Sembako" },
    { nama: "Sakinem", jenis: "Makanan Kecil", pengelola: "Perorangan", modal: 500000, omset: 1000000, rt: "RT 06", sektor: "Kuliner" },
    { nama: "Tumini", jenis: "Jual Sayur", pengelola: "Perorangan", modal: 3000000, omset: 15000000, rt: "RT 06", sektor: "Dagang & Sembako" },
    { nama: "Muji Rahayu", jenis: "Telur Asin", pengelola: "Perorangan", modal: 900000, omset: 1500000, rt: "RT 06", sektor: "Peternakan & Produksi" },
    { nama: "Maryati", jenis: "Lauk Pauk", pengelola: "Perorangan", modal: 500000, omset: 3000000, rt: "RT 06", sektor: "Kuliner" },
    { nama: "Supriyanto", jenis: "Cilok", pengelola: "Perorangan", modal: 1000000, omset: 3000000, rt: "RT 06", sektor: "Kuliner" },
    { nama: "Suminem Warto S.", jenis: "Sayur", pengelola: "Perorangan", modal: 5000000, omset: 3000000, rt: "RT 06", sektor: "Dagang & Sembako" },
    { nama: "Utami", jenis: "Loundry", pengelola: "Perorangan", modal: 2000000, omset: 3000000, rt: "RT 06", sektor: "Jasa" },
    { nama: "Fitri Puji A.", jenis: "Makanan Kecil", pengelola: "Perorangan", modal: 500000, omset: 1000000, rt: "RT 06", sektor: "Kuliner" },
];

// Jika menggunakan module atau perlu diakses global, kita expose
if (typeof module !== 'undefined' && module.exports) {
    module.exports = umkmData;
}