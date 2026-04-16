import { Server, Layout, ChevronRight, Link, GitBranch } from "lucide-react";
import developerImage from "@/assets/developerImage.png";
import { useTypingEffect } from "@/hooks/useTypingEffect";

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

const HeroSection = ({ scrollTo }: HeroSectionProps) => {
  const text = useTypingEffect([
    "Shyam Pareek",
    "MERN Stack Developer",
    "Frontend Engineer",
  ]);
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Subtle animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 animate-blob transition-colors duration-500"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 dark:bg-indigo-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-2000 transition-colors duration-500"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-12 lg:pt-0">
        {/* Left Content */}
        <div className="flex flex-col gap-6 relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 w-fit text-sm font-medium border border-blue-100 dark:border-blue-800/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            {text}
            <span className="animate-pulse">&nbsp;|</span>
          </h1>

          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
            Building Scalable Web Experiences. I design and develop full-stack
            applications with performance, scalability, and clean architecture
            in mind.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-slate-100 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900/20 flex items-center gap-2 group"
            >
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-4 px-4">
              <a
                href="https://github.com/rebel600"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-colors shadow-sm"
              >
                <GitBranch className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shyampandiya/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linkedin profile"
                className="p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-colors shadow-sm"
              >
                <Link className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image with Floating Tags (Video Inspiration) */}
        <div className="relative w-full max-w-md mx-auto lg:max-w-none flex justify-center lg:justify-end pb-12 lg:pb-0 z-10">
          <div className="relative">
            {/* Decorative background shape */}
            <div className="absolute inset-0 bg-linear-to-tr from-blue-100 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 -z-10"></div>

            <img
              src={developerImage}
              alt="Developer Portrait"
              className="w-full h-auto max-h-150 object-cover rounded-[2.5rem] shadow-2xl shadow-slate-200/50 dark:shadow-black/50 border-4 border-white dark:border-slate-800"
            />

            {/* Floating Tag 1 */}
            <div className="absolute -top-4 lg:top-12 -left-8 lg:-left-16 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Frontend
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  React.js
                </p>
              </div>
            </div>

            {/* Floating Tag 2 */}
            <div className="absolute -bottom-2 lg:bottom-10 -right-4 lg:-right-12 bg-white dark:bg-slate-800 p-3 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-black/50 border border-slate-100 dark:border-slate-700 flex items-center gap-3 animate-float-delayed">
              <div className="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  Backend
                </p>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Node & Express
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
