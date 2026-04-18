import {
  Code2,
  Database,
  Server,
  Layout,
  Terminal,
  FileJson,
  FlaskConical,
  DatabaseBackup,
} from "lucide-react";

export const developerSkills = [
  {
    name: "MongoDB",
    icon: Database,
    color: "text-green-600 dark:text-green-400",
    bg: "bg-green-50 dark:bg-green-900/30",
  },
  {
    name: "Express.js",
    icon: Server,
    color: "text-slate-700 dark:text-slate-300",
    bg: "bg-slate-100 dark:bg-slate-800",
  },
  {
    name: "React.js",
    icon: Code2,
    color: "text-blue-500 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    name: "Node.js",
    icon: Terminal,
    color: "text-green-700 dark:text-green-500",
    bg: "bg-green-50 dark:bg-green-900/30",
  },
  {
    name: "JavaScript",
    icon: FileJson,
    color: "text-yellow-600 dark:text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-900/30",
  },
  {
    name: "Tailwind CSS",
    icon: Layout,
    color: "text-cyan-500 dark:text-cyan-400",
    bg: "bg-cyan-50 dark:bg-cyan-900/30",
  },
  {
    name: "Next.js",
    icon: Code2,
    color: "text-slate-500 dark:text-slate-400",
    bg: "bg-slate-50 dark:bg-slate-900/30",
  },
  {
    name: "TypeScript",
    icon: FileJson,
    color: "text-blue-600 dark:text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-900/30",
  },
  {
    name: "PostgreSQL",
    icon: DatabaseBackup,
    color: "text-sky-500 dark:text-sky-400",
    bg: "bg-sky-50 dark:bg-sky-900/30",
  },
];

export const developerServices = [
  {
    title: "Frontend Development",
    desc: "Building responsive, interactive, and highly optimized user interfaces using React.js and modern CSS frameworks.",
    icon: Layout,
    color: "text-blue-400",
  },
  {
    title: "Backend Development",
    desc: "Designing robust and scalable server-side logic, databases, and architecture using Node.js, Express, and MongoDB.",
    icon: Server,
    color: "text-emerald-400",
  },
  {
    title: "REST API Design",
    desc: "Creating secure, well-documented, and efficient RESTful APIs to connect your frontend with your data layer.",
    icon: Database,
    color: "text-purple-400",
  },
  // {
  //     title: 'Full-Stack Integration',
  //     desc: 'Seamlessly connecting MongoDB databases, Express servers, and React frontends for cohesive web applications.',
  //     icon: Code2,
  //     color: 'text-amber-400'
  // },
  {
    title: "End-to-End Testing",
    desc: `Validating entire application workflows to ensure a bug-free experience from the user's perspective.`,
    icon: FlaskConical,
    color: "text-yellow-400",
  },
];
