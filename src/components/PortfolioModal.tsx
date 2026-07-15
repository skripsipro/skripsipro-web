import { X, ExternalLink, Monitor, Smartphone, Database, Code } from 'lucide-react';
import type { Project } from '../data/portfolio';

interface PortfolioModalProps {
  project: Project;
  onClose: () => void;
}

export default function PortfolioModal({ project, onClose }: PortfolioModalProps) {
  const getIcon = (category: string) => {
    switch (category) {
      case 'web': return Monitor;
      case 'mobile': return Smartphone;
      case 'desktop': return Database;
      default: return Code;
    }
  };

  const IconComponent = getIcon(project.category);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
            loading="lazy"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            aria-label="Tutup"
          >
            <X className="h-5 w-5 text-gray-700" />
          </button>
          <div className="absolute top-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
              <IconComponent className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-medium text-gray-700">{project.type}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-blue-700 font-medium mb-4">{project.university}</p>
          
          {project.detailDescription && (
            <p className="text-gray-600 leading-relaxed mb-6">{project.detailDescription}</p>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Teknologi yang Digunakan</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <span className="text-sm text-gray-500">Kategori: {project.type}</span>
            <button 
              onClick={onClose}
              className="flex items-center space-x-2 bg-blue-700 text-white px-6 py-2.5 rounded-lg hover:bg-blue-800 transition-colors font-medium"
            >
              <span>Tutup</span>
              <ExternalLink className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
