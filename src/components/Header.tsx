import React, { useState } from 'react';
import { Menu, X, Code, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-700" />
            <span className="text-2xl font-bold text-gray-900">Skripsipro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('beranda')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Beranda
            </button>
            <button onClick={() => scrollToSection('tentang')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Tentang Kami
            </button>
            <button onClick={() => scrollToSection('layanan')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Layanan
            </button>
            <button onClick={() => scrollToSection('portofolio')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Portofolio
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection('kontak')} className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Kontak
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('beranda')} className="text-left text-gray-700 hover:text-blue-700 font-medium">
                Beranda
              </button>
              <button onClick={() => scrollToSection('tentang')} className="text-left text-gray-700 hover:text-blue-700 font-medium">
                Tentang Kami
              </button>
              <button onClick={() => scrollToSection('layanan')} className="text-left text-gray-700 hover:text-blue-700 font-medium">
                Layanan
              </button>
              <button onClick={() => scrollToSection('portofolio')} className="text-left text-gray-700 hover:text-blue-700 font-medium">
                Portofolio
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-700 hover:text-blue-700 font-medium">
                FAQ
              </button>
              <button onClick={() => scrollToSection('kontak')} className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors w-fit">
                Kontak
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}