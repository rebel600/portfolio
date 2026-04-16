import { AtSign, GitBranch, Link, Mail, Smartphone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-4">
        <Mail className="w-5 h-5" /> Contact me
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
        Let's build something <br /> together
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-md">
        Have a project in mind or want to discuss full-stack development? Feel
        free to reach out via the form or my social links.
      </p>

      <div className="space-y-6">
        <a
          href="mailto:hello@example.com"
          className="flex items-center gap-4 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md shadow-slate-200">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-lg font-medium">shyam.mern@gmail.com</span>
        </a>
        <a
          href="tel:+1234567890"
          className="flex items-center gap-4 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md shadow-slate-200">
            <Smartphone className="w-5 h-5" />
          </div>
          <span className="text-lg font-medium">+91 7665056288</span>
        </a>
      </div>

      <div className="flex gap-4 mt-12">
        {[
          { Icon: GitBranch, link: "https://github.com/rebel600", label: "GitHub" },
          { Icon: Link, link: "https://linkedin.com/in/shyampandiya/", label: "LinkedIn" },
          { Icon: AtSign, link: "https://x.com/pandiyoji", label: "X" },
        ].map(({ Icon, link, label }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md shadow-slate-200"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
