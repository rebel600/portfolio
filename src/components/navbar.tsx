import { Menu, X, Sun, Moon } from "lucide-react";
import developerImage from "@/assets/developerImage.png";
import { useThemeContext } from "@/context/theme-provider";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
  scrollTo: (id: string) => void;
}

const Navbar = ({
  isMenuOpen,
  setIsMenuOpen,
  activeSection,
  scrollTo,
}: NavbarProps) => {
  const { isDarkMode, setIsDarkMode } = useThemeContext();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          <img
            src={developerImage}
            alt="Profile Logo"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-100 dark:border-slate-700 shadow-sm group-hover:border-blue-300 dark:group-hover:border-blue-500 transition-colors"
          />
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Shyam Pareek
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                activeSection === item.toLowerCase()
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2.5 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors shadow-sm"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-slate-900 dark:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div  className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 shadow-xl cursor-pointer">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
               className="text-left text-lg font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
              aria-label="Toggle Dark Mode"
            >
              {item}
            </button>
          ))}
          <button
            onClick={() => scrollTo("contact")}
            className="mt-4 bg-blue-600 dark:bg-white text-white dark:text-slate-800 px-6 py-3 rounded-full text-center font-medium hover:bg-blue-700 dark:hover:bg-blue-400 dark:hover:text-white transition-colors"
          >
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
