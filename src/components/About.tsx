import React from 'react';
import { Users, Award, Clock, Target } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Users,
      title: 'Tim Berpengalaman',
      description: 'Developer profesional dengan pengalaman 5+ tahun dalam pengembangan aplikasi'
    },
    {
      icon: Award,
      title: 'Kualitas Terjamin',
      description: 'Aplikasi berkualitas tinggi dengan standar industri dan dokumentasi lengkap'
    },
    {
      icon: Clock,
      title: 'Tepat Waktu',
      description: 'Komitmen penuh untuk menyelesaikan proyek sesuai deadline yang disepakati'
    },
    {
      icon: Target,
      title: 'Fokus Hasil',
      description: 'Memastikan aplikasi sesuai kebutuhan tugas akhir dan mudah dipresentasikan'
    }
  ];

  return (
    <section id="tentang" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Skripsipro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skripsipro adalah platform terpercaya yang mengkhususkan diri dalam pembuatan aplikasi untuk tugas akhir mahasiswa. 
            Kami memahami tantangan yang dihadapi mahasiswa dalam mengembangkan aplikasi untuk skripsi atau tesis mereka.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Misi Kami</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Membantu mahasiswa Indonesia menyelesaikan tugas akhir dengan aplikasi berkualitas tinggi yang sesuai 
              dengan kebutuhan akademis dan standar industri. Kami berkomitmen untuk memberikan solusi teknologi yang 
              inovatif dan mudah dipahami.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                "Lebih dari 500+ mahasiswa telah mempercayai Skripsipro untuk mengembangkan aplikasi tugas akhir mereka."
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tim developer bekerja"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}