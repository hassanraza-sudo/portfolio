import React, { useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Home: React.FC = () => {
  const { theme } = useTheme();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation for title
    if (titleRef.current) {
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(-20px)";
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
        }
      }, 300);
    }

    // Animation for subtitle
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = "0";
      subtitleRef.current.style.transform = "translateY(-20px)";
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.opacity = "1";
          subtitleRef.current.style.transform = "translateY(0)";
        }
      }, 600);
    }

    // Animation for actions
    if (actionsRef.current) {
      actionsRef.current.style.opacity = "0";
      actionsRef.current.style.transform = "translateY(-20px)";
      setTimeout(() => {
        if (actionsRef.current) {
          actionsRef.current.style.opacity = "1";
          actionsRef.current.style.transform = "translateY(0)";
        }
      }, 900);
    }
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`min-h-screen flex items-center justify-center relative ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-white to-gray-100"
      }`}
    >
      <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
        <h1
          ref={titleRef}
          className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-700 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          Hi, I'm{" "}
          <span
            className={theme === "dark" ? "text-blue-400" : "text-blue-600"}
          >
            Hassan Raza
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className={`text-xl md:text-2xl mb-8 max-w-2xl transition-all duration-700 ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
          style={{ transitionProperty: "opacity, transform" }}
        >
          A passionate MERN Stack Developer specializing in building modern,
          responsive web applications. Currently pursuing BSc in Computer
          Science at Sukkur IBA University.
        </p>

        <div
          ref={actionsRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700"
          style={{ transitionProperty: "opacity, transform" }}
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-6 py-3 rounded-full font-medium text-white transition-all ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            View My Work
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              theme === "dark"
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-200 text-gray-900 hover:bg-gray-300"
            }`}
          >
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex gap-4">
          <a
            href="https://github.com/hassanraza-sudo"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all ${
              theme === "dark"
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
            }`}
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/hassanraza-cs/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all ${
              theme === "dark"
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900"
            }`}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 rounded-full animate-bounce ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default Home;
