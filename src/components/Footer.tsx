import React from "react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const year = new Date().getFullYear();

  return (
    <footer
      className={`py-8 ${
        theme === "dark"
          ? "bg-gray-950 text-gray-300"
          : "bg-gray-100 text-gray-700"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              © {year} Hassan Raza. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-4 items-center">
            <a
              href="https://github.com/hassanraza-sudo"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hassanraza-cs/"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors ${
                theme === "dark"
                  ? "text-gray-400 hover:text-blue-400"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              aria-label="Twitter Profile"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-sm flex items-center justify-center">
          <span>Made with</span>
          <Heart className="mx-1 text-red-500" size={16} />
          <span>by Hassan Raza</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
