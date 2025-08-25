import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";
// Removed invalid reactbits import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arjun Govindan | Fullstack Developer Portfolio",
  description: "Portfolio of Arjun Govindan, Fullstack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}>
        {/* Navbar */}
        <nav className="sticky top-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm transition-all">
          <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
            <Link href="#hero" className="font-bold text-lg tracking-tight hover:opacity-80 transition">Arjun Govindan</Link>
            <div className="flex gap-4 text-sm font-medium items-center">
              <a href="#experience" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Experience</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Projects</a>
              <a href="#resume" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Resume</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
// Removed stray closing brace

// Removed unused hook code
}
