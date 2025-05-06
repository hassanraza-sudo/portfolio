import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { BookOpen, Code, User } from "lucide-react";

const About: React.FC = () => {
  const { theme } = useTheme();

  return (
    <section
      id="about"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            About Me
          </h2>
          <div
            className={`w-20 h-1 rounded ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3
              className={`text-2xl font-bold mb-4 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Who I Am
            </h3>
            <p
              className={`mb-4 leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              I'm a passionate MERN Stack Developer with a strong foundation in
              web development and a love for creating intuitive, responsive
              applications. Currently pursuing my BSc in Computer Science with a
              specialization in Data Science at Sukkur IBA University, I combine
              academic knowledge with practical experience.
            </p>
            <p
              className={`mb-6 leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              My journey in tech has allowed me to work on diverse projects,
              from school websites to consultancy platforms. I thrive on
              challenges and constantly seek to expand my skill set while
              delivering high-quality solutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center mb-2">
                  <User
                    className={`mr-2 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                    size={20}
                  />
                  <h4
                    className={`font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Passionate
                  </h4>
                </div>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Deeply enthusiastic about creating exceptional user
                  experiences
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center mb-2">
                  <Code
                    className={`mr-2 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                    size={20}
                  />
                  <h4
                    className={`font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Problem Solver
                  </h4>
                </div>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Analytical thinker who enjoys tackling complex challenges
                </p>
              </div>

              <div
                className={`p-4 rounded-lg ${
                  theme === "dark" ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center mb-2">
                  <BookOpen
                    className={`mr-2 ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                    size={20}
                  />
                  <h4
                    className={`font-semibold ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Continuous Learner
                  </h4>
                </div>
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Always exploring new technologies and improving skills
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div
              className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 ${
                theme === "dark" ? "border-blue-500" : "border-blue-600"
              }`}
            >
              <img
                src="../assets/hassan.jpg"
                alt="Hassan Raza"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className={`p-6 rounded-lg transition-transform hover:scale-105 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h4
              className={`text-xl font-bold mb-2 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Education
            </h4>
            <p
              className={`font-medium ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              BSc Computer Science
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Sukkur IBA University
            </p>
            <p
              className={`text-sm mt-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Specialization in Data Science
            </p>
          </div>

          <div
            className={`p-6 rounded-lg transition-transform hover:scale-105 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h4
              className={`text-xl font-bold mb-2 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Focus
            </h4>
            <p
              className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              Web Development
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Full Stack Applications
            </p>
            <p
              className={`text-sm mt-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Modern, responsive interfaces
            </p>
          </div>

          <div
            className={`p-6 rounded-lg transition-transform hover:scale-105 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h4
              className={`text-xl font-bold mb-2 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Languages
            </h4>
            <p
              className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              JavaScript / TypeScript
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Java / Python
            </p>
            <p
              className={`text-sm mt-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              HTML5 / CSS3
            </p>
          </div>

          <div
            className={`p-6 rounded-lg transition-transform hover:scale-105 ${
              theme === "dark" ? "bg-gray-800" : "bg-gray-100"
            }`}
          >
            <h4
              className={`text-xl font-bold mb-2 ${
                theme === "dark" ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Interests
            </h4>
            <p
              className={`${theme === "dark" ? "text-white" : "text-gray-900"}`}
            >
              Data Science
            </p>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              UI/UX Design
            </p>
            <p
              className={`text-sm mt-1 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Open Source Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
