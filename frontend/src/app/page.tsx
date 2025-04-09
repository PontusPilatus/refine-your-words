"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{
    refinedPrompt: string;
    suggestions: string[];
    improvements: string[];
  } | null>(null);

  // Example prompts that users can quickly use
  const examplePrompts = [
    "Tell me about quantum computing",
    "How to make a perfect sourdough bread",
    "Explain the impact of AI on modern healthcare",
    "Compare renewable energy sources"
  ];

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

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

  const handleReset = () => {
    setPrompt("");
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-900 dark:text-white font-display">
              Refine your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Words</span>
            </h1>
          </div>
          <nav className="hidden sm:flex space-x-6">
            <a href="#" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">Home</a>
            <a href="#features" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">Features</a>
            <a href="#examples" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">Examples</a>
            <a href="https://github.com/your-username/refine-your-words" className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">GitHub</a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 flex flex-col items-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 font-display leading-tight">
              Refine your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Words</span> for
              better AI results
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
              Elevate your AI interactions with expert prompt engineering guidance.
              Write better prompts, get better results.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#prompt-builder"
                className="bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-lg font-medium shadow-md transition-colors"
              >
                Get Started
              </a>
              <a
                href="#examples"
                className="bg-white dark:bg-slate-800 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg font-medium shadow-sm transition-colors"
              >
                See Examples
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white dark:bg-slate-800 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900 dark:text-white font-display">
              Why Refine Your Prompts?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Better Results</h3>
                <p className="text-slate-600 dark:text-slate-300">Get more accurate, relevant, and useful responses from AI systems with properly engineered prompts.</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Learn Best Practices</h3>
                <p className="text-slate-600 dark:text-slate-300">Understand the techniques that experts use to craft effective prompts for AI tools.</p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-600">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">Save Time</h3>
                <p className="text-slate-600 dark:text-slate-300">Reduce back-and-forth iterations with AI systems by getting the right response the first time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Example Prompts Section */}
        <section id="examples" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-6 text-slate-900 dark:text-white font-display">
              Example Prompts
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
              Not sure where to start? Try one of these example prompts or use them as inspiration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {examplePrompts.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="text-left p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all"
                >
                  <p className="text-slate-900 dark:text-white truncate">{example}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">Click to use this prompt</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Prompt Builder Section */}
        <section id="prompt-builder" className="py-10 bg-white dark:bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white font-display">Prompt Engineering Assistant</h2>
                <p className="text-slate-600 dark:text-slate-300">
                  Enter your prompt below and our AI will help you improve it for better results.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl border border-slate-200 dark:border-slate-600">
                  <label htmlFor="prompt" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Prompt</label>
                  <textarea
                    id="prompt"
                    className="w-full rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 px-4 py-3 text-slate-900 dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 min-h-[150px]"
                    placeholder="Enter your prompt here... (e.g., 'Tell me about quantum computing')"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={6}
                  />
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    Clear
                  </button>
                  <button
                    type="submit"
                    disabled={!prompt.trim() || isLoading}
                    className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-2 rounded-lg font-medium shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isLoading ? (
                      <span className="flex items-center">
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
                <div className="mt-10 space-y-8">
                  <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                    <div className="bg-slate-100 dark:bg-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Results</h3>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-800/50">
                      <div className="mb-8">
                        <h4 className="text-md font-semibold text-primary-700 dark:text-primary-400 mb-2">Refined Prompt</h4>
                        <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                          <p className="text-slate-900 dark:text-white">{result.refinedPrompt}</p>
                        </div>
                        <div className="mt-3 flex">
                          <button
                            className="text-primary-600 text-sm flex items-center hover:text-primary-700"
                            onClick={() => {
                              navigator.clipboard.writeText(result.refinedPrompt);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            Copy to clipboard
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-md font-semibold text-amber-700 dark:text-amber-400 mb-3">Suggestions</h4>
                          <ul className="space-y-2">
                            {result.suggestions.map((suggestion, i) => (
                              <li key={i} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg border border-slate-200 dark:border-slate-600 flex items-start">
                                <span className="text-amber-500 mr-2 mt-0.5">•</span>
                                <span className="text-slate-700 dark:text-slate-300">{suggestion}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-md font-semibold text-secondary-700 dark:text-secondary-400 mb-3">Improvements Made</h4>
                          <ul className="space-y-2">
                            {result.improvements.map((improvement, i) => (
                              <li key={i} className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg border border-slate-200 dark:border-slate-600 flex items-start">
                                <span className="text-secondary-500 mr-2 mt-0.5">✓</span>
                                <span className="text-slate-700 dark:text-slate-300">{improvement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <h4 className="text-md font-semibold text-slate-900 dark:text-white mb-4">What's Next?</h4>
                        <div className="flex flex-wrap gap-3">
                          <button
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            onClick={() => setPrompt(result.refinedPrompt)}
                          >
                            Use Refined Prompt
                          </button>
                          <button
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                          >
                            Save Prompt
                          </button>
                          <button
                            className="px-4 py-2 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                            onClick={handleReset}
                          >
                            Start Over
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-100 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-600 dark:text-slate-400">
                © 2024 Refine your Words. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">
                About
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">
                Privacy
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">
                Terms
              </a>
              <a href="https://github.com/your-username/refine-your-words" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
