export interface Testimonial {
  id: number;
  name: string;
  university: string;
  major: string;
  project: string;
  image: string;
  rating: number;
  testimonial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmad Rizki Pratama',
    university: 'Universitas Indonesia',
    major: 'Teknik Informatika',
    project: 'Sistem Informasi Perpustakaan',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Skripsipro sangat membantu saya dalam menyelesaikan tugas akhir. Aplikasi yang dibuat sesuai dengan kebutuhan dan dokumentasi sangat lengkap. Tim developer sangat responsif dan profesional.'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    university: 'Institut Teknologi Bandung',
    major: 'Sistem Informasi',
    project: 'Aplikasi E-Learning Mobile',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Aplikasi mobile yang dikembangkan Skripsipro memiliki performa yang excellent. Proses pengerjaan tepat waktu dan hasil akhir melebihi ekspektasi. Sangat direkomendasikan!'
  },
  {
    id: 3,
    name: 'Budi Santoso',
    university: 'Universitas Gadjah Mada',
    major: 'Teknik Komputer',
    project: 'Sistem Inventory Desktop',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Pelayanan yang sangat baik dari konsultasi awal hingga selesai. Aplikasi desktop yang dibuat sangat user-friendly dan sesuai dengan requirements tugas akhir saya.'
  },
  {
    id: 4,
    name: 'Maya Dewi Sari',
    university: 'Universitas Brawijaya',
    major: 'Informatika',
    project: 'Portal Berita Kampus',
    image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Website yang dikembangkan sangat profesional dengan fitur-fitur yang lengkap. Proses revisi sangat mudah dan tim sangat sabar dalam memberikan penjelasan.'
  },
  {
    id: 5,
    name: 'Rizky Firmansyah',
    university: 'Universitas Diponegoro',
    major: 'Teknik Informatika',
    project: 'Aplikasi Kasir Mobile',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Skripsipro benar-benar memahami kebutuhan mahasiswa. Aplikasi yang dibuat tidak hanya berfungsi dengan baik, tapi juga mudah untuk dipresentasikan ke dosen pembimbing.'
  },
  {
    id: 6,
    name: 'Indah Permatasari',
    university: 'Universitas Airlangga',
    major: 'Sistem Informasi',
    project: 'Sistem Absensi Online',
    image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    testimonial: 'Harga yang terjangkau untuk mahasiswa dengan kualitas yang sangat memuaskan. Dokumentasi teknis yang diberikan sangat membantu saat sidang tugas akhir.'
  }
];
