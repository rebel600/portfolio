import { useState } from "react";
import {
  Bot,
  MessageSquare,
  Send,
  Sparkles,
  User,
  X,
  Loader2,
} from "lucide-react";
import { fetchWithRetry } from "@/utils/chat-service";
const ChatWidget = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "ai",
      text: "Hi! I'm Shyam's AI assistant. Ask me anything about his experience, tech stack, or availability!",
    },
  ]);
  const [isChatLoading, setIsChatLoading] = useState(false);

  const handleChatSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const newMsg = { role: "user", text: chatInput };
    setChatMessages((prev) => [...prev, newMsg]);
    setChatInput("");
    setIsChatLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY; // API Key provided by execution environment
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

      const systemPrompt =
        "You are an AI assistant for Shyam Pareek, a MERN Stack Developer. Answer questions about his skills (MongoDB, Express, React, Node.js), services, and portfolio. Be friendly, concise, and professional. You act as a representative for Shyam. If a user asks something completely unrelated to tech or hiring, kindly steer the conversation back to Shyam's portfolio and skills.";

      // Combine history for context
      const conversationHistory = chatMessages
        .map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.text}`)
        .join("\n");
      const promptText = `Conversation History:\n${conversationHistory}\n\nVisitor: ${newMsg.text}\nAssistant:`;

      const payload = {
        contents: [{ parts: [{ text: promptText }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
      };

      const result = await fetchWithRetry(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text;
      if (generatedText) {
        setChatMessages((prev) => [
          ...prev,
          { role: "ai", text: generatedText.trim() },
        ]);
      }
    } catch (error) {
      setChatMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "Sorry, I'm having trouble connecting right now. Please try reaching out via the contact form!",
        },
      ]);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {chatOpen && (
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl dark:shadow-black/50 rounded-2xl w-[calc(100vw-3rem)] sm:w-96 mb-4 overflow-hidden flex flex-col transition-all">
          <div className="bg-slate-900 dark:bg-slate-950 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <h3 className="font-bold">AI Assistant</h3>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 flex flex-col gap-4 bg-slate-50 dark:bg-slate-950">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "self-end flex-row-reverse" : "self-start"}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400"}`}
                >
                  {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === "user" ? "bg-blue-600 text-white rounded-tr-sm" : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-tl-sm shadow-sm"}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isChatLoading && (
              <div className="self-start flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white  dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-indigo-600 dark:text-indigo-400 shadow-sm">
                  <Bot size={16} />
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm rounded-tl-sm flex items-center">
                  <Loader2 className="w-4 h-4 animate-spin text-slate-400 dark:text-slate-500" />
                </div>
              </div>
            )}
          </div>
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <form onSubmit={handleChatSubmit} className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about my skills..."
                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 border border-transparent rounded-full text-sm text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
              />
              <button
                type="submit"
                disabled={isChatLoading || !chatInput.trim()}
                className="w-10 h-10 flex items-center justify-center shrink-0 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-md"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-4 rounded-full shadow-xl shadow-slate-900/20 dark:shadow-white/10 hover:scale-105 transition-transform flex items-center justify-center relative group z-50"
      >
        {chatOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6" />
        )}
        {!chatOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-slate-900"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
