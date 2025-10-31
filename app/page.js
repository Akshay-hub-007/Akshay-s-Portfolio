'use client'
import { useTheme } from "next-themes";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";
export default function Home() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to avoid hydration mismatch for theme-dependent UI
    setMounted(true);
  }, []);

  const activeTheme = resolvedTheme || theme; // prefer resolved theme when available
  const currentTheme = activeTheme ?? 'light';

  return (
    <div>
      <button
        onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        className="fixed top-4 right-4 p-2 rounded-full bg-gray-200  shadow-md transition-all duration-300 z-50"
      >
        <span aria-hidden="true" suppressHydrationWarning>
          {mounted ? (currentTheme === "light" ? "🌙" : "☀️") : ""}
        </span>
      </button>
      <Hero/>
    </div>
  );
}
