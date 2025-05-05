import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);

  const experiences: Experience[] = [
    {
      id: 1,
      role: 'MERN Stack Developer',
      company: 'FasTech Systems',
      duration: 'Jun 2023 - Present',
      description: 'Developing full-stack web applications using MongoDB, Express.js, React, and Node.js.',
      responsibilities: [
        'Developed and maintained client websites with responsive designs',
        'Integrated payment gateways and third-party APIs',
        'Implemented user authentication and authorization systems',
        'Collaborated with design team to translate wireframes into functional interfaces',
        'Optimized applications for maximum speed and scalability'
      ]
    },
    {
      id: 2,
      role: 'Java Developer',
      company: 'FasTech Systems',
      duration: 'Jan 2023 - May 2023',
      description: 'Focused on creating Java-based solutions including an online voting system.',
      responsibilities: [
        'Designed and developed an online voting system from scratch',
        'Implemented secure voting mechanisms with result visualization',
        'Created user-friendly interfaces using JavaFX',
        'Conducted thorough testing to ensure security and reliability',
        'Documented code and created user guides for clients'
      ]
    }
  ];

  return (
    <section
      id="experience"
      className={`py-20 ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Work Experience
          </h2>
          <div className={`w-20 h-1 rounded ${
            theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
          }`}></div>
          <p className={`mt-4 text-center max-w-2xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Here's a summary of my professional experience and contributions.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
          {/* Tabs for Desktop */}
          <div className="hidden lg:flex flex-col border-l border-gray-300 space-y-1 lg:w-64">
            {experiences.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 text-left relative transition-all ${
                  activeTab === index
                    ? theme === 'dark'
                      ? 'text-blue-400 border-l-2 border-blue-400 -ml-[2px] bg-gray-700/30'
                      : 'text-blue-600 border-l-2 border-blue-600 -ml-[2px] bg-gray-100'
                    : theme === 'dark'
                    ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/20'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <h3 className="font-medium">{exp.role}</h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {exp.company}
                </p>
              </button>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="lg:hidden space-y-4 w-full">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`border rounded-lg overflow-hidden ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                }`}
              >
                <button
                  onClick={() => setActiveTab(index === activeTab ? -1 : index)}
                  className={`w-full px-4 py-3 flex justify-between items-center ${
                    activeTab === index
                      ? theme === 'dark'
                        ? 'bg-gray-700 text-white'
                        : 'bg-gray-100 text-gray-900'
                      : theme === 'dark'
                      ? 'bg-gray-800 text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  <div className="text-left">
                    <h3 className="font-medium">{exp.role}</h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {exp.company}
                    </p>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`transform transition-transform ${
                      activeTab === index ? 'rotate-90' : 'rotate-0'
                    }`}
                  />
                </button>
                
                {activeTab === index && (
                  <div className={`px-4 py-4 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  }`}>
                    <div className="flex items-center mb-3">
                      <Calendar size={16} className={`mr-2 ${
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`} />
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className={`mb-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {exp.description}
                    </p>
                    
                    <h4 className={`font-medium mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex">
                          <ChevronRight 
                            size={16} 
                            className={`mt-1 mr-2 flex-shrink-0 ${
                              theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                            }`} 
                          />
                          <span className={`${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Content for Desktop */}
          <div className={`flex-1 hidden lg:block rounded-lg p-6 ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          } shadow-md`}>
            {activeTab > -1 && (
              <div>
                <div className="flex items-center mb-4">
                  <Briefcase className={`mr-2 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <h3 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {experiences[activeTab].role}
                  </h3>
                </div>
                
                <h4 className={`text-lg font-medium mb-2 ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>
                  {experiences[activeTab].company}
                </h4>
                
                <div className="flex items-center mb-5">
                  <Calendar size={16} className={`mr-2 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {experiences[activeTab].duration}
                  </span>
                </div>
                
                <p className={`mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {experiences[activeTab].description}
                </p>
                
                <h4 className={`font-medium mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Key Responsibilities:
                </h4>
                <ul className="space-y-3">
                  {experiences[activeTab].responsibilities.map((item, i) => (
                    <li key={i} className="flex">
                      <ChevronRight 
                        size={18} 
                        className={`mt-1 mr-2 flex-shrink-0 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        }`} 
                      />
                      <span className={`${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;