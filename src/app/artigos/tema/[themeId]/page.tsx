import { notFound } from 'next/navigation';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import ArticlesGrid from '@/components/ArticlesGrid';
import Footer from '@/components/Footer';
import { getThemeById, getAllThemes, getArticlesByTheme } from '@/data/articles';

interface CategoryPageProps {
  params: {
    themeId: string;
  };
}

export async function generateStaticParams() {
  const categories = getAllThemes();
  
  return categories.map((category) => ({
    themeId: category.id,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { themeId } = await params;
  const category = getThemeById(themeId);

  if (!category) {
    notFound();
  }

  const categoryArticles = getArticlesByTheme(category.id);

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">{category.icon}</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              {category.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {category.description}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center text-neon-blue">
                <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                {categoryArticles.length} {categoryArticles.length === 1 ? 'artigo' : 'artigos'}
              </div>
            </div>
          </div>
        </div>
        
        {categoryArticles.length > 0 ? (
          <ArticlesGrid articles={categoryArticles} title="" showAll={true} />
        ) : (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl font-bold text-gray-300 mb-4">
              Conteúdo em Desenvolvimento
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Estamos preparando conteúdo incrível sobre {category.name}. 
              Em breve você encontrará artigos detalhados e guias práticos sobre este tema.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}