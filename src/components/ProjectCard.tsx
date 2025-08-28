import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tools: string[];
  category: string;
  link?: string;
  github?: string;
}

const ProjectCard = ({ title, description, image, tools, category, link, github }: ProjectCardProps) => {
  return (
    <Card className="floating-card glass-card border-0 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Project Links */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
          {link && (
            <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer">
              <ExternalLink className="h-4 w-4 text-white" />
            </div>
          )}
          {github && (
            <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors cursor-pointer">
              <Github className="h-4 w-4 text-white" />
            </div>
          )}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tool}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;