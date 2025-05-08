
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  useEffect(() => {
    // Welcome message
    setTimeout(() => {
      toast({
        title: "Welcome to my Portfolio",
        description: "Explore my projects and experience",
      });
    }, 1500);
    
    // Add scroll reveal animations
    const revealElements = document.querySelectorAll('.fade-in-up');
    
    const revealScroll = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('opacity-100');
        }
      });
    };
    
    window.addEventListener('scroll', revealScroll);
    revealScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', revealScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-secondary text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
