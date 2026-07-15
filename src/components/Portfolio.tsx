import { useState } from 'react';
import { ExternalLink, Code, Smartphone, Monitor, Database, ArrowRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import PortfolioModal from './PortfolioModal';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('semua');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'semua', label: 'Semua Proyek', icon: Code },
    { id: 'web', label: 'Web App', icon: Monitor },
    { id: 'mobile', label: 'Mobile App', icon: Smartphone },
    { id: 'desktop', label: 'Desktop App', icon: Database }
  ];

  const filteredProjects = selectedCategory === 'semua'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const getIcon = (category: string) => {
    switch (category) {
      case 'web': return Monitor;
      case 'mobile': return Smartphone;
      case 'desktop': return Database;
      default: return Code;
    }
  };

  return (
    <section id="portofolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Portofolio Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lihat berbagai proyek aplikasi yang telah kami kembangkan untuk membantu mahasiswa menyelesaikan tugas akhir mereka
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-700 shadow-md'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid - Tampilkan maksimal 6 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project) => {
            const IconComponent = getIcon(project.category);
            return (
              <div key={project.id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                      <IconComponent className="h-4 w-4 text-blue-700" />
                      <span className="text-sm font-medium text-gray-700">{project.type}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-blue-700 mb-2">Teknologi:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center space-x-1 text-blue-700 hover:text-blue-800 font-medium"
                    >
                      <span className="text-sm">Lihat Detail</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Modal */}
        {selectedProject && (
          <PortfolioModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}

        <div className="text-center mt-12">
          {filteredProjects.length >= 6 && (
            <a
              href="/portofolio"
              className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold inline-flex items-center space-x-2 group"
            >
              <span>Lihat Semua Portfolio</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
