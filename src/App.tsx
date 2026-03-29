import { useState, useEffect, lazy } from "react";
const Navbar = lazy(() => import("@/components/navbar"));
const HeroSection = lazy(() => import("@/pages/hero-section"));
const About = lazy(() => import("@/pages/about"));
const Services = lazy(() => import("@/pages/services"));
const Projects = lazy(() => import("@/pages/projects"));
const Contact = lazy(() => import("@/pages/contact"));
const PrivacyindexPolicy = lazy(() => import("./pages/privacy-policy"));
const TermsOfService = lazy(() => import("./pages/terms-of-service"));
const ChatWidget = lazy(() => import("@/components/chat-widget"));
const Footer = lazy(() => import("@/components/footer"));
const CustomKeyframes = lazy(() => import("@/components/custom-keyframes"));

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentPage, setCurrentPage] = useState("home");

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
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
  );
};

export default App;
