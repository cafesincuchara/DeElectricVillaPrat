import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-electrical.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-white font-semibold">ElectroServicios Profesionales</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-4">
            Tu Seguridad Eléctrica
            <span className="block text-accent mt-2">En Buenas Manos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-medium px-4">
            Servicios eléctricos profesionales en Villa Prat. Instalaciones, reparaciones y mantenimiento con certificación SEC.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-accent text-safety-dark hover:bg-accent/90 font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all group"
            >
              Solicita tu Presupuesto Gratis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm font-semibold text-lg px-8 py-6"
            >
              Contactar por WhatsApp
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">+10</div>
              <div className="text-white/80 text-xs sm:text-sm">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">100%</div>
              <div className="text-white/80 text-xs sm:text-sm">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-1 sm:mb-2">SEC</div>
              <div className="text-white/80 text-xs sm:text-sm">Certificación Oficial</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
