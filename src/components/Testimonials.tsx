import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      location: "Villa Prat",
      rating: 5,
      text: "Excelente servicio. Daniel hizo la instalación eléctrica completa de mi casa. Muy profesional, puntual y el trabajo quedó impecable. 100% recomendado.",
      service: "Instalación Residencial"
    },
    {
      name: "Carlos Muñoz",
      location: "Curicó",
      rating: 5,
      text: "Necesitaba certificación SEC urgente y Daniel lo resolvió rápido y sin complicaciones. Conoce muy bien las normativas y es muy transparente con los costos.",
      service: "Certificación SEC"
    },
    {
      name: "Patricia Silva",
      location: "Villa Prat",
      rating: 5,
      text: "Contraté a Daniel para cambiar toda la iluminación a LED en mi negocio. El ahorro de energía ha sido notable y la calidad de luz es mucho mejor. Muy contenta.",
      service: "Iluminación LED"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`w-4 h-4 ${index < rating ? 'fill-accent text-accent' : 'text-muted-foreground/30'}`}
      />
    ));
  };

  return (
    <section id="testimonios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
              Lo Que Dicen <span className="text-primary">Nuestros Clientes</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              La confianza de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="relative hover:shadow-glow transition-all duration-300 hover:-translate-y-2 border-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10">
                    <Quote className="w-16 h-16 text-primary" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Text */}
                  <p className="text-foreground mb-6 leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>

                  {/* Service Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 to-accent/10 px-8 py-4 rounded-full border border-primary/20">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold border-2 border-background"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-bold text-foreground">+50 Clientes Satisfechos</p>
                <p className="text-sm text-muted-foreground">En Villa Prat y Curicó</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
