import React from 'react';
import { Code, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Beranda', id: 'beranda' },
    { name: 'Tentang Kami', id: 'tentang' },
    { name: 'Layanan', id: 'layanan' },
    { name: 'Portofolio', id: 'portofolio' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Kontak', id: 'kontak' }
  ];

  const services = [
    'Aplikasi Web',
    'Aplikasi Mobile',
    'Aplikasi Desktop',
    'Sistem Informasi',
    'Konsultasi Tugas Akhir'
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-sky-500' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-700' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'hover:text-red-600' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+62 812-3456-7890' },
    { icon: Mail, text: 'info@skripsipro.com' },
    { icon: MapPin, text: 'Jakarta, Indonesia' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Skripsipro</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Platform terpercaya untuk mahasiswa yang membutuhkan aplikasi berkualitas tinggi untuk tugas akhir, skripsi, dan tesis.
            </p>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  <info.icon className="h-4 w-4 text-blue-400" />
                  <span className="text-sm">{info.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Navigasi Cepat</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-blue-400 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Layanan Kami</h3>
            <div className="space-y-3">
              {services.map((service, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Tetap Terhubung</h3>
            <p className="text-gray-300 text-sm">
              Ikuti update terbaru tentang layanan dan tips pengembangan aplikasi untuk tugas akhir.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm font-medium">
                Berlangganan Update
              </button>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-medium text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gray-800 p-2 rounded-lg text-gray-400 ${social.color} transition-colors hover:bg-gray-700`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">500+</div>
              <div className="text-sm text-gray-400">Mahasiswa Puas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">300+</div>
              <div className="text-sm text-gray-400">Proyek Selesai</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">98%</div>
              <div className="text-sm text-gray-400">Tingkat Keberhasilan</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400 mb-1">5+</div>
              <div className="text-sm text-gray-400">Tahun Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Skripsipro. All rights reserved.
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}