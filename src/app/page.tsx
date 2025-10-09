import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
}
