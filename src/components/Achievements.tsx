
import React from 'react';

interface Achievement {
  title: string;
  organization?: string;
  details?: string;
}

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "1st Place, Ideation Hackathon NER",
      organization: "TIE Delhi",
      details: "Recognized for innovative solution addressing regional challenges."
    },
    {
      title: "2nd Place, 3DPCOE Hackathon Startup Challenge",
      organization: "TIE Delhi",
      details: "Awarded for entrepreneurial approach to technical problem-solving."
    },
    {
      title: "1st Place, BIS Technical Documentation Competition",
      details: "Demonstrated excellence in technical writing and documentation."
    },
    {
      title: "2nd Prize, Dept. of Economics and Statistics, Tripura",
      details: "Recognized for data analysis and statistical modeling contributions."
    },
    {
      title: "ICPC – International Collegiate Programming Contest",
      details: "Participated in the prestigious algorithmic programming competition."
    },
    {
      title: "Winner, Root Revival Hackathon",
      details: "Awarded for innovative environmental technology solution."
    },
    {
      title: "Top Performer, ISRO-IIRS (2023)",
      details: "Recognized for outstanding performance in space technology research."
    },
    {
      title: "1st Position, RoboRoarz Singapore Competition",
      details: "Won international robotics competition showcasing technical expertise."
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-secondary/95 pattern-dots">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">ACHIEVEMENTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="military-card h-full flex flex-col justify-between fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div>
                <div className="w-12 h-1 bg-primary mb-4"></div>
                <h3 className="text-lg font-bold font-quantico mb-2">{achievement.title}</h3>
                
                {achievement.organization && (
                  <p className="text-sm text-primary mb-2">{achievement.organization}</p>
                )}
                
                {achievement.details && (
                  <p className="text-sm opacity-80">{achievement.details}</p>
                )}
              </div>
              
              <div className="mt-4 flex justify-end">
                <div className="w-6 h-6 rounded-full bg-secondary border-2 border-primary flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
