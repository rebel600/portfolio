import { ArrowLeft } from "lucide-react";

const TermsOfService = ({
  navigateToPage,
}: {
  navigateToPage: (page: string) => void;
}) => {
  return (
    <section className="py-24 bg-white min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <button
          onClick={() => navigateToPage("home")}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:text-blue-700 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Portfolio
        </button>

        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Terms of Service
        </h1>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>

        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8">
            1. Acceptance of Terms
          </h3>
          <p>
            By accessing and using this portfolio website, you accept and agree
            to be bound by the terms and provision of this agreement.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8">
            2. Intellectual Property
          </h3>
          <p>
            All content, projects, code snippets, and designs displayed on this
            website are the intellectual property of Shyam Pareek unless
            otherwise noted. You may not claim them as your own, reproduce, or
            distribute the proprietary code without explicit permission.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8">
            3. Use of the Website and AI Features
          </h3>
          <p>
            You agree to use this website and its interactive features (such as
            the contact form and AI Assistant) only for lawful purposes. You
            agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Input malicious code, prompt injections, or spam into the contact
              form or chatbot.
            </li>
            <li>
              Attempt to overload or disrupt the website's infrastructure or the
              third-party APIs it relies upon.
            </li>
            <li>
              Use the site to transmit any unlawful, threatening, or abusive
              content.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 mt-8">
            4. Disclaimer of Warranties
          </h3>
          <p>
            This website and its features are provided on an "as is" and "as
            available" basis. While every effort is made to ensure the portfolio
            and AI assistant operate smoothly, there is no warranty that the
            site will be error-free or uninterrupted. The AI chatbot provides
            automated responses and should not be relied upon for binding
            agreements or absolute factual accuracy.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8">
            5. Limitation of Liability
          </h3>
          <p>
            Shyam Pareek shall not be liable for any direct, indirect,
            incidental, consequential, or exemplary damages resulting from your
            use of this website, the inability to use the site, or any
            interactions facilitated by the AI features.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mt-8">
            6. Governing Law
          </h3>
          <p>
            These terms and conditions are governed by and construed in
            accordance with the laws of Rajasthan, India. Any disputes relating
            to these terms and conditions will be subject to the exclusive
            jurisdiction of the courts in that region.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
