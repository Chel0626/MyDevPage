import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main className="pt-24">
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
}