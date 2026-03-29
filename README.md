# Shyam Pareek - MERN Stack Developer Portfolio

A modern, minimal, and highly interactive personal portfolio built with React and Tailwind CSS. This portfolio is designed to showcase projects, skills, and services with a premium aesthetic, and it includes cutting-edge AI features powered by the Google Gemini API.

✨ Features

Modern & Minimal UI: Clean design with ample whitespace, soft shadows, and smooth hover animations.

Fully Responsive: Mobile-first approach ensuring the portfolio looks great on all devices.

Smooth Scrolling Navigation: Easy single-page navigation with an active section scroll-spy.

🤖 AI Assistant Chatbot: A floating widget that allows visitors to chat with an AI trained to answer questions about your skills, experience, and availability.

✨ AI Email Drafter: A smart contact form feature that takes a visitor's rough keywords and automatically drafts a professional inquiry email.

State-Based Routing: Seamless transitions to Privacy Policy and Terms of Service pages without the need for external routing libraries.

🛠️ Tech Stack

Frontend Framework: React.js

Styling: Tailwind CSS

Icons: Lucide React

AI Integration: Google Generative AI (Gemini 1.5 Flash)

🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites

You will need Node.js and npm (Node Package Manager) installed on your system.

Installation

Clone the repository (or download the source code):

git clone [https://github.com/yourusername/portfolio.git](https://github.com/yourusername/portfolio.git)
cd portfolio


Install dependencies:

npm install
# or using yarn
yarn install


Add your Assets:
Ensure your profile image (named 1000210206.jpg based on the code) is placed inside your public/ directory so it resolves correctly in the Hero, About, and Navigation sections.

🔑 Configuring the Gemini API

To enable the AI Chatbot and AI Email Drafter, you must provide your own Gemini API key.

Go to Google AI Studio.

Create and copy your API Key.

Create a .env file in the root directory of your project.

Add your API key to the environment variables. If you are using Vite, it should look like this:

VITE_GEMINI_API_KEY=your_actual_api_key_here


(If you are using Create React App, name it REACT_APP_GEMINI_API_KEY instead).

Update App.jsx: Locate the apiKey variables inside handleDraftMessage and handleChatSubmit and update them to use your environment variable:

// Replace: const apiKey = "";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY; 


Running the Application

Start the development server:

npm run dev
# or for Create React App:
npm start


Open http://localhost:5173 (or your configured port) to view it in the browser.

🎨 Customization

Colors & Fonts: Modify the Tailwind classes in App.jsx or adjust your tailwind.config.js to change the global color scheme.

Content: Update the arrays in the Skills, Services, and Projects sections within App.jsx to reflect your actual work and expertise.

AI Personality: To change how the AI responds, locate the systemPrompt variable inside handleChatSubmit and tweak the instructions given to the AI.

📄 Legal

This project includes boilerplate Privacy Policy and Terms of Service pages. Please review and update these pages to ensure they fully comply with your local laws and personal business practices before deploying to production.

🤝 License

This project is open-source and available under the MIT License.