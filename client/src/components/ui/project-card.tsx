import { Project } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Bot, LineChart, Heart } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  // Map icon string to Lucide component
  const IconComponent = () => {
    switch (project.icon) {
      case 'robot':
        return <Bot size={48} />;
      case 'chart-line':
        return <LineChart size={48} />;
      case 'heartbeat':
        return <Heart size={48} />;
      default:
        return <Bot size={48} />;
    }
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-48 bg-blue-300 flex items-center justify-center">
        <div className="text-white">
          <IconComponent />
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-sans font-semibold mb-2 text-primary">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-blue-100 text-primary text-xs rounded">
              {tech}
            </span>
          ))}
        </div>
        <a href="#" className="text-primary hover:text-blue-600 transition-colors font-medium inline-flex items-center">
          <span>Read more</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
