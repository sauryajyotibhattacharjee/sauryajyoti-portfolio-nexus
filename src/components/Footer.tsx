
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="font-quantico text-xl font-bold text-primary">SB<span className="text-white">_NEXUS</span></span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Saurajyoti Bhattacharjee. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/10 text-center">
          <p className="text-sm opacity-70">
            B.Tech Computer Science Student at SRM University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
