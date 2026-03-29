import { Loader2, Send, Sparkles } from "lucide-react"
import { useDraftMessage } from '@/hooks/useDraftMessage';
const ContactForm = () => {
    const { contactMessage, setContactMessage, isDrafting, handleDraftMessage } = useDraftMessage();

    return (
         <div className="bg-slate-50 p-8 lg:p-12 rounded-[2.5rem] border border-slate-100">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 ml-1">E-mail</label>
                        <input
                            type="email"
                            placeholder="john@example.com"
                            className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Subject</label>
                    <input
                        type="text"
                        placeholder="Project Inquiry"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 ml-1">Your message</label>
                    <textarea
                        value={contactMessage}
                        onChange={(e) => setContactMessage(e.target.value)}
                        rows={4}
                        placeholder="Tell me about your project... (or type a few keywords and click Draft with AI!)"
                        className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none"
                    ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        type="button"
                        onClick={handleDraftMessage}
                        disabled={isDrafting || !contactMessage.trim()}
                        className="flex-1 py-4 bg-indigo-50 text-indigo-700 border border-indigo-100 rounded-2xl font-bold text-lg hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        {isDrafting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5 text-indigo-600 group-hover:animate-pulse" />}
                        {isDrafting ? 'Drafting...' : '✨ Draft with AI'}
                    </button>
                    <button className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 group">
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm