import { useEffect } from 'react';
import SkillBar from '@/components/ui/skill-bar';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';
import { skillCategories, certifications } from '@/data/resumeData';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans font-bold mb-12 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Programming Skills */}
            {skillCategories.map((category, categoryIndex) => (
              <Card key={category.title} className="animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-sans font-semibold mb-6 text-primary">{category.title}</h3>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      delay={skillIndex * 100}
                    />
                  ))}
                </CardContent>
              </Card>
            ))}
            
            {/* Certifications */}
            <Card className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-sans font-semibold mb-6 text-primary">Certifications</h3>
                
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="p-4 border border-blue-200 rounded-lg flex items-start">
                      <div className="mr-4 text-blue-500">
                        <Award size={24} />
                      </div>
                      <div>
                        <h4 className="font-medium">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.issuer}</p>
                        <p className="text-sm">{cert.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
