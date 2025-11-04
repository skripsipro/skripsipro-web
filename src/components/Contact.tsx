import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    university: '',
    deadline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        university: '',
        deadline: '',
        message: ''
      });
    }, 3000);
  };

  const projectTypes = [
    'Aplikasi Web',
    'Aplikasi Mobile (Android)',
    'Aplikasi Mobile (iOS)',
    'Aplikasi Desktop',
    'Sistem Informasi',
    'E-Commerce',
    'Konsultasi Tugas Akhir',
    'Lainnya'
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Telepon / WhatsApp',
      value: '+62 812-3456-7890',
      description: 'Respons cepat dalam 1 jam',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@skripsipro.com',
      description: 'Respons dalam 24 jam',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'Konsultasi Online',
      value: 'Zoom / Google Meet',
      description: 'Jadwal konsultasi gratis',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Siap membantu mewujudkan aplikasi untuk tugas akhir Anda. Konsultasi gratis dan tanpa komitmen!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cara Menghubungi Kami</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="group">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-100">
                      <div className={`bg-gradient-to-r ${method.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                        <method.icon className="h-6 w-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg mb-2">{method.title}</h4>
                      <p className="text-blue-600 font-semibold mb-1">{method.value}</p>
                      <p className="text-gray-500 text-sm">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
                <h4 className="font-bold text-gray-900">Jam Operasional</h4>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>Senin - Jumat: 08:00 - 20:00</p>
                <p>Sabtu - Minggu: 09:00 - 17:00</p>
                <p className="text-sm text-blue-600 font-medium">*Respons WhatsApp 24/7</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mulai Proyek Anda</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-10 w-10 text-green-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-green-600 mb-2">Pesan Terkirim!</h4>
                  <p className="text-gray-600">
                    Terima kasih atas kepercayaan Anda. Tim kami akan menghubungi dalam 1-2 jam kerja.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nama Lengkap *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Masukkan nama lengkap Anda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="nama@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Nomor WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="08123456789"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                        Jenis Aplikasi *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Pilih jenis aplikasi</option>
                        {projectTypes.map((type, index) => (
                          <option key={index} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
                        Universitas
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Nama universitas Anda"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-2">
                        Target Deadline
                      </label>
                      <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        value={formData.deadline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Deskripsi Proyek *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                      placeholder="Jelaskan detail aplikasi yang Anda butuhkan, fitur-fitur yang diinginkan, dan requirements lainnya..."
                    ></textarea>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Catatan:</strong> Konsultasi awal gratis untuk semua mahasiswa. 
                      Kami akan memberikan estimasi waktu dan biaya yang akurat setelah diskusi detail.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 text-white py-4 px-8 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg flex items-center justify-center space-x-2 group"
                  >
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Kirim Pesan & Mulai Konsultasi</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl font-bold mb-2">500+</h4>
              <p className="text-blue-100">Mahasiswa Puas</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">98%</h4>
              <p className="text-blue-100">Tingkat Keberhasilan</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">24 Jam</h4>
              <p className="text-blue-100">Respons WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}