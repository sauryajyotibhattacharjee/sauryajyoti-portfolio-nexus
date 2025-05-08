
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/90">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">CONTACT</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7 fade-in-up">
            <p className="text-lg mb-8">
              Feel free to reach out for collaborations, project inquiries, or just to connect. 
              I'm always open to discussing new opportunities and challenges.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-quantico opacity-70">Email</h3>
                  <a href="mailto:saurajyotibhattacharjee64@gmail.com" className="text-lg hover:text-primary transition-colors">
                    saurajyotibhattacharjee64@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mr-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-quantico opacity-70">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/saurajyoti-bhattacharjee" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg hover:text-primary transition-colors"
                  >
                    linkedin.com/in/saurajyoti-bhattacharjee
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mr-4">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-quantico opacity-70">GitHub</h3>
                  <a 
                    href="https://github.com/sauryajyotibhattacharjee" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg hover:text-primary transition-colors"
                  >
                    github.com/sauryajyotibhattacharjee
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-5 fade-in-up animate-delay-200">
            <div className="military-card h-full">
              <h3 className="font-quantico text-xl mb-6 text-primary">PORTFOLIO</h3>
              
              <p className="mb-4">
                Check out my original portfolio for additional projects and information:
              </p>
              
              <a 
                href="https://sauryajyotibhattacharjee.github.io/SAURAPORTFOLIO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-primary py-3 px-6 text-center rounded text-primary-foreground font-quantico hover:bg-primary/90 transition-colors"
              >
                Visit Original Portfolio
              </a>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="font-quantico text-lg mb-4">Connect With Me</h4>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/saurajyoti-bhattacharjee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-md border border-white/20 hover:border-primary hover:bg-white/5 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/sauryajyotibhattacharjee" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-md border border-white/20 hover:border-primary hover:bg-white/5 transition-all"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href="mailto:saurajyotibhattacharjee64@gmail.com"
                    className="p-3 bg-secondary rounded-md border border-white/20 hover:border-primary hover:bg-white/5 transition-all"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
