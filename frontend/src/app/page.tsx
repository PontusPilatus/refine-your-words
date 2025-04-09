"use client";

import { useState, useEffect } from "react";

// Generate stable particle data outside the component
const generateStableParticles = () => {
  // Use seed values instead of random numbers
  const seeds = [
    { width: 84, height: 109, top: 48, left: 56, delay: 5.2, duration: 14.7, opacity: 0.15, color: "primary" },
    { width: 64, height: 72, top: 98, left: 45, delay: 4.8, duration: 12.3, opacity: 0.09, color: "secondary" },
    { width: 110, height: 85, top: 69, left: 50, delay: 5.8, duration: 22.4, opacity: 0.15, color: "primary" },
    { width: 65, height: 105, top: 11, left: 13, delay: 0.6, duration: 10.5, opacity: 0.12, color: "secondary" },
    { width: 111, height: 93, top: 31, left: 95, delay: 8.0, duration: 11.2, opacity: 0.07, color: "primary" },
    { width: 36, height: 119, top: 86, left: 41, delay: 4.4, duration: 15.4, opacity: 0.15, color: "secondary" },
    { width: 31, height: 91, top: 28, left: 71, delay: 6.2, duration: 23.6, opacity: 0.11, color: "primary" },
    { width: 100, height: 48, top: 95, left: 81, delay: 8.3, duration: 23.4, opacity: 0.15, color: "secondary" },
    { width: 106, height: 32, top: 7, left: 26, delay: 3.5, duration: 29.3, opacity: 0.09, color: "primary" },
    { width: 27, height: 73, top: 43, left: 36, delay: 8.6, duration: 21.8, opacity: 0.12, color: "secondary" },
    { width: 112, height: 107, top: 31, left: 8, delay: 6.0, duration: 22.4, opacity: 0.08, color: "primary" },
    { width: 91, height: 36, top: 66, left: 30, delay: 8.5, duration: 27.0, opacity: 0.15, color: "secondary" },
    { width: 28, height: 82, top: 62, left: 26, delay: 5.9, duration: 18.8, opacity: 0.11, color: "primary" },
    { width: 33, height: 83, top: 50, left: 59, delay: 5.3, duration: 12.8, opacity: 0.14, color: "secondary" },
    { width: 101, height: 111, top: 33, left: 63, delay: 5.3, duration: 18.9, opacity: 0.09, color: "primary" },
    { width: 72, height: 62, top: 71, left: 38, delay: 4.7, duration: 11.4, opacity: 0.20, color: "secondary" },
    { width: 68, height: 29, top: 52, left: 72, delay: 9.7, duration: 18.1, opacity: 0.15, color: "primary" },
    { width: 81, height: 83, top: 29, left: 86, delay: 9.0, duration: 25.5, opacity: 0.11, color: "secondary" },
    { width: 92, height: 80, top: 14, left: 33, delay: 3.6, duration: 27.9, opacity: 0.09, color: "primary" },
    { width: 109, height: 111, top: 7, left: 34, delay: 7.3, duration: 27.0, opacity: 0.15, color: "secondary" }
  ];
  return seeds;
};

// Create the particles array outside the component
const particles = generateStableParticles();

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    refinedPrompt: string;
    suggestions: string[];
    improvements: string[];
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setResult({
        refinedPrompt: `I want ${prompt.toLowerCase().includes("about") ? "" : "information about "
          }${prompt}, focusing specifically on the most important aspects and presented in a structured format.`,
        suggestions: [
          "Be more specific about your desired outcome",
          "Consider adding context about your level of expertise",
          "Specify the format you prefer for the response",
          "Indicate how detailed you want the response to be",
        ],
        improvements: [
          "Added clarity on the subject matter",
          "Specified structure requirements",
          "Focused on important aspects",
        ],
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <main className="relative container mx-auto min-h-screen px-4 py-12 max-w-6xl">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center mb-12 pt-8">
        <div className="relative mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white relative z-10 font-display">
            Refine your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Words</span>
          </h1>
        </div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl relative">
          <span className="relative z-10">Elevate your AI interactions with expert prompt engineering guidance.
            Write better prompts, get better results.</span>
          <span className="absolute w-full h-1 bg-gradient-to-r from-primary-300/50 to-secondary-300/50 bottom-0 left-0 rounded-full"></span>
        </p>
      </div>

      {/* Main Content */}
      <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/20 p-6 md:p-8 lg:p-10 mt-8 max-w-4xl mx-auto overflow-hidden">
        <div className="mb-8 relative">
          <h2 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white font-display">Prompt Engineering Assistant</h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
            Enter your prompt below and our AI will help you improve it for better results.
          </p>
          <div className="absolute h-1 w-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full -bottom-2 left-0"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <textarea
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 min-h-[150px]"
              placeholder="Enter your prompt here... (e.g., 'Tell me about quantum computing')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={6}
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!prompt.trim() || isLoading}
              className="bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-500 hover:to-primary-400 px-6 py-3 rounded-xl font-medium shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Refining...</span>
                </span>
              ) : (
                "Refine My Prompt"
              )}
            </button>
          </div>
        </form>

        {result && (
          <div className="mt-10 space-y-8 text-left relative z-10">
            <div className="rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/10 p-6 border border-primary-200 dark:border-primary-800/30 shadow-md">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-300 mb-3 font-display">Refined Prompt</h3>
              <div className="bg-white/80 dark:bg-slate-800/80 p-4 rounded-lg border border-primary-200 dark:border-primary-800/30 shadow-sm backdrop-blur-sm">
                <p className="text-slate-900 dark:text-white">{result.refinedPrompt}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/10 p-6 border border-amber-200 dark:border-amber-800/30 shadow-md">
                <h3 className="text-xl font-bold text-amber-700 dark:text-amber-300 mb-3 font-display">Suggestions</h3>
                <ul className="space-y-3">
                  {result.suggestions.map((suggestion, i) => (
                    <li key={i} className="flex items-start bg-white/80 dark:bg-slate-800/80 p-2 px-3 rounded-lg border border-amber-200/50 dark:border-amber-800/20 backdrop-blur-sm">
                      <span className="text-amber-500 mr-2 mt-0.5">•</span>
                      <span className="text-slate-700 dark:text-slate-300">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-800/10 p-6 border border-secondary-200 dark:border-secondary-800/30 shadow-md">
                <h3 className="text-xl font-bold text-secondary-700 dark:text-secondary-300 mb-3 font-display">Improvements</h3>
                <ul className="space-y-3">
                  {result.improvements.map((improvement, i) => (
                    <li key={i} className="flex items-start bg-white/80 dark:bg-slate-800/80 p-2 px-3 rounded-lg border border-secondary-200/50 dark:border-secondary-800/20 backdrop-blur-sm">
                      <span className="text-secondary-500 mr-2 mt-0.5">✓</span>
                      <span className="text-slate-700 dark:text-slate-300">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-20 text-center text-sm text-slate-500 dark:text-slate-400 py-4">
        <p>Crafted with 💙 for better AI interactions</p>
      </footer>
    </main>
  );
}
