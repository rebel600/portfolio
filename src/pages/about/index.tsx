import {
  Code2,
  Database,
  Server,
  Layout,
  Terminal,
  FileJson,
} from "lucide-react";
import developerImage from "@/assets/developerImage.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <img
                src={developerImage}
                alt="About Profile"
                className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-lg border-4 border-white"
              />
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                  About Me & Skills
                </h2>
                <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              I’m an enthusiastic and highly motivated full-stack developer
              specializing in the MERN stack (MongoDB, Express, React, and
              Node.js). I build end-to-end applications with a strong focus on
              performance, user experience, and maintainable architecture.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I love the challenge of diving head first into complex development
              problems and resolving them into clean, scalable solutions. I am a
              quick learner, constantly exploring new technologies to improve my
              craft.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              {
                name: "MongoDB",
                icon: Database,
                color: "text-green-600",
                bg: "bg-green-50",
              },
              {
                name: "Express.js",
                icon: Server,
                color: "text-slate-700",
                bg: "bg-slate-100",
              },
              {
                name: "React.js",
                icon: Code2,
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
              {
                name: "Node.js",
                icon: Terminal,
                color: "text-green-700",
                bg: "bg-green-50",
              },
              {
                name: "JavaScript",
                icon: FileJson,
                color: "text-yellow-600",
                bg: "bg-yellow-50",
              },
              {
                name: "Tailwind CSS",
                icon: Layout,
                color: "text-cyan-500",
                bg: "bg-cyan-50",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 text-center"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${skill.bg} ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="" strokeWidth={1.5} size={24} />
                </div>
                <span className="font-semibold text-slate-800 text-sm">
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
