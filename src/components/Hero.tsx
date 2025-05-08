
import React from 'react';
import { Link } from 'react-scroll';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/85"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 fade-in-up">
            <div className="inline-block px-4 py-1 mb-4 border border-primary/40 bg-secondary/60 rounded-sm">
              <p className="text-sm font-quantico tracking-widest text-primary">DEFENSE TECHNOLOGY SPECIALIST</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-quantico mb-4 text-shadow">
              SAURAJYOTI <span className="text-primary">BHATTACHARJEE</span>
            </h1>
            
            <div className="h-1 w-24 bg-primary mb-6"></div>
            
            <h2 className="text-xl md:text-2xl font-quantico mb-6">
              <span className="text-white">B.Tech Computer Science Student</span> | <span className="text-primary">SRM University</span>
            </h2>
            
            <p className="text-lg mb-8 max-w-2xl opacity-90">
              Undergraduate Developer with a focus on Security & Defense Technologies.
              Experienced in Python, Web Development, and Machine Learning.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Button asChild className="bg-primary text-white font-quantico border-none hover:bg-primary/80">
                <a href="mailto:saurajyotibhattacharjee64@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              
              <Button asChild variant="outline" className="bg-transparent border border-white/30 text-white hover:bg-white/10">
                <a href="https://sauryajyotibhattacharjee.github.io/SAURAPORTFOLIO" target="_blank" rel="noopener noreferrer">
                  Visit Original Portfolio
                </a>
              </Button>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/saurajyoti-bhattacharjee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 hover:border-primary hover:bg-white/10 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/sauryajyotibhattacharjee" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-white/30 hover:border-primary hover:bg-white/10 transition-all"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:saurajyotibhattacharjee64@gmail.com"
                className="p-2 rounded-full border border-white/30 hover:border-primary hover:bg-white/10 transition-all"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end fade-in-up animate-delay-200">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-md overflow-hidden border-2 border-primary animate-pulse-glow">
                <img 
                  src="/lovable-uploads/659c0d14-9e53-417b-8615-6e9ae2b48731.png" 
                  alt="Saurajyoti Bhattacharjee" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-secondary px-4 py-2 border border-primary/50">
                <p className="font-quantico text-sm">CGPA: 9.33</p>
              </div>
              
              <div className="absolute -top-2 -left-2 w-20 h-20 border-t-2 border-l-2 border-primary/50"></div>
              <div className="absolute -bottom-2 -right-2 w-20 h-20 border-b-2 border-r-2 border-primary/50"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center flex-col">
          <p className="text-sm mb-2 font-quantico opacity-70">Scroll Down</p>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="animate-bounce cursor-pointer"
          >
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
