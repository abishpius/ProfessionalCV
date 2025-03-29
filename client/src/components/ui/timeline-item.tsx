import { Experience } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';

interface TimelineItemProps {
  experience: Experience;
  isLast: boolean;
  delay?: number;
}

const TimelineItem = ({ experience, isLast, delay = 0 }: TimelineItemProps) => {
  return (
    <div 
      className={`relative pl-8 sm:pl-32 mb-12 ${isLast ? 'mb-0' : ''} animate-slide-up`} 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1/2 sm:left-24"></div>
      {!isLast && (
        <div className="absolute left-0 top-6 bottom-0 w-px bg-blue-500 transform -translate-x-1/2 sm:left-24"></div>
      )}
      
      <div className="sm:ml-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row justify-between mb-4">
              <h3 className="text-xl font-sans font-semibold text-primary">{experience.title}</h3>
              <div className="text-sm text-gray-600 mt-1 sm:mt-0">{experience.period}</div>
            </div>
            <h4 className="text-lg font-medium mb-2">{experience.company}, {experience.location}</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TimelineItem;
