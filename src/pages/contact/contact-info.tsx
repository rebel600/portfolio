import { Mail, Smartphone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
        <Mail className="w-5 h-5" /> Contact me
      </div>
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
        Let's build something <br /> together
      </h2>
      <p className="text-lg text-slate-600 mb-12 max-w-md">
        Have a project in mind or want to discuss full-stack development? Feel
        free to reach out via the form or my social links.
      </p>

      <div className="space-y-6">
        <a
          href="mailto:hello@example.com"
          className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group"
        >
          <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-lg font-medium">shyam.mern@gmail.com</span>
        </a>
        <a
          href="tel:+1234567890"
          className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-colors group"
        >
          <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
            <Smartphone className="w-5 h-5" />
          </div>
          <span className="text-lg font-medium">+91 7665056288</span>
        </a>
      </div>

      {/* <div className="flex gap-4 mt-12">
                  {[Github, Linkedin, Twitter].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors shadow-md shadow-slate-200">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div> */}
    </div>
  );
};

export default ContactInfo;
