import { ArrowLeft } from "lucide-react";

const PrivacyindexPolicy = ({
  navigateToPage,
}: {
  navigateToPage: (page: string) => void;
}) => {
  return (
    <section className="py-24 bg-white min-h-[80vh] dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <button
          onClick={() => navigateToPage("home")}
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-8 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Portfolio
        </button>

        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Privacy Policy
        </h1>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8"></div>

        <div className="prose prose-slate max-w-none text-slate-600 dark:prose-invert dark:text-slate-400 space-y-6">
          <p>
            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
          </p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
            1. Information We Collect
          </h3>
          <p>
            When you visit this website, we may collect the following types of
            information:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Voluntarily Provided Information:</strong> When you use
              the contact form, we collect your name, email address, and the
              contents of your message.
            </li>
            <li>
              <strong>Chatbot Data:</strong> If you interact with the AI
              Assistant widget, the text you input is processed to generate a
              helpful response.
            </li>
            <li>
              <strong>Automatically Collected Information:</strong> We may
              collect basic, non-identifiable analytics data (such as browser
              type, device type, and pages visited) to improve the website's
              performance.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
            2. How We Use Your Information
          </h3>
          <p>
            The information collected is used solely for the following purposes:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              To respond to your inquiries regarding freelance opportunities,
              projects, or services.
            </li>
            <li>
              To operate and improve the AI Assistant and message drafting
              features.
            </li>
            <li>To maintain and optimize the performance of the portfolio.</li>
          </ul>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
            3. Third-Party Services
          </h3>
          <p>
            This website utilizes third-party APIs to provide certain features.
            Specifically, the AI Assistant and email drafting tools are powered
            by Google's Generative AI services. Text inputted into these
            specific features is sent to Google's servers for processing. We do
            not sell, trade, or otherwise transfer your personally identifiable
            information to outside parties for marketing purposes.
          </p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8">
            4. Data Security
          </h3>
          <p>
            We implement standard security measures to maintain the safety of
            your personal information when you enter, submit, or access it.
            However, please be aware that no method of transmission over the
            internet is 100% secure.
          </p>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8">5. Contact</h3>
          <p>
            If you have any questions regarding this Privacy Policy, you may
            contact me at: shyam.mern@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyindexPolicy;

