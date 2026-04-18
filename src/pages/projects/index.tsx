import GenericCard from "@/components/GenericCard";
import { genericCardContent } from "@/utils/mock";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
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


