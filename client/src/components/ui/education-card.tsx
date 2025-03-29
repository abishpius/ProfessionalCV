import { Education } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

interface EducationCardProps {
  education: Education;
  delay?: number;
}

const EducationCard = ({ education, delay = 0 }: EducationCardProps) => {
  return (
    <Card 
      className="animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-gold mr-4">
            <GraduationCap size={24} />
          </div>
          <div>
            <h3 className="text-xl font-sans font-semibold text-primary">{education.degree}</h3>
            <p className="text-gray-600">{education.field}</p>
          </div>
        </div>
        <div className="pl-20">
          <p className="font-medium">{education.institution}</p>
          <p className="text-gold font-medium mb-2">{education.period}</p>
          <p className="text-sm">{education.description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
