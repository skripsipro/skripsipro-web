import React from 'react';
import { Globe, Smartphone, Monitor, Database, Users, CheckCircle, UserCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Aplikasi Web',
      description: 'Pengembangan aplikasi web modern menggunakan teknologi terkini seperti React, Node.js, dan database terpercaya.',
      features: ['Responsive Design', 'Database Integration', 'Authentication System', 'Admin Dashboard'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Smartphone,
      title: 'Aplikasi Mobile',
      description: 'Pembuatan aplikasi mobile native dan hybrid untuk Android dan iOS dengan performa optimal.',
      features: ['Cross-platform', 'Native Performance', 'Push Notifications', 'Offline Support'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: Monitor,
      title: 'Aplikasi Desktop',
      description: 'Aplikasi desktop dengan interface yang user-friendly untuk Windows, macOS, dan Linux.',
      features: ['Cross-platform', 'Modern UI/UX', 'File Management', 'System Integration'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Database,
      title: 'Sistem Informasi',
      description: 'Sistem informasi terintegrasi untuk mengelola data dan proses bisnis dengan efisien.',
      features: ['Data Management', 'Reporting System', 'User Roles', 'API Integration'],
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Konsultasi Tugas Akhir',
      description: 'Konsultasi lengkap mulai dari perencanaan, development, hingga dokumentasi tugas akhir.',
      features: ['Project Planning', 'Technical Guidance', 'Documentation', 'Presentation Prep'],
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: UserCheck,
      title: 'Privat Koding One on One',
      description: 'Bimbingan coding personal dengan mentor berpengalaman untuk meningkatkan skill programming Anda.',
      features: ['Personal Mentor', 'Flexible Schedule', 'Custom Learning Path', 'Real Project Practice'],
      gradient: 'from-teal-500 to-cyan-600'
    }
  ];

  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami menawarkan berbagai layanan pengembangan aplikasi yang disesuaikan dengan kebutuhan tugas akhir Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-200">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-200 overflow-hidden">
                <div className={`bg-gradient-to-br ${service.gradient} p-8`}>
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.slice(3).map((service, index) => (
            <div key={index} className="group hover:scale-105 transition-transform duration-200">
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-200 overflow-hidden">
                <div className={`bg-gradient-to-br ${service.gradient} p-8`}>
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="h-8 w-8 text-gray-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}