import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Berapa lama waktu pengerjaan aplikasi untuk tugas akhir?',
      answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas aplikasi. Umumnya: Aplikasi web sederhana (2-3 minggu), Aplikasi mobile (3-4 minggu), Sistem informasi komprehensif (4-6 minggu). Kami selalu berkomitmen menyelesaikan tepat waktu sesuai deadline yang disepakati.'
    },
    {
      question: 'Berapa biaya untuk pembuatan aplikasi tugas akhir?',
      answer: 'Biaya disesuaikan dengan kompleksitas dan fitur aplikasi yang dibutuhkan. Rentang harga mulai dari Rp 1,5 juta untuk aplikasi sederhana hingga Rp 5 juta untuk sistem yang kompleks. Kami menyediakan paket khusus mahasiswa dengan harga terjangkau dan dapat dicicil.'
    },
    {
      question: 'Teknologi apa saja yang digunakan untuk pengembangan?',
      answer: 'Kami menggunakan teknologi terkini dan relevan dengan kebutuhan industri: Web (React, Vue.js, Laravel, Node.js), Mobile (React Native, Flutter, Android Native), Desktop (Electron, JavaFX), Database (MySQL, PostgreSQL, MongoDB), dan teknologi pendukung lainnya sesuai kebutuhan proyek.'
    },
    {
      question: 'Apakah mendapat dokumentasi dan source code lengkap?',
      answer: 'Ya, setiap proyek akan mendapatkan: Source code lengkap dengan komentar yang jelas, Dokumentasi teknis (arsitektur sistem, database design, API documentation), User manual untuk penggunaan aplikasi, Video tutorial penggunaan (jika diperlukan), dan Panduan deployment untuk hosting aplikasi.'
    },
    {
      question: 'Bagaimana proses pengerjaan dan komunikasi selama proyek?',
      answer: 'Proses pengerjaan dilakukan secara bertahap: Konsultasi kebutuhan dan planning, Pembuatan mockup/wireframe, Development dengan update progress mingguan, Testing dan quality assurance, Delivery dan training. Komunikasi dilakukan via WhatsApp, email, dan meeting online sesuai kebutuhan.'
    },
    {
      question: 'Apakah ada garansi dan dukungan setelah aplikasi selesai?',
      answer: 'Kami memberikan garansi 30 hari untuk bug fixing dan minor adjustment setelah delivery. Tersedia juga layanan maintenance dan support tambahan jika diperlukan. Kami berkomitmen memastikan aplikasi berfungsi dengan baik untuk keperluan sidang tugas akhir Anda.'
    },
    {
      question: 'Jenis aplikasi apa saja yang bisa dikembangkan?',
      answer: 'Kami dapat mengembangkan berbagai jenis aplikasi: Sistem Informasi (akademik, perpustakaan, inventory), E-commerce dan marketplace, Aplikasi mobile (Android/iOS), Portal berita dan blog, Aplikasi kasir dan POS, Sistem booking dan reservasi, Dashboard analytics, dan aplikasi custom sesuai kebutuhan tugas akhir Anda.'
    },
    {
      question: 'Bagaimana cara memulai proyek dengan Skripsipro?',
      answer: 'Sangat mudah untuk memulai: Hubungi kami melalui WhatsApp atau form kontak, Konsultasi gratis untuk membahas kebutuhan aplikasi, Kami buatkan proposal dan timeline pengerjaan, Setelah deal, lakukan pembayaran down payment 50%, Tim kami langsung mulai mengerjakan proyek Anda, Sisanya dibayar saat aplikasi selesai dan diterima.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-12 w-12 text-blue-700" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">
            Temukan jawaban untuk pertanyaan yang sering ditanyakan tentang layanan pengembangan aplikasi kami
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItem === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-700 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-6">
                  <div className="border-t pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Masih Ada Pertanyaan?</h3>
            <p className="text-blue-100 mb-6">
              Tim kami siap membantu menjawab pertanyaan spesifik tentang proyek tugas akhir Anda
            </p>
            <button 
              onClick={() => document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Hubungi Kami Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}