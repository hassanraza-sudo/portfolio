import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const { theme } = useTheme();

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML', level: 90, category: 'Frontend' },
    { name: 'CSS', level: 85, category: 'Frontend' },
    { name: 'JavaScript', level: 90, category: 'Frontend' },
    { name: 'React', level: 85, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Express.js', level: 80, category: 'Backend' },
    { name: 'RESTful APIs', level: 85, category: 'Backend' },
    
    // Databases
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 75, category: 'Database' },
    
    // Programming
    { name: 'Java', level: 80, category: 'Programming' },
    { name: 'TypeScript', level: 75, category: 'Programming' },
    
    // Tools
    { name: 'Git', level: 80, category: 'Tools' },
    { name: 'npm/Yarn', level: 85, category: 'Tools' },
    { name: 'VS Code', level: 90, category: 'Tools' },
  ];

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section
      id="skills"
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            My Skills
          </h2>
          <div className={`w-20 h-1 rounded ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
          <p className={`mt-4 text-center max-w-2xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Here are the technologies and tools I'm proficient with. I'm constantly learning and expanding my skill set to stay up-to-date with the latest technologies.
          </p>
        </div>

        <div className="space-y-10">
          {categories.map((category) => (
            <div key={category}>
              <h3 className={`text-xl md:text-2xl font-bold mb-6 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`p-4 rounded-lg transition-all hover:translate-y-[-5px] ${
                        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
                      } shadow-md`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h4 className={`font-semibold ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                          {skill.name}
                        </h4>
                        <span className={`text-sm ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className={`w-full h-2 rounded-full ${
                        theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                      }`}>
                        <div 
                          className={`h-full rounded-full ${
                            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
                          }`} 
                          style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                        ></div>
                      </div>
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