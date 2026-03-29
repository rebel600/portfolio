import projectOne from "@/assets/projectOne.png";
import projectTwo from "@/assets/projectTwo.png";
import portfolioImage from "@/assets/portfolioWebsite.png";
import GenericCard from "@/components/generic-card";

interface ProjectCard {
  bgColor: string;
  textColor: string;
  content: {
    image?: string;
    imageAlt?: string;
    tags?: string[];
    title: string;
    description: string;
    ctaText?: string;
    ctaHref?: string;
  };
}

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {genericCardContent.map((project, index) => (
            <GenericCard
              key={index}
              bgColor={project.bgColor}
              textColor={project.textColor}
              content={project.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

const genericCardContent: ProjectCard[] = [
  {
    bgColor: "bg-white",  
    textColor: "text-indigo-600",
    content: {
      image:
        projectOne,
      imageAlt: "WannaEat - Food Ordering Platform",
      tags: ["React", "Node.js", "MongoDB"],
      title: "WannaEat - Food Ordering Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
      ctaText: "Explore Project",
      ctaHref: "https://www.wannaeat.com",
    },
  },
  {
    bgColor: "bg-white",
    textColor: "text-indigo-600",
    content: {
      image:
       projectTwo,
      imageAlt: "Compass - Budgeting Web App",
      tags: ["React18", "Single (SPA)", "RTK"],
      title: "Compass - Budgeting Web App",
      description:
        "A complex and powerful budgeting web application built with Micro-Frontend Architecture.",
      ctaText: "Explore Project",
      ctaHref: "http://compass.equinoxys.com/",
    },
  },
  {
    bgColor: "bg-white",
    textColor: "text-indigo-600",
    content: {
      image:
        portfolioImage,
      imageAlt: "Portfolio Website",
      tags: ["React", "Tailwind CSS", "Typescript"],
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with React.js, Tailwind CSS and Typescript.",
      ctaText: "Explore Project",
      ctaHref: "#",
    },
  },
];