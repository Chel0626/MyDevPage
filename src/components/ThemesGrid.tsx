'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { getAllCategories, getArticlesByCategory, type Category } from '@/data/articles';

interface ThemeCardProps {
  category: Category;
  articleCount: number;
  index: number;
}

function ThemeCard({ category, articleCount, index }: ThemeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-card-bg border border-gray-800 rounded-lg overflow-hidden card-hover group"
    >
      <div className="p-8">
        <div className="text-6xl mb-4 text-center">{category.icon}</div>
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors text-center">
          {category.title}
        </h3>

        <p className="text-gray-300 mb-6 text-center line-clamp-3">
          {category.description}
        </p>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center text-sm text-gray-400">
            <BookOpen size={16} className="mr-2" />
            {articleCount} {articleCount === 1 ? 'artigo' : 'artigos'}
          </div>
        </div>

        <div className="text-center">
          <Link
            href={`/artigos/tema/${category.slug}`}
            className="inline-block bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 px-6 py-2 rounded-lg font-semibold neon-glow hover:shadow-lg transform hover:scale-105"
          >
            Explorar Tema →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ThemesGrid() {
  const categories = getAllCategories();

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const articleCount = getArticlesByCategory(category.slug).length;
            return (
              <ThemeCard 
                key={category.slug} 
                category={category} 
                articleCount={articleCount}
                index={index} 
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}