import { notFound } from 'next/navigation';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import ArticlesGrid from '@/components/ArticlesGrid';
import Footer from '@/components/Footer';
import { getThemeById, getAllThemes } from '@/data/articles';

interface ThemePageProps {
  params: {
    themeId: string;
  };
}

export async function generateStaticParams() {
  const themes = getAllThemes();
  
  return themes.map((theme) => ({
    themeId: theme.id,
  }));
}

export default function ThemePage({ params }: ThemePageProps) {
  const theme = getThemeById(params.themeId);

  if (!theme) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4">{theme.icon}</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              {theme.name}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              {theme.description}
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className={`flex items-center ${theme.color}`}>
                <span className="w-2 h-2 rounded-full bg-current mr-2"></span>
                {theme.articles.length} {theme.articles.length === 1 ? 'artigo' : 'artigos'}
              </div>
            </div>
          </div>
        </div>
        
        {theme.articles.length > 0 ? (
          <ArticlesGrid articles={theme.articles} title="" showAll={true} />
        ) : (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="text-6xl mb-6">🚧</div>
            <h2 className="text-2xl font-bold text-gray-300 mb-4">
              Conteúdo em Desenvolvimento
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Estamos preparando conteúdo incrível sobre {theme.name}. 
              Em breve você encontrará artigos detalhados e guias práticos sobre este tema.
            </p>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}