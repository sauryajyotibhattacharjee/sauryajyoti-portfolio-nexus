
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "Oil & Natural Gas Corporation Ltd.",
      location: "Agartala, Tripura, India",
      period: "May 2024 – July 2024",
      skills: ["C++", "UML", "Flask", "Django"],
      description: "Developing an automated reporting system to manage employee data and generate monthly reports."
    },
    {
      role: "Project Intern",
      company: "CVRDE-DRDO",
      location: "Chennai, Tamil Nadu, India",
      period: "Dec 2023 – Feb 2024",
      skills: ["Python", "Django", "Flask", "Tkinter"],
      description: "Developed defense-specific testing software with Python, Tkinter, and video analysis features."
    },
    {
      role: "Research Work",
      company: "ISRO – GIS & GNSS",
      location: "",
      period: "Aug 2023 – Nov 2023",
      skills: ["Remote Sensing", "ML", "DL Models"],
      description: "Conducted research on GIS and GNSS technologies, implementing advanced models for data analysis."
    },
    {
      role: "Android Developer",
      company: "Google for Developers",
      location: "",
      period: "Aug 2023 – Dec 2023",
      skills: ["Kotlin", "UI/UX"],
      description: "Contributed to Android application development using Kotlin with a focus on user experience."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/90">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">EXPERIENCE</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full border-2 border-primary bg-secondary" />
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:pl-0' : 'md:pl-16 md:pr-0'} pl-8`}>
                  <div className="military-card">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-medium bg-primary/20 text-primary rounded">
                      {exp.period}
                    </span>
                    
                    <h3 className="text-xl font-bold font-quantico mb-1">{exp.role}</h3>
                    <h4 className="text-lg opacity-90 mb-1">{exp.company}</h4>
                    {exp.location && (
                      <p className="text-sm opacity-80 mb-3">{exp.location}</p>
                    )}
                    
                    <p className="mb-4 opacity-90">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-secondary-foreground/5 text-xs rounded border border-secondary-foreground/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
