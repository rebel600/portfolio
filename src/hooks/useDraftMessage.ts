import { fetchWithRetry } from '@/utils/chat-service';
import { useState } from 'react';

export const useDraftMessage = () => {
    const [contactMessage, setContactMessage] = useState("");
    const [isDrafting, setIsDrafting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleDraftMessage = async () => {
        if (!contactMessage.trim()) return;
        
        setIsDrafting(true);
        setError(null);
        
        try {
            // ✅ FIX #1: Use VITE_ prefix for environment variables
            const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
            
            // ✅ FIX #2: Validate API key exists
            if (!apiKey) {
                throw new Error("Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file.");
            }

            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

            const systemPrompt = "You are an assistant helping a client draft an inquiry email to a freelance MERN stack developer named Shyam Pareek. The user will provide a few rough keywords or a basic idea. Expand it into a polite, professional 2-3 paragraph message. Output ONLY the drafted message content, without any extra commentary or placeholders.";

            const payload = {
                contents: [{ parts: [{ text: `Keywords/Draft: ${contactMessage}` }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] }
            };

            const result = await fetchWithRetry(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // ✅ FIX #3: Better error handling for API response
            if (!result || !result.candidates || result.candidates.length === 0) {
                throw new Error("No response from AI. Please try again.");
            }

            const generatedText = result.candidates[0]?.content?.parts?.[0]?.text;
            
            if (!generatedText) {
                throw new Error("Failed to generate message. Please try again.");
            }

            // ✅ FIX #4: Replace message instead of appending
            setContactMessage(generatedText.trim());
            
        } catch (error) {
            // ✅ FIX #5: Proper error handling
            const errorMessage = error instanceof Error ? error.message : "Unable to reach AI currently. Please continue typing your message.";
            setError(errorMessage);
            console.error("Draft message error:", error);
        } finally {
            setIsDrafting(false);
        }
    };

    return { 
        contactMessage, 
        setContactMessage, 
        isDrafting, 
        error,
        setError,
        handleDraftMessage 
    };
};