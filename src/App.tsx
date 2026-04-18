import { useState, useEffect, lazy } from "react";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import { useThemeContext } from "./context/theme-provider";
const Navbar = lazy(() => import("@/components/Navbar"));
const HeroSection = lazy(() => import("@/pages/hero-section"));
const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const Projects = lazy(() => import("@/pages/projects"));
const Contact = lazy(() => import("@/pages/contact"));
const PrivacyindexPolicy = lazy(() => import("./pages/privacy-policy"));
const TermsOfService = lazy(() => import("./pages/terms-of-service"));
const ChatWidget = lazy(() => import("@/components/ChatWidget"));
const Footer = lazy(() => import("@/components/Footer"));
const CustomKeyframes = lazy(() => import("@/components/CustomKeyframes"));
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");

  const { isDarkMode } = useThemeContext();

  const navigateToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Smooth scroll logic
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useDocumentTitle();

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="min-h-screen dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans selection:bg-blue-200 dark:selection:bg-blue-900 selection:text-blue-900 dark:selection:text-blue-100 flex flex-col transition-colors duration-300">
        {/* Navigation */}
        <Navbar
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          activeSection={activeSection}
          scrollTo={scrollTo}
        />
        {currentPage === "home" && (
          <main className="pt-20">
            {/* HERO SECTION */}
            <HeroSection scrollTo={scrollTo} />

            {/* ABOUT & SKILLS SECTION */}
            <About />

            {/* SERVICES SECTION */}
            <Services />

            {/* PROJECTS SECTION */}
            <Projects />

            {/* CONTACT SECTION */}
            <Contact />
          </main>
        )}

        {/* PRIVACY POLICY PAGE */}
        {currentPage === "privacy" && (
          <PrivacyindexPolicy navigateToPage={navigateToPage} />
        )}

        {/* TERMS OF SERVICE PAGE */}
        {currentPage === "terms" && (
          <TermsOfService navigateToPage={navigateToPage} />
        )}

        {/* Floating Chat Widget */}
        <ChatWidget />

        {/* FOOTER */}
        <Footer navigateToPage={navigateToPage} />

        {/* Custom Keyframes for Animations */}
        <CustomKeyframes />
      </div>
    </div>
  );
};

export default App;
