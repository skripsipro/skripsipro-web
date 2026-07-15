export interface Project {
  id: number;
  title: string;
  category: 'web' | 'mobile' | 'desktop';
  type: string;
  description: string;
  detailDescription?: string;
  image: string;
  technologies: string[];
  university: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistem Informasi Perpustakaan',
    category: 'web',
    type: 'Web Application',
    description: 'Sistem manajemen perpustakaan dengan fitur peminjaman buku, katalog online, dan laporan statistik.',
    detailDescription: 'Sistem informasi perpustakaan berbasis web yang dirancang untuk memudahkan pengelolaan koleksi buku, transaksi peminjaman, dan pembuatan laporan. Dilengkapi dengan fitur katalog online, manajemen anggota, dan notifikasi keterlambatan pengembalian.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'MySQL', 'Bootstrap'],
    university: 'Universitas Indonesia'
  },
  {
    id: 2,
    title: 'Aplikasi E-Learning Mobile',
    category: 'mobile',
    type: 'Mobile Application',
    description: 'Platform pembelajaran online untuk mahasiswa dengan fitur video course, quiz, dan sertifikat.',
    detailDescription: 'Aplikasi mobile e-learning yang memungkinkan mahasiswa mengakses materi kuliah, mengikuti quiz interaktif, dan mendapatkan sertifikat kelulusan. Dilengkapi dengan fitur progres belajar, diskusi, dan notifikasi pengingat jadwal.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    university: 'Institut Teknologi Bandung'
  },
  {
    id: 3,
    title: 'Sistem Inventory Gudang',
    category: 'desktop',
    type: 'Desktop Application',
    description: 'Aplikasi desktop untuk manajemen stok barang dengan fitur barcode scanner dan laporan real-time.',
    detailDescription: 'Aplikasi desktop inventory yang terintegrasi dengan barcode scanner untuk manajemen stok barang secara real-time. Fitur utama meliputi manajemen produk, tracking stok masuk/keluar, dan laporan analisis data.',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Electron', 'React', 'SQLite', 'Chart.js'],
    university: 'Universitas Gadjah Mada'
  },
  {
    id: 4,
    title: 'Portal Berita Kampus',
    category: 'web',
    type: 'Web Application',
    description: 'Website portal berita dengan sistem CMS, kategori artikel, dan fitur komentar.',
    detailDescription: 'Portal berita kampus dengan Content Management System (CMS) yang memudahkan admin dalam mengelola artikel. Dilengkapi dengan sistem kategori, tag, komentar, dan author management.',
    image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Laravel', 'MySQL', 'Bootstrap', 'CKEditor'],
    university: 'Universitas Brawijaya'
  },
  {
    id: 5,
    title: 'Aplikasi Kasir Restoran',
    category: 'mobile',
    type: 'Mobile Application',
    description: 'Aplikasi kasir untuk restoran dengan fitur menu management, order tracking, dan payment gateway.',
    detailDescription: 'Aplikasi kasir mobile yang memudahkan pengelolaan pesanan dan pembayaran restoran. Fitur meliputi manajemen menu, pencatatan pesanan, integrasi payment gateway, dan laporan penjualan harian.',
    image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Stripe'],
    university: 'Universitas Diponegoro'
  },
  {
    id: 6,
    title: 'Sistem Absensi Karyawan',
    category: 'web',
    type: 'Web System',
    description: 'Sistem absensi online dengan fitur geolocation, laporan kehadiran, dan notifikasi otomatis.',
    detailDescription: 'Sistem absensi online berbasis web dengan validasi lokasi geolocation untuk memastikan kehadiran karyawan. Fitur utama meliputi check-in/out, rekap kehadiran, pengajuan izin, dan notifikasi otomatis.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'Express.js', 'PostgreSQL', 'Socket.io'],
    university: 'Universitas Airlangga'
  }
];
