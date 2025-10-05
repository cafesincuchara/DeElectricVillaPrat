import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: "Instalación Residencial Completa",
      description: "Instalación eléctrica completa con iluminación LED y tablero moderno",
      category: "Residencial"
    },
    {
      image: project2,
      title: "Iluminación Comercial",
      description: "Sistema de iluminación LED para oficinas con control inteligente",
      category: "Comercial"
    },
    {
      image: project3,
      title: "Instalación Exterior",
      description: "Iluminación de seguridad y sistemas eléctricos exteriores",
      category: "Exterior"
    }
  ];

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
              Trabajos <span className="text-primary">Realizados</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Algunos de nuestros proyectos más recientes
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl mb-4 shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="aspect-square">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <span className="text-sm font-semibold bg-accent text-safety-dark px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center bg-card p-8 rounded-xl shadow-card animate-fade-in">
            <p className="text-lg text-foreground mb-2 font-semibold">
              ¿Quieres ver tu proyecto aquí?
            </p>
            <p className="text-muted-foreground">
              Contáctanos y hagamos realidad tu próxima instalación eléctrica
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
