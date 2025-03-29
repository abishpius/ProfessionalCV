import { useEffect, useRef, useState } from 'react';
import { Skill } from '@/lib/types';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

const SkillBar = ({ skill, delay = 0 }: SkillBarProps) => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Add a small delay for staggered animation effect
          setTimeout(() => {
            setAnimate(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div className="mb-5" ref={ref}>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600">{skill.level}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5">
        <div 
          className="bg-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: animate ? `${skill.progressPercentage}%` : '0%' 
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
