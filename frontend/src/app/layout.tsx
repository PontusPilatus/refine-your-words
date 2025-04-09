import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Refine your Words - AI Prompt Engineering Assistant",
  description: "Improve your prompting skills with AI-powered suggestions for better results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-950 dark:to-blue-950 min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
