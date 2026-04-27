export const DASHBOARD_DATA = {
  nilaiCapaian: 107.4,
  totalPermohonan: 3647,
  permohonanBerusaha: 3223,
  permohonanNonBerusaha: 424,
  kkprlTerbit: 825,
  kkprlBerusaha: 746,
  kkprlNonBerusaha: 79,
  realisasiAnggaran: 99.74,
  paguAwal: 18334025000,
  paguRevisi: 12880127000,
  paguDitPRKPDL: 12778267000,
  blokir: 2247476000,
  paguEfektif: 10632651000,
  realisasiRp: 10503303359,
  predikatSAKIP: 'BB',
  nilaiSAKIP: 73,
  pnbpRealisasi: 622951180950,
  pnbtTarget: 500004877000,
  penilaianTeknis: 577,
  pemutakhiranData: 177,
  rekomendasiTuntas: 23,
  rekomendasiTotal: 25,
  ipASN: 83.40,
};

export const IKU_DATA = [
  {
    id: 1,
    nama: 'Persentase Penyelenggaraan KKPRL',
    target: 100,
    capaian: 137.5,
    kinerjaku: 120,
    satuan: '%',
    sk: 'Terselenggaranya Pemanfaatan Ruang Kolom Perairan dan Dasar Laut',
    keterangan: '3.647 permohonan masuk, 825 KKPRL diterbitkan',
    efisiensi: 'Rp 8,54 M (99,79%)'
  },
  {
    id: 2,
    nama: 'Persentase Pemutakhiran Data KKPRL',
    target: 100,
    capaian: 100,
    kinerjaku: 100,
    satuan: '%',
    sk: 'Terselenggaranya Pemanfaatan Ruang Kolom Perairan dan Dasar Laut',
    keterangan: '177 pemutakhiran (53 batal, 61 ubah, 63 habis masa)',
    efisiensi: 'Rp 747,2 juta (99,97%)'
  },
  {
    id: 3,
    nama: 'Persentase Tata Kelola Layanan Perizinan',
    target: 100,
    capaian: 100,
    kinerjaku: 100,
    satuan: '%',
    sk: 'Terselenggaranya Pemanfaatan Ruang Kolom Perairan dan Dasar Laut',
    keterangan: 'e-SEA: AI Engine, Notifikasi, KBLI, Early Warning',
    efisiensi: 'Rp 995,2 juta (99,11%)'
  },
  {
    id: 4,
    nama: 'Persentase Rekomendasi Pengawasan Ditindaklanjuti',
    target: 80,
    capaian: 92,
    kinerjaku: 115,
    satuan: '%',
    sk: 'Terwujudnya Layanan Dukungan Manajerial yang Baik',
    keterangan: '23 dari 25 rekomendasi Itjen status TUNTAS',
    efisiensi: 'Tanpa alokasi khusus (SIDAK)'
  },
  {
    id: 5,
    nama: 'Nilai Penilaian Mandiri SAKIP',
    target: 66,
    capaian: 73,
    kinerjaku: 110.61,
    satuan: 'Nilai',
    sk: 'Terwujudnya Layanan Dukungan Manajerial yang Baik',
    keterangan: 'Predikat BB (Sangat Baik), Peringkat #1 DJPRL',
    efisiensi: 'Google LookerStudio (gratis)'
  },
  {
    id: 6,
    nama: 'Laporan SPIP yang Disusun',
    target: 2,
    capaian: 2,
    kinerjaku: 100,
    satuan: 'Dokumen',
    sk: 'Terwujudnya Layanan Dukungan Manajerial yang Baik',
    keterangan: 'Triwulan II & III (unit baru terbentuk Q2 2025)',
    efisiensi: 'Tanpa alokasi khusus'
  },
  {
    id: 7,
    nama: 'Indeks Profesionalitas ASN',
    target: 80,
    capaian: 83.40,
    kinerjaku: 104.25,
    satuan: 'Indeks',
    sk: 'Terwujudnya Layanan Dukungan Manajerial yang Baik',
    keterangan: 'Kualifikasi 91,68% | Kompetensi 76,72% | Kinerja 82,63% | Disiplin 100%',
    efisiensi: 'e-Milea (gratis)'
  }
];

export const ACTIVITIES = [
  { date: '30 Apr 2025', title: 'Asistensi PT Supra Primatama Nusantara', type: 'asistensi', desc: 'Rencana penggelaran SKKL BNCS-2, master plan & marine survey Gresik-Bawean' },
  { date: '19 Mei 2025', title: 'Asistensi PT PHE Nunukan Company', type: 'asistensi', desc: 'Penggelaran pipa minyak & kabel laut Lapangan Badik/West Badik' },
  { date: '4 Jun 2025', title: 'Konsultasi PT Lucky Samudera', type: 'konsultasi', desc: 'Permohonan KKPRL budidaya Kepulauan Seribu' },
  { date: '9 Jul 2025', title: 'Asistensi PT Pelabuhan Indonesia (Persero)', type: 'asistensi', desc: 'PKKPRL Pelabuhan Waingapu, Tembaga, Ende, Ippi & Pengerukan Indonesia' },
  { date: '16 Jul 2025', title: 'Audiensi PT Kasmar Poleang Raya', type: 'asistensi', desc: 'Perpanjangan PKKPRL dengan penambahan area' },
  { date: '18 Jul 2025', title: 'Konsultasi PT PLN UID Banten', type: 'konsultasi', desc: 'Kabel bawah laut tegangan menengah 20kV Banten-Pulau Panjang-Pulau Tunda' },
  { date: '31 Jul 2025', title: 'Asistensi Pelabuhan Belawan, Malahayati, Lhokseumawe', type: 'asistensi', desc: 'Dokumen KKPRL 5 pelabuhan PT Pelindo' },
  { date: '5 Agu 2025', title: 'Verifikasi PT Panorama Pulau Seribu', type: 'verifikasi', desc: 'Rehabilitasi lamun, mangrove, budidaya ikan & UMKM' },
  { date: '21 Agu 2025', title: 'Pendampingan Tambak Pantura Jawa Barat', type: 'konsultasi', desc: 'Pengembangan budidaya tambak pantai utara (PSN Indikatif)' },
  { date: '20 Agu 2025', title: 'Asistensi PT Jejaring Mitra Persada', type: 'asistensi', desc: 'SKKL Batam-Singapura, integrasi peta keselamatan' },
  { date: '4 Sep 2025', title: 'Asistensi PT Telkomunikasi Indonesia Internasional', type: 'asistensi', desc: 'Pengecekan dokumen permohonan PKKPRL' },
  { date: '11 Sep 2025', title: 'Sosialisasi KKPRL KPBPB Batam', type: 'sosialisasi', desc: 'Implementasi PP 25/2025 di Kawasan Perdagangan Bebas Batam' },
  { date: '23 Okt 2025', title: 'Identifikasi PPLTGU Cilegon', type: 'verifikasi', desc: 'Marine survey SKLTM 20kV Cilegon-Pulau Panjang-Pulau Tunda' },
  { date: '28 Okt 2025', title: 'Koordinasi Rekonsiliasi Pipa & Kabel Bawah Laut', type: 'konsultasi', desc: 'Sinkronisasi data eksisting & validasi lintas instansi' },
  { date: '31 Okt 2025', title: 'Workshop Undersea Cables ASEAN', type: 'sosialisasi', desc: 'Maintenance & Repair Best Practices dengan pemerintah & industri ASEAN' },
  { date: '6 Nov 2025', title: 'Audiensi Bupati Halmahera Tengah', type: 'konsultasi', desc: 'Rencana reklamasi Pantai Lelief & pilot project kawasan terintegrasi' },
  { date: '7 Nov 2025', title: 'Asistensi PT Jawa Satu Power', type: 'asistensi', desc: 'Penyelesaian koordinat izin lokasi perairan' },
  { date: '13 Nov 2025', title: 'Koordinasi Pengelolaan Sedimentasi Laut', type: 'konsultasi', desc: 'Rancangan PP 26/2023 & klasifikasi standar wilayah sehat' },
  { date: '27 Nov 2025', title: 'Asistensi PT Thorcon Power Indonesia', type: 'asistensi', desc: 'PLTN menempel garis pantai, dukungan pemprov ke MKP' },
  { date: '28 Nov 2025', title: 'Konsultasi PT Bumi Siak Pusako', type: 'konsultasi', desc: 'Persetujuan fasilitas eksisting pipa gas bumi Riau' },
  { date: '5 Des 2025', title: 'Coaching Clinic Malang', type: 'sosialisasi', desc: 'Dukungan KKPRL untuk KNMP, Revitalisasi Tambak Pantura & K-SIGN' },
  { date: '22 Des 2025', title: 'Asistensi Mubadala Energy', type: 'asistensi', desc: 'Pipa & umbilical Lapangan Gas Tangkulo via OSS' },
];

export const AI_MODULES = [
  { icon: 'fa-file-lines', title: 'AI Document Engine', desc: 'Verifikasi dokumen otomatis menggunakan OCR & NLP untuk mempercepat pemeriksaan administrasi KKPRL.', color: '#00A8E0', status: 'Development' },
  { icon: 'fa-map-location-dot', title: 'Spatial Conflict Detection', desc: 'Analisis tumpang tindih (intersect & buffer) ruang laut secara real-time untuk mitigasi konflik pemanfaatan.', color: '#00B4A0', status: 'Planning' },
  { icon: 'fa-triangle-exclamation', title: 'Early Warning System', desc: 'Notifikasi otomatis habis masa berlaku KKPRL, pembatalan, dan status perizinan via SMS/email.', color: '#f0a500', status: 'Launched' },
  { icon: 'fa-chart-pie', title: 'Dashboard Analytics', desc: 'Visualisasi data perizinan, PNBP, dan kinerja organisasi secara real-time untuk pengambilan keputusan.', color: '#00A8E0', status: 'Active' },
  { icon: 'fa-layer-group', title: 'Planning Integration', desc: 'Integrasi peta RZWP3K, RTRL, dan data KKPRL terbit untuk perencanaan tata ruang laut nasional.', color: '#00B4A0', status: 'Development' }
];
