'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/" className="text-xl font-bold gradient-text">
            DevPage
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
            <button className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}