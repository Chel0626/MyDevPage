import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import ThemesGrid from '@/components/ThemesGrid';
import Footer from '@/components/Footer';

export default function ArtigosPage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main className="pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
              Temas dos Artigos
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore o conteúdo organizado por temas específicos
            </p>
          </div>
        </div>
        
        <ThemesGrid />
      </main>
      
      <Footer />
    </div>
  );
}