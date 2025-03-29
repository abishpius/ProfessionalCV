import EducationCard from '@/components/ui/education-card';
import { educationData } from '@/data/resumeData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans font-bold mb-12 text-center">Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationData.map((education, index) => (
              <EducationCard 
                key={education.degree + education.field} 
                education={education} 
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
