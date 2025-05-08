
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Java", level: 80 },
        { name: "C/C++", level: 85 },
      ]
    },
    {
      name: "Web Technologies",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Django", level: 85 },
        { name: "Bootstrap", level: 90 },
      ]
    },
    {
      name: "Tools & Technologies",
      skills: [
        { name: "AWS", level: 75 },
        { name: "GIS & GNSS", level: 80 },
        { name: "Remote Sensing", level: 75 },
        { name: "Ethical Hacking", level: 70 },
        { name: "Machine Learning", level: 80 },
      ]
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        { name: "Tkinter", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "Anaconda", level: 85 },
        { name: "UI/UX", level: 80 },
        { name: "Robotics", level: 75 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/90">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">SKILLS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="military-card fade-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-xl font-bold font-quantico mb-6 text-primary">{category.name}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm font-quantico text-primary">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary-foreground/10" 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
