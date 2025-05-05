import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Award, Users, Trophy, Lightbulb } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Achievements: React.FC = () => {
  const { theme } = useTheme();
  
  const achievements: Achievement[] = [
    {
      id: 1,
      title: 'Tech Club Treasurer',
      description: 'Managed finances and budgeting for university tech club, organizing successful tech events and workshops.',
      icon: <Users className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={28} />
    },
    {
      id: 2,
      title: 'IEEE SIBAU Executive Member',
      description: 'Active member of IEEE Sukkur IBA University chapter, contributing to technical events and community outreach.',
      icon: <Award className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={28} />
    },
    {
      id: 3,
      title: '2nd Position in Inter-University Hackathon',
      description: 'Led a team of developers to create an innovative solution, securing second place among 25+ competing teams.',
      icon: <Trophy className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={28} />
    },
    {
      id: 4,
      title: 'Data Science Project Recognition',
      description: 'Received recognition for developing a machine learning model that predicted student performance with 87% accuracy.',
      icon: <Lightbulb className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} size={28} />
    }
  ];

  return (
    <section
      id="achievements"
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Achievements
          </h2>
          <div className={`w-20 h-1 rounded ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
          <p className={`mt-4 text-center max-w-2xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Here are some of my notable accomplishments and recognitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id}
              className={`flex p-6 rounded-lg ${
                theme === 'dark' 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-gray-50 hover:bg-gray-100'
              } transition-colors shadow-md`}
            >
              <div className="mr-4 mt-1">
                {achievement.icon}
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 p-8 rounded-lg text-center max-w-4xl mx-auto ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Always Learning & Growing
          </h3>
          <p className={`max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Beyond these achievements, I'm constantly challenging myself with new technologies and projects. 
            I believe in continuous learning and pushing the boundaries of what's possible with code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;