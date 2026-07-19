// ===== DATA DEMOGRAFI DESA BATURAN =====
// Sumber: Buku Data Monografi Desa Baturan, Semester II, Desember 2025

const demografiData = {
    // ===== IDENTITAS DESA =====
    identitas: {
        namaDesa: "BATURAN",
        kodeDesa: "3310022011",
        kecamatan: "GANTIWARNO",
        kabupaten: "KLATEN",
        provinsi: "JAWA TENGAH",
        bulanData: "DESEMBER",
        tahun: 2025
    },

    // ===== PEMERINTAHAN =====
    pemerintahan: {
        kepalaDesa: "Slamet Sutrisno",
        kasiPemerintahan: "Suripno",
        perangkatDesa: 5,
        ketuaBPD: "Belum terdata"
    },

    // ===== GEOGRAFI =====
    geografi: {
        luasDesa: 111.1030, // Ha
        ketinggianMdpl: 600,
        curahHujanMm: 2000,
        topografi: "Dataran Rendah",
        suhuRataRata: "25°C - 35°C",
        batasWilayah: {
            utara: "Ds. Titang, Kec. Jogonalan",
            selatan: "Ds. Mlese, Kec. Gantiwarno",
            barat: "Ds. Mutihan, Kec. Gantiwarno",
            timur: "Ds. Mlese, Kec. Gantiwarno"
        },
        orbitrasi: {
            kecamatan: 3, // Km
            kabupaten: 13, // Km
            provinsi: 60, // Km
            negara: 180 // Km
        }
    },

    // ===== PENDUDUK =====
    penduduk: {
        total: 1939,
        lakiLaki: 967,
        perempuan: 972,
        kepalaKeluarga: {
            total: 711,
            lakiLaki: 535,
            perempuan: 176
        },
        kewarganegaraan: {
            wni: {
                total: 1933,
                lakiLaki: 965,
                perempuan: 968
            },
            wna: { total: 0, lakiLaki: 0, perempuan: 0 }
        }
    },

    // ===== AGAMA =====
    agama: [
        { nama: "Islam", jumlah: 1788, lakiLaki: 894, perempuan: 894 },
        { nama: "Kristen", jumlah: 38, lakiLaki: 18, perempuan: 20 },
        { nama: "Katholik", jumlah: 112, lakiLaki: 54, perempuan: 58 },
        { nama: "Hindu", jumlah: 1, lakiLaki: 1, perempuan: 0 },
        { nama: "Budha", jumlah: 0, lakiLaki: 0, perempuan: 0 },
        { nama: "Konghucu", jumlah: 0, lakiLaki: 0, perempuan: 0 },
        { nama: "Kepercayaan Lain", jumlah: 0, lakiLaki: 0, perempuan: 0 }
    ],

    // ===== PENDIDIKAN =====
    pendidikan: [
        { tingkat: "Tidak / Belum Sekolah", jumlah: 274, lakiLaki: 128, perempuan: 146 },
        { tingkat: "Taman Kanak-kanak", jumlah: 202, lakiLaki: 105, perempuan: 97 },
        { tingkat: "Sekolah Dasar", jumlah: 362, lakiLaki: 176, perempuan: 186 },
        { tingkat: "SMP / SLTP", jumlah: 273, lakiLaki: 132, perempuan: 141 },
        { tingkat: "SMA / SLTA", jumlah: 690, lakiLaki: 364, perempuan: 326 },
        { tingkat: "Akademi (D1–D3)", jumlah: 48, lakiLaki: 18, perempuan: 30 },
        { tingkat: "Sarjana (S1–S3)", jumlah: 90, lakiLaki: 44, perempuan: 46 }
    ],

    // ===== USIA =====
    usia: [
        { range: "0 – 4 tahun", jumlah: 87 },
        { range: "5 – 9 tahun", jumlah: 133 },
        { range: "10 – 14 tahun", jumlah: 133 },
        { range: "15 – 19 tahun", jumlah: 165 },
        { range: "20 – 24 tahun", jumlah: 149 },
        { range: "25 – 29 tahun", jumlah: 143 },
        { range: "30 – 34 tahun", jumlah: 114 },
        { range: "35 – 39 tahun", jumlah: 130 },
        { range: "40 – 44 tahun", jumlah: 146 },
        { range: "45 – 49 tahun", jumlah: 150 },
        { range: "50 – 54 tahun", jumlah: 118 },
        { range: "55 – 59 tahun", jumlah: 134 },
        { range: "60 – 64 tahun", jumlah: 115 },
        { range: "65 – 69 tahun", jumlah: 89 },
        { range: "70 – 74 tahun", jumlah: 69 },
        { range: "75 tahun ke atas", jumlah: 64 }
    ],

    // ===== MATA PENCAHARIAN =====
    mataPencaharian: [
        { pekerjaan: "Buruh Harian Lepas", jumlah: 768 },
        { pekerjaan: "Pelajar / Mahasiswa", jumlah: 427 },
        { pekerjaan: "Belum / Tidak Bekerja", jumlah: 269 },
        { pekerjaan: "Karyawan Swasta", jumlah: 142 },
        { pekerjaan: "Mengurus Rumah Tangga", jumlah: 119 },
        { pekerjaan: "Wiraswasta", jumlah: 57 },
        { pekerjaan: "Buruh Tani / Perkebunan", jumlah: 27 },
        { pekerjaan: "Pensiunan", jumlah: 24 },
        { pekerjaan: "Pedagang", jumlah: 23 },
        { pekerjaan: "Guru", jumlah: 21 },
        { pekerjaan: "Petani / Pekebun", jumlah: 17 },
        { pekerjaan: "Pegawai Negeri Sipil", jumlah: 13 },
        { pekerjaan: "Karyawan Honorer", jumlah: 5 },
        { pekerjaan: "Tukang Kayu", jumlah: 5 },
        { pekerjaan: "Perangkat Desa", jumlah: 5 },
        { pekerjaan: "Dosen", jumlah: 4 },
        { pekerjaan: "Karyawan BUMN", jumlah: 3 },
        { pekerjaan: "Perdagangan", jumlah: 2 },
        { pekerjaan: "Tukang Jahit", jumlah: 2 },
        { pekerjaan: "Sopir", jumlah: 2 },
        { pekerjaan: "TNI", jumlah: 1 },
        { pekerjaan: "Tukang Las / Pandai Besi", jumlah: 1 },
        { pekerjaan: "Seniman", jumlah: 1 },
        { pekerjaan: "Kepala Desa", jumlah: 1 }
    ],

    // ===== MOBILITAS / MUTASI PENDUDUK =====
    mobilitas: {
        lahir: {
            total: 8,
            lakiLaki: 6,
            perempuan: 2
        },
        meninggal: {
            total: 11,
            lakiLaki: 3,
            perempuan: 8
        },
        datang: {
            total: 41,
            lakiLaki: 20,
            perempuan: 21
        },
        pindah: {
            total: 37,
            lakiLaki: 17,
            perempuan: 20
        }
    },

    // ===== DATA KHUSUS DUKUH PRAJENAN (Estimasi) =====
    // Dukuh Prajenan: RW 03, hanya terdiri dari RT 05 dan RT 06
    // Total KK sekitar 120 KK (dilihat dari nomor rumah terakhir)
    prajenan: {
        // Data posyandu
        balita: 21,
        lansia: 20,
        ibuHamil: 1,
        // Perkiraan KK per RT (total 120 KK, dibagi rata 60 per RT)
        kkPerRt: {
            "RT 05": 60,
            "RT 06": 60
        }
    }
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = demografiData;
}