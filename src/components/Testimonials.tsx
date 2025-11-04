import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni Mahasiswa</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dengarkan pengalaman mahasiswa yang telah berhasil menyelesaikan tugas akhir dengan bantuan Skripsipro
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200 p-6 border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.major}</p>
                  <p className="text-gray-500 text-sm">{testimonial.university}</p>
                  <div className="flex space-x-1 mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                <p className="text-gray-600 leading-relaxed pl-6">
                  "{testimonial.testimonial}"
                </p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-blue-700">
                  Proyek: {testimonial.project}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Bergabunglah dengan 500+ Mahasiswa yang Telah Sukses
            </h3>
            <p className="text-gray-600 mb-6">
              Jangan biarkan tugas akhir menjadi penghalang kesuksesan Anda. Tim ahli kami siap membantu mewujudkan aplikasi impian Anda.
            </p>
            <button 
              onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
            >
              Mulai Proyek Anda Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}