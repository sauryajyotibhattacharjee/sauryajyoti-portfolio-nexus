
import React from 'react';
import { Book, Briefcase, Code } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary/95 pattern-dots">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">ABOUT ME</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 fade-in-up">
            <p className="text-lg mb-6 leading-relaxed">
              I am an undergraduate student at SRM University with a passion for web and app development. 
              My technical expertise includes Python, JavaScript, HTML, and web design. 
              With a creative mindset and strong technical foundation, I am eager to collaborate on 
              challenging projects to drive innovation.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed">
              My experience spans across defense technology, secure communications, and automated systems development.
              I've had the privilege of working with prestigious organizations like DRDO, ONGC, and ISRO,
              contributing to mission-critical projects and research initiatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="military-card">
                <div className="flex items-center mb-4">
                  <Code className="h-5 w-5 text-primary mr-3" />
                  <h3 className="font-quantico text-lg">Developer</h3>
                </div>
                <p className="text-sm opacity-80">
                  Proficient in multiple programming languages with a focus on web and application development.
                </p>
              </div>
              
              <div className="military-card">
                <div className="flex items-center mb-4">
                  <Book className="h-5 w-5 text-primary mr-3" />
                  <h3 className="font-quantico text-lg">Researcher</h3>
                </div>
                <p className="text-sm opacity-80">
                  Experience with GIS, GNSS, ML/DL models, and collaborative research projects.
                </p>
              </div>
              
              <div className="military-card">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-5 w-5 text-primary mr-3" />
                  <h3 className="font-quantico text-lg">Professional</h3>
                </div>
                <p className="text-sm opacity-80">
                  Internship experience with leading organizations like DRDO, ONGC, and ISRO.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 fade-in-up animate-delay-200">
            <div className="military-card h-full">
              <h3 className="font-quantico text-xl mb-6 text-primary">EDUCATION</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-lg">B.Tech, Computer Science</h4>
                  <span className="text-sm text-primary">Jul 2022 – Present</span>
                </div>
                <p className="font-semibold">SRM University, Chennai, India</p>
                <p className="mt-2 opacity-80">CGPA: 9.33</p>
              </div>
              
              <h3 className="font-quantico text-xl mb-6 mt-8 text-primary">CERTIFICATIONS</h3>
              
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  AWS
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  ICPC (2024)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  Marine Technology Society (2024)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  Forethought India (2024)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  DRDO Certification (2024)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  IIRS, ISRO Certification (2024)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  NPTEL Java (2023)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  Smart India Hackathon (2023)
                </li>
                <li className="flex items-center">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></span>
                  EHS – Ethical Hacking (2023)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
