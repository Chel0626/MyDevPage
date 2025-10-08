import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-4">My_DevPage</h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Um espaço dedicado ao compartilhamento de conhecimento e experiências 
              no universo do desenvolvimento de software.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Chel0626" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/michelhm/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:mhmservicos91@gmail.com"
                className="text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/artigos" className="text-gray-400 hover:text-white transition-colors">
                  Artigos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Mim
                </Link>
              </li>
            </ul>
          </div>

          {/* Categorias */}
          <div>
            <h4 className="text-white font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  JavaScript
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  React/Next.js
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Python
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  DevOps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center">
            Feito com 
            <Heart size={16} className="text-red-500 mx-2" />
            e muito café ☕ em 2024
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2024 DevPage. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}