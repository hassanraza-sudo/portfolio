import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { ExternalLink, Github, Code, Globe } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
  features: string[];
}

const Projects: React.FC = () => {
  const { theme } = useTheme();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "School Website",
      description:
        "A comprehensive website for an educational institution with student management, course catalogs, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      liveLink: "https://school-website-w3nv.vercel.app/",
      githubLink: "https://github.com/hassanraza-sudo/school-web",
      features: [
        "User authentication and role-based access control",
        "Student enrollment and course registration",
        "Interactive timetable and event calendar",
        "Faculty profiles and course management",
        "Responsive design for all devices",
      ],
    },
    {
      id: 2,
      title: "German Consultancy Website (Studienhilfe)",
      description:
        "A platform for students seeking guidance on studying in Germany, with resources, application tracking, and visa assistance.",
      image:
        "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL"],
      liveLink: "https://www.studien-route.com/",
      githubLink: "https://github.com/hassanraza-sudo/Frontend-Consultancy",
      features: [
        "University search and filter functionality",
        "Application process tracker",
        "Document upload and management",
        "Appointment scheduling system",
        "Multi-language support",
      ],
    },
    {
      id: 3,
      title: "Online Voting System",
      description:
        "A secure electronic voting platform with authentication, real-time results, and administrative controls for election management.",
      image:
        "https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
      liveLink: "",
      githubLink: "https://github.com/hassanraza-sudo/Voting-System",
      features: [
        "Secure voter authentication",
        "Real-time result visualization",
        "Admin dashboard for election management",
        "Audit trails and vote verification",
        "Mobile-responsive design",
      ],
    },
    {
      id: 4,
      title: "Daily Gold Rate",
      description:
        "A real-time gold price tracking website providing daily updated gold rates with a clean and user-friendly interface.",
      image:
        "https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Next.js", "API Integration", "Tailwind CSS"],
      liveLink: "https://www.dailygoldrate.com/",
      githubLink: "https://github.com/hassanraza-sudo/Daily-Gold-Rates",
      features: [
        "Live gold rate updates",
        "Country and city-based pricing",
        "Responsive and fast-loading UI",
        "SEO-friendly structure",
        "Simple and clean design",
      ],
    },
    {
      id: 5,
      title: "EstatePro",
      description:
        "A real estate property management system for listing properties, managing users, and scheduling appointments.",
      image:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      liveLink: "",
      githubLink: "https://github.com/hassanraza-sudo/EstatePro",
      features: [
        "Property listing and search",
        "Role-based dashboards (Admin, Agent, Buyer)",
        "Appointment scheduling system",
        "Secure authentication and authorization",
        "Responsive dashboard UI",
      ],
    },
  ];

  const openProjectModal = (project: Project) => {
    setActiveProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setActiveProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="projects"
      className={`py-20 ${theme === "dark" ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            My Projects
          </h2>
          <div
            className={`w-20 h-1 rounded ${
              theme === "dark" ? "bg-blue-500" : "bg-blue-600"
            }`}
          ></div>
          <p
            className={`mt-4 text-center max-w-2xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Here are some of the projects I've worked on. Click on a project to
            learn more about it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:translate-y-[-10px] cursor-pointer ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
              onClick={() => openProjectModal(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    className={`px-4 py-2 rounded-full font-medium text-white ${
                      theme === "dark" ? "bg-blue-600" : "bg-blue-600"
                    }`}
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 line-clamp-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded ${
                        theme === "dark"
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        aria-label="Live Demo"
                      >
                        <Globe size={16} />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                        aria-label="GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                  <button
                    className={`flex items-center ${
                      theme === "dark" ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    <span className="mr-1 text-sm">Details</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div
            className="absolute inset-0 bg-black bg-opacity-75"
            onClick={closeProjectModal}
          ></div>
          <div
            className={`relative mx-auto my-10 w-full max-w-4xl rounded-lg shadow-xl ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="relative h-72 md:h-96">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3
                    className={`text-2xl md:text-3xl font-bold mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {activeProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 mt-4 md:mt-0">
                  {activeProject.liveLink && (
                    <a
                      href={activeProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-md ${
                        theme === "dark"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                    >
                      <Globe size={16} className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {activeProject.githubLink && (
                    <a
                      href={activeProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-4 py-2 rounded-md ${
                        theme === "dark"
                          ? "bg-gray-700 text-white hover:bg-gray-600"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                      }`}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              <p
                className={`mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {activeProject.description}
              </p>

              <h4
                className={`text-lg font-semibold mb-3 flex items-center ${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                }`}
              >
                <Code size={20} className="mr-2" />
                Key Features
              </h4>
              <ul
                className={`list-disc pl-5 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {activeProject.features.map((feature, index) => (
                  <li key={index} className="mb-1">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
