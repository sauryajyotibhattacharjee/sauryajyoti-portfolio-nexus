
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  details: string;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      title: "Secure Communication (BBM92 Protocol)",
      category: "Security",
      description: "Developed a secure communication system using quantum key distribution between military units.",
      technologies: ["Python", "Cryptography", "Network Security", "QKD"],
      details: "This project implemented a secure communication system using the BBM92 quantum key distribution protocol to enable highly secure communications between military units. The system leverages quantum principles to detect eavesdropping and ensure secure key exchange, making it suitable for high-security defense applications."
    },
    {
      title: "Automatic Monthly Report System",
      category: "Enterprise",
      description: "Built an automated reporting system to manage employee data and generate monthly reports for ONGC.",
      technologies: ["C++", "Database Management", "Reporting Tools"],
      details: "Designed and implemented an automated reporting system for ONGC that streamlines data collection, processing, and report generation. The system significantly reduced manual work, improved accuracy, and provided real-time insights into employee performance metrics across departments."
    },
    {
      title: "ATE Automated Test Equipment",
      category: "Defense",
      description: "Developed defense-specific testing software with Python, Tkinter, and video analysis features for DRDO.",
      technologies: ["Python", "Tkinter", "OpenCV", "Video Analysis"],
      details: "Created specialized automated test equipment software for DRDO that performs comprehensive diagnostics and testing of defense systems. The application includes a Tkinter-based UI, real-time video analysis capabilities, and automated report generation to streamline quality assurance processes."
    },
    {
      title: "TSPCB Research: Smart Agriculture System",
      category: "IoT & Agriculture",
      description: "Implemented smart agriculture solutions using IoT, ML, and Blockchain for pollution control board projects.",
      technologies: ["IoT", "Machine Learning", "Blockchain", "Environmental Monitoring"],
      details: "Developed an integrated smart agriculture system that uses IoT sensors to monitor soil conditions, weather patterns, and pollution levels. The system employs machine learning algorithms to provide predictive insights and uses blockchain for secure data management, helping farmers optimize resource usage while minimizing environmental impact."
    },
    {
      title: "ResourcifyCONNECT",
      category: "Management",
      description: "Built a resource management platform for real-time data-driven decision-making.",
      technologies: ["JavaScript", "React", "Node.js", "Database"],
      details: "Created a comprehensive resource management platform that enables organizations to track, allocate, and optimize resources in real-time. The system features interactive dashboards, predictive analytics, and automated resource allocation recommendations based on historical usage patterns and current demands."
    },
    {
      title: "Smart Learn",
      category: "Education",
      description: "Developed an AI-powered adaptive learning platform for personalized education experiences.",
      technologies: ["Python", "Machine Learning", "Educational Technology"],
      details: "Smart Learn is an AI-driven educational platform that adapts to individual learning styles and progress. The system analyzes performance data to customize content delivery, identify knowledge gaps, and provide targeted learning resources, significantly improving user engagement and learning outcomes."
    }
  ];
  
  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };
  
  const closeProjectDetails = () => {
    setSelectedProject(null);
  };
  
  return (
    <section id="projects" className="py-20 bg-secondary/95 pattern-dots">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="military-card flex flex-col justify-between fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-primary/20 text-primary rounded">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold font-quantico mb-3">{project.title}</h3>
                <p className="mb-4 text-sm opacity-90">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-secondary-foreground/5 text-xs rounded border border-secondary-foreground/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-secondary-foreground/5 text-xs rounded border border-secondary-foreground/10">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="bg-transparent border border-primary/50 text-primary hover:bg-primary/10 mt-2"
                onClick={() => openProjectDetails(project)}
              >
                View Details
              </Button>
            </div>
          ))}
        </div>
        
        {/* Project details dialog */}
        <Dialog open={selectedProject !== null} onOpenChange={closeProjectDetails}>
          <DialogContent className="bg-secondary border border-primary/20 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="font-quantico text-2xl">{selectedProject?.title}</DialogTitle>
              <span className="inline-block px-3 py-1 mt-2 text-xs font-medium bg-primary/20 text-primary rounded">
                {selectedProject?.category}
              </span>
            </DialogHeader>
            
            <DialogDescription className="text-secondary-foreground">
              <p className="mb-4">{selectedProject?.details}</p>
              
              <h4 className="text-lg font-quantico mb-2 text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject?.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-secondary-foreground/5 text-xs rounded border border-secondary-foreground/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
