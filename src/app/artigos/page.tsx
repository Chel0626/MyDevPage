import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import ArticlesGrid from '@/components/ArticlesGrid';
import ThemesGrid from '@/components/ThemesGrid';
import Footer from '@/components/Footer';
import { getAllArticles, getAllThemes } from '@/data/articles';

export default function ArtigosPage() {
  const themes = getAllThemes();
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Centro de Conhecimento
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore conteúdos organizados por temas para facilitar seu aprendizado
            </p>
          </div>
        </div>
        
        <ThemesGrid themes={themes} />
        
        {articles.length > 0 && (
          <ArticlesGrid articles={articles} title="Artigos Recentes" showAll={false} />
        )}
      </main>
      
      <Footer />
    </div>
  );
}