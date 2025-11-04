import React from 'react';
import { ArrowRight, Code, Smartphone, Monitor, Database } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('kontak');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Jasa Pembuatan
                <span className="text-blue-300 block">Aplikasi untuk</span>
                <span className="text-yellow-400">Tugas Akhir</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Solusi terpercaya untuk mahasiswa yang membutuhkan aplikasi berkualitas tinggi untuk tugas akhir, skripsi, dan tesis.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Mulai Proyek Anda</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => document.getElementById('layanan')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
              >
                Lihat Layanan
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="text-center">
                <Code className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Web Apps</p>
              </div>
              <div className="text-center">
                <Smartphone className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Mobile Apps</p>
              </div>
              <div className="text-center">
                <Monitor className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Desktop Apps</p>
              </div>
              <div className="text-center">
                <Database className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <p className="text-sm font-medium">Sistem Informasi</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="space-y-4">
                <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                <div className="h-4 bg-blue-300 rounded w-1/2"></div>
                <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg"></div>
                <div className="flex space-x-2">
                  <div className="h-8 bg-yellow-400 rounded flex-1"></div>
                  <div className="h-8 bg-blue-300 rounded w-16"></div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 rounded-xl shadow-lg p-6 transform -rotate-6">
              <Code className="h-8 w-8 text-blue-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}