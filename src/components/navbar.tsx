import { Menu, X } from 'lucide-react';
import developerImage from "@/assets/developerImage.png";

interface NavbarProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
    activeSection: string;
    scrollTo: (id: string) => void;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen, activeSection, scrollTo }: NavbarProps) => {

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('home')}>
                    <img
                        src={developerImage}
                        alt="Profile Logo"
                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-100 shadow-sm"
                    />
                    <span className="font-bold text-xl tracking-tight text-slate-900">Shyam Pareek</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item.toLowerCase())}
                            className={`text-sm cursor-pointer font-medium transition-colors hover:text-blue-600 ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-slate-600'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <button
                        onClick={() => scrollTo('contact')}
                        className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors cursor-pointer"
                    >
                        Let's Talk
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-slate-900 p-2 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {
                isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 p-6 flex flex-col gap-4 shadow-xl cursor-pointer">
                        {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item.toLowerCase())}
                                className="text-left text-lg font-medium text-slate-600 hover:text-blue-600"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollTo('contact')}
                            className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full text-center font-medium"
                        >
                            Let's Talk
                        </button>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar;
