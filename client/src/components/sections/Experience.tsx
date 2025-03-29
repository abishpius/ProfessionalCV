import TimelineItem from '@/components/ui/timeline-item';
import { experiences } from '@/data/resumeData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans font-bold mb-12 text-center">Work Experience</h2>
          
          <div className="relative">
            {experiences.map((experience, index) => (
              <TimelineItem 
                key={index}
                experience={experience}
                isLast={index === experiences.length - 1}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
