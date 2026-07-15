import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {

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
                  loading="lazy"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-blue-600 font-medium">{testimonial.major}</p>
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