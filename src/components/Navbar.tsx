'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold gradient-text">
            My_DevPage
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-white transition-colors hover:text-shadow-neon"
            >
              Home
            </Link>
            <Link 
              href="/artigos" 
              className="text-gray-300 hover:text-white transition-colors hover:text-shadow-neon"
            >
              Artigos
            </Link>
            <Link 
              href="/sobre" 
              className="text-gray-300 hover:text-white transition-colors hover:text-shadow-neon"
            >
              Sobre Mim
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Chel0626" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon-blue transition-colors p-2"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/michelhm/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-neon-blue transition-colors p-2"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:mhmservicos91@gmail.com"
              className="text-gray-300 hover:text-neon-blue transition-colors p-2"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800 mobile-menu-enter">
            <div className="px-4 py-4 space-y-4">
              {/* Navigation Links */}
              <Link 
                href="/" 
                onClick={closeMenu}
                className="block text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800/50"
              >
                Home
              </Link>
              <Link 
                href="/artigos" 
                onClick={closeMenu}
                className="block text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800/50"
              >
                Artigos
              </Link>
              <Link 
                href="/sobre" 
                onClick={closeMenu}
                className="block text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800/50"
              >
                Sobre Mim
              </Link>
              
              {/* Social Links */}
              <div className="flex space-x-6 pt-4 justify-center">
                <a 
                  href="https://github.com/Chel0626" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-blue transition-colors"
                  onClick={closeMenu}
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/michelhm/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-blue transition-colors"
                  onClick={closeMenu}
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:mhmservicos91@gmail.com"
                  className="text-gray-300 hover:text-neon-blue transition-colors"
                  onClick={closeMenu}
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}