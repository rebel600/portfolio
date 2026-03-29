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
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "E-commerce Platform",
      tags: ["React", "Node.js", "MongoDB"],
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
      ctaText: "Explore Project",
      ctaHref: "#",
    },
  },
  {
    bgColor: "bg-white",
    textColor: "text-indigo-600",
    content: {
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Task Management App",
      tags: ["React", "Express", "JWT"],
      title: "Task Management App",
      description:
        "A simple yet powerful task management application built with React and Express.",
      ctaText: "Explore Project",
      ctaHref: "#",
    },
  },
  {
    bgColor: "bg-white",
    textColor: "text-indigo-600",
    content: {
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      imageAlt: "Portfolio Website",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      title: "Portfolio Website",
      description:
        "A modern and responsive portfolio website built with Next.js and Tailwind CSS.",
      ctaText: "Explore Project",
      ctaHref: "#",
    },
  },
];