import { Zap, Lightbulb, Wrench, Shield, FileCheck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Instalaciones Eléctricas",
      description: "Instalaciones completas para hogares y negocios. Diseño, planificación y ejecución de sistemas eléctricos seguros y eficientes.",
      features: ["Casas nuevas", "Ampliaciones", "Remodelaciones"]
    },
    {
      icon: Lightbulb,
      title: "Iluminación LED",
      description: "Moderniza tu iluminación con tecnología LED. Ahorro energético, mayor durabilidad y mejor calidad de luz.",
      features: ["Residencial", "Comercial", "Exterior"]
    },
    {
      icon: Wrench,
      title: "Mantenimiento",
      description: "Mantenimiento preventivo y correctivo de instalaciones eléctricas. Evita problemas antes de que ocurran.",
      features: ["Inspecciones", "Reparaciones", "Optimización"]
    },
    {
      icon: Shield,
      title: "Tableros Eléctricos",
      description: "Instalación y actualización de tableros eléctricos. Protección y distribución segura de la energía.",
      features: ["Residenciales", "Comerciales", "Industriales"]
    },
    {
      icon: FileCheck,
      title: "Certificaciones SEC",
      description: "Tramitación y obtención de certificaciones SEC para tus instalaciones. Cumple con todas las normativas vigentes.",
      features: ["Asesoría", "Documentación", "Gestión completa"]
    },
    {
      icon: Sparkles,
      title: "Reparaciones Urgentes",
      description: "Servicio de emergencias eléctricas. Soluciones rápidas y efectivas cuando más lo necesitas.",
      features: ["24/7 disponible", "Respuesta rápida", "Servicio confiable"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
              Nuestros <span className="text-primary">Servicios</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Soluciones eléctricas completas para todas tus necesidades
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-glow">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center animate-fade-in">
            <p className="text-lg text-muted-foreground mb-4">
              ¿No encuentras el servicio que necesitas?
            </p>
            <a 
              href="#contacto" 
              className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors underline"
            >
              Contáctanos y cuéntanos tu proyecto →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
