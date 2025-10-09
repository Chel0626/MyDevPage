import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ArticlesGrid from '@/components/ArticlesGrid';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { getAllArticles } from '@/data/articles';

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <ArticlesGrid articles={articles} title="Artigos em Destaque" />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
}
