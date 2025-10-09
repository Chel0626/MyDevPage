'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, FileText } from 'lucide-react';

interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  content: string;
}

interface Theme {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  articles: Article[];
}

interface ThemeCardProps {
  theme: Theme;
  index: number;
}

function ThemeCard({ theme, index }: ThemeCardProps) {
  const articleCount = theme.articles.length;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card-bg border border-gray-800 rounded-lg overflow-hidden card-hover group relative"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 ${theme.bgColor} opacity-10`}></div>
      
      <div className="relative p-6">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{theme.icon}</div>
          <div>
            <h3 className={`text-2xl font-bold ${theme.color} group-hover:text-white transition-colors`}>
              {theme.name}
            </h3>
            <div className="flex items-center text-sm text-gray-400 mt-1">
              <FileText size={14} className="mr-1" />
              {articleCount} {articleCount === 1 ? 'artigo' : 'artigos'}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          {theme.description}
        </p>

        {/* Stats and Action */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-400">
            <BookOpen size={16} className="mr-2" />
            {articleCount > 0 ? 'Disponível' : 'Em breve'}
          </div>
          
          {articleCount > 0 ? (
            <Link
              href={`/artigos/tema/${theme.id}`}
              className={`${theme.color} hover:text-white transition-colors font-semibold text-sm flex items-center`}
            >
              Explorar →
            </Link>
          ) : (
            <span className="text-gray-500 text-sm font-semibold">
              Em desenvolvimento
            </span>
          )}
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className={`absolute inset-0 border-2 ${theme.color.replace('text-', 'border-')} opacity-0 group-hover:opacity-50 rounded-lg transition-opacity pointer-events-none`}></div>
    </motion.div>
  );
}

interface ThemesGridProps {
  themes: Theme[];
  title?: string;
}

export default function ThemesGrid({ themes, title = "Temas de Estudo" }: ThemesGridProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4 gradient-text"
        >
          {title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-400 text-center mb-12 max-w-2xl mx-auto"
        >
          Explore diferentes áreas do conhecimento em tecnologia, organizadas por temas para facilitar seu aprendizado.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {themes.map((theme, index) => (
            <ThemeCard key={theme.id} theme={theme} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}