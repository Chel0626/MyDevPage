'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { type Article } from '@/data/articles';

interface ArticleCardProps {
  article: Article;
  index: number;
}

function ArticleCard({ article, index }: ArticleCardProps) {
  const tagColors = {
    'Design Patterns': 'bg-neon-blue/20 text-neon-blue border-neon-blue',
    'Programação': 'bg-blue-500/20 text-blue-400 border-blue-400',
    'Arquitetura': 'bg-neon-purple/20 text-neon-purple border-neon-purple',
    'Engenharia de Software': 'bg-neon-green/20 text-neon-green border-neon-green',
    'Requisitos': 'bg-orange-500/20 text-orange-400 border-orange-400',
    'Gestão de Projetos': 'bg-red-500/20 text-red-400 border-red-400',
    'AWS': 'bg-orange-500/20 text-orange-400 border-orange-400',
    'Cloud Computing': 'bg-cyan-500/20 text-cyan-400 border-cyan-400',
    'Fundamentos': 'bg-green-500/20 text-green-400 border-green-400',
    'Next.js': 'bg-neon-blue/20 text-neon-blue border-neon-blue',
    'React': 'bg-blue-500/20 text-blue-400 border-blue-400',
    'TypeScript': 'bg-neon-purple/20 text-neon-purple border-neon-purple',
    'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-400',
    'Python': 'bg-neon-green/20 text-neon-green border-neon-green',
    'DevOps': 'bg-red-500/20 text-red-400 border-red-400',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card-bg border border-gray-800 rounded-lg overflow-hidden card-hover group"
    >
      {article.image && (
        <div className="h-48 bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}>
          <div className="h-full bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-400 mb-3">
          <Calendar size={16} className="mr-2" />
          {article.date}
          <Clock size={16} className="ml-4 mr-2" />
          {article.readTime}
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors">
          {article.title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3">
          {article.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 text-xs border rounded-full ${
                tagColors[tag as keyof typeof tagColors] || 'bg-gray-700 text-gray-300 border-gray-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/artigos/${article.slug}`}
          className="text-neon-blue hover:text-white transition-colors font-semibold"
        >
          Ler mais →
        </Link>
      </div>
    </motion.div>
  );
}

interface ArticlesGridProps {
  articles?: Article[];
  title?: string;
  showAll?: boolean;
}

export default function ArticlesGrid({ 
  articles, 
  title = "Artigos Recentes", 
  showAll = false
}: ArticlesGridProps) {
  const displayedArticles = showAll ? (articles || []) : (articles || []).slice(0, 6);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 gradient-text"
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>

        {!showAll && (articles || []).length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/artigos"
              className="inline-block bg-transparent border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 px-8 py-3 rounded-lg font-semibold neon-glow hover:shadow-lg transform hover:scale-105"
            >
              Ver Mais Artigos
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}