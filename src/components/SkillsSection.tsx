import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Figma, 
  Code, 
  Database, 
  BarChart3, 
  Globe,
  Brush,
  Layers
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Design Tools",
      icon: Palette,
      skills: ["Adobe Illustrator", "Photoshop", "Figma", "Canva", "Procreate"],
      color: "from-accent to-peach"
    },
    {
      title: "Design Specialties",
      icon: Brush,
      skills: ["UI/UX Layouts", "Branding", "Icon Design", "Visual Identity"],
      color: "from-primary to-sky"
    },
    {
      title: "Development",
      icon: Code,
      skills: ["HTML", "CSS", "C++", "React", "TypeScript"],
      color: "from-secondary to-mint-light"
    },
    {
      title: "Analytics & Tools",
      icon: BarChart3,
      skills: ["Power BI", "Excel", "Google Analytics", "WordPress"],
      color: "from-coral to-accent"
    },
  ];

  return (
    <section className="section-padding section-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning creative design, technical development, 
            and analytical thinking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index} 
                className={`floating-card glass-card border-0 slide-up stagger-${index + 1}`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="text-sm py-1 px-3"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;