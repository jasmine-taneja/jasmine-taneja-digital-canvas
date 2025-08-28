import ProjectCard from "./ProjectCard";
import creativeDesigns from "@/assets/creative-designs.jpg";
import stitchTheory from "@/assets/stitch-theory.jpg";
import kodomoAI from "@/assets/kodomo-ai.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Creative Designs Portfolio",
      description: "Designed product mockups, tote bags, phone covers, and logos showcasing strong brand identity. Focus on modern aesthetics and visual storytelling.",
      image: creativeDesigns,
      tools: ["Illustrator", "Photoshop", "Canva", "Figma"],
      category: "Design",
    },
    {
      title: "Stitch Theory",
      description: "UI/UX design and custom illustrations for an online e-commerce store featuring modern minimal aesthetic and seamless user experience.",
      image: stitchTheory,
      tools: ["Figma", "Frontend Dev", "UI/UX"],
      category: "E-commerce",
      link: "#",
    },
    {
      title: "Kodomo (AI EdTech)",
      description: "AI-powered web application using Gemini AI to generate educational memes, focusing on storytelling and student engagement through interactive learning.",
      image: kodomoAI,
      tools: ["React", "Gemini AI", "Figma", "TypeScript"],
      category: "AI/EdTech",
      github: "#",
      link: "#",
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-background to-lavender-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of creative design solutions and technical implementations 
            that blend aesthetics with functionality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`slide-up stagger-${index + 1}`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;