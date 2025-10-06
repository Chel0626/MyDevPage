import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getArticleBySlug, getAllArticles } from '@/data/articles';

interface Props {
  params: { slug: string };
}

export default async function ArtigoPage({ params }: Props) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const tagColors = {
    'Next.js': 'bg-neon-blue/20 text-neon-blue border-neon-blue',
    'React': 'bg-blue-500/20 text-blue-400 border-blue-400',
    'TypeScript': 'bg-neon-purple/20 text-neon-purple border-neon-purple',
    'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-400',
    'Python': 'bg-neon-green/20 text-neon-green border-neon-green',
    'AWS': 'bg-orange-500/20 text-orange-400 border-orange-400',
    'DevOps': 'bg-red-500/20 text-red-400 border-red-400',
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              href="/artigos" 
              className="inline-flex items-center text-neon-blue hover:text-white transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Voltar aos artigos
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text neon-text">
              {article.title}
            </h1>

            <div className="flex items-center text-sm text-gray-400 mb-6">
              <Calendar size={16} className="mr-2" />
              {article.date}
              <Clock size={16} className="ml-6 mr-2" />
              {article.readTime}
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-4 py-2 text-sm border rounded-full font-medium ${
                    tagColors[tag as keyof typeof tagColors] || 'bg-gray-700 text-gray-300 border-gray-600'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xl text-gray-300 leading-relaxed">
              {article.description}
            </p>
          </header>

          {/* Article Content */}
          <article className="bg-gray-900/30 border border-gray-800 rounded-lg p-8">
            <MarkdownRenderer content={article.content} />
          </article>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-gray-800">
            <Link 
              href="/artigos"
              className="bg-transparent border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300 px-6 py-3 rounded-lg font-semibold neon-glow"
            >
              ← Todos os artigos
            </Link>
            
            <div className="text-center">
              <p className="text-gray-400 mb-2">Gostou do artigo?</p>
              <div className="flex space-x-4">
                <a 
                  href="https://twitter.com/intent/tweet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neon-blue hover:text-white transition-colors"
                >
                  Compartilhar
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// Generate static paths for all articles
export function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}