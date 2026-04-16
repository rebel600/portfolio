const Footer = ({
  navigateToPage,
}: {
  navigateToPage: (page: string) => void;
}) => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          © {new Date().getFullYear()} MERN Developer. All rights reserved.
        </p>

        <span className="text-slate-400 text-sm">
          Made with ❤️ in India
        </span>
        <div className="flex gap-6">
          <button
            onClick={() => navigateToPage("privacy")}
            className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            Privacy Policy
          </button>
          <button
            onClick={() => navigateToPage("terms")}
            className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
          >
            Terms of Service
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
