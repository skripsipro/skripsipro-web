import { CheckCircle } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
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