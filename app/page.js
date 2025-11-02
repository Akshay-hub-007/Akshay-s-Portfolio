'use client'
import { useTheme } from "next-themes";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = resolvedTheme || theme;
  const currentTheme = activeTheme ?? 'light';

  // Navigation sections
  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
        style={{ 
          scaleX,
          backgroundColor: 'var(--primary)'
        }}
      />

      {/* Theme Toggle Button */}
      <motion.button
        onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
        className="fixed top-6 right-6 p-3 rounded-full shadow-lg transition-all duration-300 z-50 backdrop-blur-sm"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-light)',
          borderWidth: '1px'
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: 180,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        aria-label="Toggle theme"
      >
        <motion.span 
          aria-hidden="true" 
          suppressHydrationWarning
          className="text-2xl"
          initial={{ rotate: 0 }}
          animate={{ rotate: currentTheme === "light" ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          {mounted ? (currentTheme === "light" ? "🌙" : "☀️") : ""}
        </motion.span>
      </motion.button>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 backdrop-blur-sm"
        style={{
          backgroundColor: 'var(--primary)',
          color: 'white'
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrollYProgress.get() > 0.2 ? 1 : 0,
          scale: scrollYProgress.get() > 0.2 ? 1 : 0
        }}
        whileHover={{ 
          scale: 1.1,
          y: -2,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M5 10l7-7m0 0l7 7m-7-7v18" 
          />
        </svg>
      </motion.button>

      {/* Floating Navigation Dots */}
      <motion.nav 
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        aria-label="Page navigation"
      >
        {sections.map((section) => (
          <motion.a
            key={section.id}
            href={`#${section.id}`}
            className="group relative"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Go to ${section.label}`}
          >
            <motion.div
              className="w-3 h-3 rounded-full border-2 transition-colors"
              style={{
                borderColor: 'var(--primary)',
                backgroundColor: 'transparent'
              }}
              whileHover={{
                backgroundColor: 'var(--primary)'
              }}
            />
            <span 
              className="absolute left-6 top-1/2 -translate-y-1/2 px-3 py-1 rounded text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg"
              style={{
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                borderColor: 'var(--border-light)',
                borderWidth: '1px'
              }}
            >
              {section.label}
            </span>
          </motion.a>
        ))}
      </motion.nav>

      {/* Main Content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Hero />
        
        {/* All Other Sections with Smooth Transitions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Skills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Certifications />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GitHub />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.div>
      </motion.main>
    </div>
  );
}