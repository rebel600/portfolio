import { developerSkills } from "@/utils/skills";
import developerImage from "@/assets/developerImage.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 transition-colors duration-300 min-h-[95vh]"
    >
      <div className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <img
                src={developerImage}
                alt="About Profile"
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-lg border-4 border-white dark:border-slate-800"
              />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                  About Me & Skills
                </h2>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I’m an enthusiastic and highly motivated full-stack developer
              specializing in the MERN stack (MongoDB, Express, React, and
              Node.js). I build end-to-end applications with a strong focus on
              performance, user experience, and maintainable architecture.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I love the challenge of diving head first into complex development
              problems and resolving them into clean, scalable solutions. I am a
              quick learner, constantly exploring new technologies to improve my
              craft.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether I’m architecting a complex database or fine-tuning a responsive interface, my goal is always to deliver future-proof solutions that can grow alongside your business goals.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {developerSkills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-xl hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="" strokeWidth={1.5} size={24} />
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200 text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
